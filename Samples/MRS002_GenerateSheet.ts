/*
 * Name:    MRS002_GenerateSheet
 * Description:
 *          a quick script to allow us to generate a template Excel Spreadsheet for EVS100
 *          
 *          Leverages: https://github.com/markatil/xlsx-style
 *  
 * Usage:
 *  Arguments
 *
 *
 * History:
 *  
 * */

//import { METHODS } from "http";

//import { string } from "../node_modules/xlsx-style/dist/xlsx.full.min";

// <reference path="../node_modules/xlsx-style/dist/xlsx.core.min.js" />
/// <reference path="../node_modules/xlsx-style/dist/xlsx.full.min.js" />
/// <reference path="typings/apiClasses.ts" />
declare var XLSX: any;

const green = 'FF92D050';
const blue = 'FFB8CCE4';
const yellow = 'FFFFFF00';

class MRS002_GenerateSheet {
    private gController: IInstanceController;
    private gDebug: IScriptLog;
    private gArgs;
    gContent: IContentElement = null;

    private gSheetsName = "Control";
    //private gSheetFileName = "Mass Balance.xlsx";


    constructor(args: IScriptArgs) {
        this.gController = args.controller;
        this.gDebug = args.log;
        this.gArgs = args.args;
        this.gContent = args.controller.GetContentElement();

        this.gDebug.Info("Running MRS002_GenerateSheet");

        // check to see if we have the /debug in the args for the script so we have verbose
        // logging in the browser
        if (-1 != args.args.indexOf("/debug")) {
            this.gDebug.SetDebug();
            this.gDebug.Debug("Debugging turned on");
        }
    }

    /**
    * Script initialization function.
    */
    public static Init(args: IScriptArgs): void {
        new MRS002_GenerateSheet(args).run();
    }

    private run(): void {
        var _this = this;

        var $button = this.addButton({ text: "Generate Sheet", width: "120", top: "28", left: "400", id: "fileSelect" });
        $button.on("click", function (event) {
            _this.buttonClicked();
        });
    }

    private async buttonClicked() {
        let program = ScriptUtil.GetFieldValue("WAMINM");
        let programDescription = ScriptUtil.GetFieldValue("WAMIDS");
        let transactions = ListControl.ListView.GetValueByColumnName("TRNM");
        let transactionsDescription = ListControl.ListView.GetValueByColumnIndex(1);

        if (program && program != "" && transactions && transactions.length > 0 && transactions[0] != "" && transactionsDescription && transactionsDescription.length > 0) {
            let transaction = transactions[0];
            let transactionDescription = transactionsDescription[0];

            this.gDebug.Debug("Program: " + program);
            this.gDebug.Debug("Transaction: " + transaction);
            let fields = await this.retrieveAPIFields(program, transaction);
            if (fields) {
                await this.generateSpreadsheet({ program: program, programDescription: programDescription, transaction: transaction, transactionDescription: transactionDescription, incomingFields: fields, outgoingFields: null });
            }
        }
    }

    private async retrieveAPIFields(aProgram: string, aTransaction: string) {
        let result = null;
        if (aProgram.length > 0 && aTransaction.length > 0) {
            result = await this.MRS001MI_LstFields(aProgram, aTransaction, "I");
        }
        return (result);
    }

    // ****************************
    // * -- spreadsheet layout -- *
    // ****************************

    private generateControlSheetData(aSheetName: string, aDescription): rowResult {
        let result: rowResult = new rowResult();
        result.startRow = 0;

        result.rows.push([{ v: "Worksheet", b: true }, { v: "Description", b: true }, { v: "Data", b: true }]);

        result.rows.push([{ v: aSheetName }, { v: aDescription }, { v: "x" }]);

        result.maxCharacters[0] = "Worksheet".length > aSheetName.length ? "Worksheet".length : aSheetName.length;
        result.maxCharacters[1] = "Description".length > aDescription.length ? "Description".length : aDescription.length;
        result.maxCharacters[2] = 10;

        return (result);
    }

    private generateAPISheet(amiAPIs: miAPI): rowResult {
        let result: rowResult = new rowResult();
        result.startRow = 0;

        let titleRow = [{ v: "MESSAGE", b: true }];
        let descriptionRow = [{ v: "Description (<type>:<length>)", b: true }];
        let processRow = [{ v: "no", b: true, border: { bottom: { style: "medium", color: "000000" } } }];

        result.maxCharacters[0] = 25;

        if (amiAPIs && amiAPIs.incomingFields && amiAPIs.incomingFields.length > 0) {
            for (let i = 0; i < amiAPIs.incomingFields.length; i++) {
                result.maxCharacters[i + 1] = (amiAPIs.incomingFields[i].fieldDescription.length + 5 + amiAPIs.incomingFields[i].length.toString().length);
                if (result.maxCharacters[i + 1] < 5) result.maxCharacters[i + 1] = 5;

                titleRow.push(amiAPIs.incomingFields[i].generateTitleRow());
                descriptionRow.push(amiAPIs.incomingFields[i].generateDescriptionRow());
                processRow.push(amiAPIs.incomingFields[i].generateProcessRow());
            }
        }

        result.rows.push(titleRow);
        result.rows.push(descriptionRow);
        result.rows.push(processRow);

        return (result);
    }

    private async generateSpreadsheet(amiAPIData: miAPI) {
        let workBook = { SheetNames: [], Sheets: {} };

        let baseSheetName = amiAPIData.program + "_" + amiAPIData.transaction;
        let fileName = baseSheetName + "_TEMPLATE.xlsx";
        let sheetName = "API_" + baseSheetName;
        let description = amiAPIData.programDescription + ": " + amiAPIData.transactionDescription;


        let controlRows = this.generateControlSheetData(sheetName, description);

        // generate the spreadsheet itself
        let controlWorksheet = this.sheet_from_array_of_arrays(controlRows.rows, null);
        controlWorksheet['!cols'] = this.convertCharactersToWidth(controlRows.maxCharacters);

        // create the sheet
        workBook.SheetNames.push(this.gSheetsName);
        workBook.Sheets[this.gSheetsName] = controlWorksheet;

        let loadSheetRows = this.generateAPISheet(amiAPIData);
        let loadWorksheet = this.sheet_from_array_of_arrays(loadSheetRows.rows, null);
        loadWorksheet['!cols'] = this.convertCharactersToWidth(loadSheetRows.maxCharacters);

        workBook.SheetNames.push(sheetName);
        workBook.Sheets[sheetName] = loadWorksheet;

        let wbOut = XLSX.write(workBook, {
            bookType: 'xlsx', type: 'binary'
        });

        fileName = fileName;

        var file;
        let properties = { type: 'application/octet-stream' }
        try {
            file = new File([this.string2ArrayBufer(wbOut)], fileName, properties);
        }
        catch (e) {
            file = new Blob([this.string2ArrayBufer(wbOut)], properties);
        }
        this.saveAs(file, fileName);
    }

    // ***************************************
    // * -- spreadsheet generic functions -- *
    // ***************************************
    private sheet_from_array_of_arrays(data, opts) {
        var ws = {};
        var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };

        let maxColumnNumber = 0;

        for (var R = 0; R != data.length; ++R) {
            
            //for (var C = 0; C != data[R].length; ++C) {
            if (R < data.length && undefined != data[R].length) {
                for (var C = 0; C != data[R].length; ++C) {
                    if (range.s.r > R) range.s.r = R;
                    if (range.s.c > C) range.s.c = C;
                    if (range.e.r < R) range.e.r = R;
                    if (range.e.c < C) range.e.c = C;

                    let dTemp = data[R][C];
                    let dValue = null;
                    let bold = false;
                    let italics = false;
                    let fill = null;
                    let formula = null;
                    let fontSize = null;
                    let underline = false;
                    let wrapText = false;
                    let fontColour = null;
                    let border = null;
                    let numberFormat = null;
                    if (dTemp) {
                        dValue = dTemp.v;
                        if (dTemp.b) {
                            bold = true;
                        }
                        if (dTemp.fg) {
                            fill = dTemp.fg;
                        }
                        if (dTemp.f) {
                            formula = dTemp.f;
                            dValue = formula;
                        }
                        if (dTemp.fontsize) {
                            fontSize = dTemp.fontsize;
                        }
                        if (dTemp.u) {
                            underline = true;
                        }
                        if (dTemp.wrapText) {
                            wrapText = true;
                        }
                        if (dTemp.fontColour) {
                            fontColour = dTemp.fontColour;
                        }
                        if (dTemp.border) {
                            border = dTemp.border;
                        }
                        if (dTemp.numFmt) {
                            numberFormat = dTemp.numFmt;
                        }
                        if (dTemp.i) {
                            italics = true;
                        }
                    }

                    var cell: any = {
                        v: dValue
                    };//data[R][C] };
                    if (cell.v == null) continue;
                    var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

                    if (typeof cell.v === 'number') cell.t = 'n';
                    else if (typeof cell.v === 'boolean') cell.t = 'b';
                    else if (cell.v instanceof Date) {
                        cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                        cell.v = XLSX.datenum(cell.v);
                    }
                    else cell.t = 's';

                    if (formula) {
                        cell.f = formula;
                    }

                    if (true == bold || true == underline || null != fontSize || true == wrapText || null != fill || null != fontColour || null != border || null != numberFormat || true == italics) {
                        if (cell.s == undefined) {
                            cell.s = {};

                            if (cell.s.font == undefined) {
                                cell.s.font = {};
                                if (true == bold) {
                                    cell.s.font.bold = bold;
                                }
                                if (true == underline) {
                                    cell.s.font.underline = underline;
                                }
                                if (true == italics) {
                                    cell.s.font.italic = italics;
                                }
                                if (null != fontSize) {
                                    cell.s.font.sz = fontSize;
                                }
                                if (null != fontColour) {
                                    cell.s.font.color = fontColour;
                                }
                            }
                            if (true == wrapText) {
                                cell.s.alignment = { wrapText: '1' };
                            }
                            if (null != fill) {
                                cell.s.fill = fill;
                            }
                            if (null != border) {
                                cell.s.border = border;
                            }
                            if (null != numberFormat) {
                                cell.s.numFmt = numberFormat;
                            }
                        }
                    }


                    ws[cell_ref] = cell;
                }
            }
            else {
                this.gDebug.Error("Error in data, undefined array length");
            }
        }
        
        if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
        return ws;
    }

    private saveAs(blob, fileName) {
        var url = window.URL.createObjectURL(blob);

        var anchorElem = document.createElement("a");
        anchorElem.href = url;
        anchorElem.download = fileName;

        document.body.appendChild(anchorElem);
        anchorElem.click();

        document.body.removeChild(anchorElem);

        // On Edge, revokeObjectURL should be called only after
        // a.click() has completed, atleast on EdgeHTML 15.15048
        setTimeout(function () {
            window.URL.revokeObjectURL(url);
        }, 1000);
    }

    private addRows(aMain, aNew) {
        if (null != aMain && aNew && undefined != aNew && aNew.length > 0) {
            for (let i = 0; i < aNew.length; i++) {
                aMain.push(aNew[i]);
            }
        }
    }

    private string2ArrayBufer(s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return (buf);
    }

    private MRS001MI_LstFields(aProgramName : string, aTransaction : string, aDirection: string) {
        return new Promise<any>((resolve) => {
            let request = new MIRequest();

            request.program = "MRS001MI";
            request.transaction = "LstFields";
            request.record = { 'MINM': aProgramName, 'TRNM': aTransaction, 'TRTP': aDirection };
            request.outputFields = ['MINM', 'TRNM', 'TRTP', 'FLNM', 'FLDS', 'LENG', 'TYPE', 'MAND'];

            // this should not be done where we will have large numbers of records!
            request.maxReturnedRecords = 0;


            MIService.Current.executeRequest(request).then((response: IMIResponse) => {
                if (null != response && null != response.items && response.items.length > 0) {
                    let result: apiField[] = [];
                    for (let i = 0; i < response.items.length; i++) {
                        let field = new apiField();
                        field.fieldName = response.items[i].FLNM,
                        field.fieldDescription = response.items[i].FLDS,
                        field.length = response.items[i].LENG,
                        field.fieldType = response.items[i].TYPE,
                        field.mandatory = response.items[i].MAND

                        result.push(field);
                    }
                    resolve(result);
                }
                else {
                    this.gDebug.Debug("  +-- no records found");
                    resolve(null);
                }
            }
            ).catch((response: IMIResponse) => {
                this.gDebug.Error(response.errorMessage);
                resolve(null);
            });
        });
    }

    // ***************************
    // * -- Utility functions -- *
    // ***************************


    private addButton(_a) {
        var text = _a.text, width = _a.width, top = _a.top, left = _a.left, id = _a.id;
        var buttonElement = new ButtonElement();
        buttonElement.Name = id || (text + top + left);
        buttonElement.Value = text;
        var button = ControlFactory.CreateButton(buttonElement);
        button.Position = {
            Width: width || "100",
            Top: top || "0",
            Left: left || "0"
        };
        var contentElement = this.gController.GetContentElement();
        contentElement.Add(button);
        return button;
    }


    private convertCharactersToWidth(aCharacters) {
        let result = [];

        if (aCharacters && aCharacters.length > 0) {
            for (let i = 0; i < aCharacters.length; i++) {
                result[i] = { wch: aCharacters[i] * 1.2 };
            }
        }

        return (result);
    }
}

class rowResult {
    public rows = [];
    public mergeCells = [];
    public maxCharacters = [];
    public startRow = 0;
    public getEndRow() {
        let result = 0;
        if (null != this.rows && undefined != this.rows) {
            result = this.rows.length + this.startRow;
        }
        return (result);
    }
}
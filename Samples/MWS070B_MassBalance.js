/*
 * Name:    MWS070B_MassBalance
 * Description:
 *
 *
 * Usage:
 *  Arguments
 *
 *
 * History:
 *  20191125    * base script created
 * */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/// <reference path="../node_modules/xlsx-style/dist/xlsx.full.min.js" />
/// <reference path="typings/massBalance.ts" />
// MTITNO, MTTRDT, MTTRTM
var green = 'FF92D050';
var blue = 'FFB8CCE4';
var yellow = 'FFFFFF00';
var MWS070B_MassBalance = /** @class */ (function () {
    function MWS070B_MassBalance(args) {
        this.gContent = null;
        this.gSheetName = "Mass Balance";
        this.gSheetFileName = "Mass Balance.xlsx";
        this.gRowHighlightColour = 'FFE9E9E9';
        this.gTotalHightlightColour = 'FFB9B9B9';
        this.gSeperatorCharacter = ";";
        this.gSuppressSpreadsheet = false;
        this.gSuppressHistory = false;
        this.gDebuggingValues = false;
        this.itemLookupTable = [
        //    {
        //    facility: 'BLT',
        //    itemNumber: '1P02',
        //    childItems: ['4102', '4107', '4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //}, {
        //        facility: 'BLT',
        //        itemNumber: '1P07',
        //        childItems: ['4201', '4202', '4203', '4309', '4311', '4312']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P08',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P09',
        //        childItems: ['4305', '4308', '4309', '4311']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P14',
        //        childItems: ['4305', '4308', '4309', '4311', '4312']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P43',
        //        childItems: ['4313', '4314']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P44',
        //        childItems: ['4504']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P45',
        //        childItems: ['4311', '4312','4501']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P46',
        //        childItems: ['4505']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P50',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P55',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P60',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P70',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P80',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P90',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1P95',
        //        childItems: ['4110', '4150', '4160', '4161', '4170', '4180', '4185', '4195', '4201', '4202', '4203', '4305', '4308', '4309', '4311', '4312', '4313']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N30',
        //        childItems: ['4N30', '4N55']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N32',
        //        childItems: ['4N32']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N33',
        //        childItems: ['4N33']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N34',
        //        childItems: ['4N34']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N35',
        //        childItems: ['4N35']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N49',
        //        childItems: ['4N49']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N50',
        //        childItems: ['4N48', '4N51', '4N53']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N51',
        //        childItems: ['4N44', '4N51']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N55',
        //        childItems: ['4N47', '4N55', '4N77', '4N78']
        //    }, {
        //        facility: 'BLT',
        //        itemNumber: '1N57',
        //        childItems: ['4N64']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P02',
        //        childItems: ['4102', '4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P04',
        //        childItems: ['4250', '4251']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P07',
        //        childItems: ['4201', '4203', '4210', '4212', '4213', '4309', '4312', '4315', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P08',
        //        childItems: ['4110', '4160', '4161', '4170', '4180', '4201', '4309', '4312', '4315', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P09',
        //        childItems: ['4309', '4315', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P14',
        //        childItems: ['4312', '4309', '4315', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P43',
        //        childItems: ['4314', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P45',
        //        childItems: ['4501', '4503', '4309', '4312', '4315', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P47',
        //        childItems: ['4503', '4501', '4309', '4312', '4315', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P50',
        //        childItems: ['4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P55',
        //        childItems: ['4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P60',
        //        childItems: ['4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P70',
        //        childItems: ['4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P80',
        //        childItems: ['4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P90',
        //        childItems: ['4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P95',
        //        childItems: ['4195', '4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }, {
        //        facility: 'MNT',
        //        itemNumber: '1P96',
        //        childItems: ['4196', '4110', '4160', '4161', '4170', '4180', '4201', '4212', '4213', '4203', '4305', '4309', '4312', '4316', '4317']
        //    }
        ];
        this.columnWidths = [
            { wch: 8.43 },
            { wch: 10.43 },
            { wch: 14.86 },
            { wch: 2.29 },
            { wch: 8.43 },
            { wch: 2.43 },
            { wch: 10.71 },
            { wch: 1.00 },
            { wch: 9.57 },
            { wch: 1.29 },
            { wch: 11.57 },
            { wch: 1.29 },
            { wch: 14.43 },
            { wch: 1.71 },
            { wch: 10.43 },
            { wch: 1.86 },
            { wch: 12.00 },
            { wch: 1.14 },
            { wch: 11.71 },
            { wch: 11.14 },
            { wch: 13.29 },
            { wch: 34.43 } // V
        ];
        this.gController = args.controller;
        this.gDebug = args.log;
        this.gArgs = args.args;
        this.gContent = args.controller.GetContentElement();
        this.gDebug.Info("Running MWS070B_MassBalance");
        // check to see if we have the /debug in the args for the script so we have verbose
        // logging in the browser
        if (-1 != args.args.indexOf("/debug")) {
            this.gDebug.SetDebug();
            this.gDebug.Debug("Debugging turned on");
        }
        if (-1 != args.args.indexOf("/suppressSpreadsheet")) {
            this.gSuppressSpreadsheet = true;
        }
        if (-1 != args.args.indexOf("/suppressRelatedHistory")) {
            this.gSuppressHistory = true;
        }
        if (-1 != args.args.indexOf("/debuggingValues")) {
            this.gDebuggingValues = true;
        }
    }
    /**
    * Script initialization function.
    */
    MWS070B_MassBalance.Init = function (args) {
        new MWS070B_MassBalance(args).run();
    };
    MWS070B_MassBalance.prototype.run = function () {
        var _this = this;
        this.gDebug.Debug("Browser Locale: " + this.getBrowserLocale());
        var $button = this.addButton({ text: "Mass Balance", width: "120", top: "28", left: "10", id: "fileSelect" });
        $button.on("click", function (event) {
            _this.buttonClicked();
        });
    };
    MWS070B_MassBalance.prototype.buttonClicked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var itemNumber, selectedWarehouse, facility, selectedItemNumbers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemNumber = "";
                        selectedWarehouse = ListControl.ListView.GetValueByColumnName("WHLO");
                        facility = "BLT";
                        if (!(selectedWarehouse && selectedWarehouse.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.MMS005MI_GetWarehouse(selectedWarehouse[0])];
                    case 1:
                        facility = _a.sent();
                        _a.label = 2;
                    case 2:
                        selectedItemNumbers = ListControl.ListView.GetValueByColumnName("ITNO");
                        if (null != selectedItemNumbers && undefined != selectedItemNumbers && selectedItemNumbers.length > 0) {
                            itemNumber = selectedItemNumbers[0];
                        }
                        this.promptForInputValues(facility, itemNumber);
                        return [2 /*return*/];
                }
            });
        });
    };
    MWS070B_MassBalance.prototype.generate = function (aFacility, aItemNumber, aFromDate, aToDate) {
        return __awaiter(this, void 0, void 0, function () {
            var massBal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieveData(aFacility, aItemNumber, aFromDate, aToDate)];
                    case 1:
                        massBal = _a.sent();
                        if (false == this.gSuppressSpreadsheet) {
                            this.generateSpreadsheet(massBal);
                        }
                        this.gController.ShowMessageInStatusBar("Spreadsheet generated");
                        return [2 /*return*/];
                }
            });
        });
    };
    // ****************************
    // * -- spreadsheet layout -- *
    // ****************************
    MWS070B_MassBalance.prototype.generateSpreadsheet = function (aMassBalance) {
        var workBook = { SheetNames: [], Sheets: {} };
        var rawRows = [];
        var mergedCells = [];
        var currentRow = 0;
        var sheetName = this.gSheetName;
        var fileName = this.gSheetFileName;
        var tempRows = null;
        var headerRows = this.generateHeader(aMassBalance.itemNumber, aMassBalance.itemDescription, aMassBalance.startDate, aMassBalance.endDate, currentRow);
        this.addRows(rawRows, headerRows.rows);
        this.addRows(mergedCells, headerRows.mergeCells);
        currentRow = headerRows.getEndRow();
        var afterHeaders = currentRow;
        var summaryRows = this.generateSummaryResults(aMassBalance, currentRow);
        currentRow = summaryRows.getEndRow();
        var borderAfterSummary = this.setBoder(aMassBalance, currentRow, 0, 20, "medium");
        currentRow = borderAfterSummary.getEndRow();
        var processProductRows = this.generateProcessProduct(aMassBalance, currentRow);
        currentRow = processProductRows.getEndRow();
        var borderAfterProcessedProduct = this.setBoder(aMassBalance, currentRow, 0, 20, "thin");
        currentRow = borderAfterProcessedProduct.getEndRow();
        var finishedGoodsRows = this.generateFinishedGoods(aMassBalance, currentRow);
        currentRow = finishedGoodsRows.getEndRow();
        var borderAfterFinishedGoods = this.setBoder(aMassBalance, currentRow, 0, 20, "thin");
        currentRow = borderAfterFinishedGoods.getEndRow();
        var salesRows = this.generateSalesPerSalesReports(aMassBalance, currentRow);
        currentRow = salesRows.getEndRow();
        // we need to regenerate this after the rest of the data has been generated so the formula are created correctly
        summaryRows = this.generateSummaryResults(aMassBalance, afterHeaders);
        this.addRows(rawRows, summaryRows.rows);
        this.addRows(mergedCells, summaryRows.mergeCells);
        this.addRows(rawRows, borderAfterSummary.rows);
        this.addRows(mergedCells, borderAfterSummary.mergeCells);
        this.addRows(rawRows, processProductRows.rows);
        this.addRows(mergedCells, processProductRows.mergeCells);
        this.addRows(rawRows, borderAfterProcessedProduct.rows);
        this.addRows(mergedCells, borderAfterProcessedProduct.mergeCells);
        this.addRows(rawRows, finishedGoodsRows.rows);
        this.addRows(mergedCells, finishedGoodsRows.mergeCells);
        this.addRows(rawRows, borderAfterFinishedGoods.rows);
        this.addRows(mergedCells, borderAfterFinishedGoods.mergeCells);
        this.addRows(rawRows, salesRows.rows);
        this.addRows(mergedCells, salesRows.mergeCells);
        //let summaryRows = this.generateSummaryResults(aMassBalance, currentRow);
        //this.addRows(rawRows, summaryRows.rows);
        //this.addRows(mergedCells, summaryRows.mergeCells);
        //currentRow = summaryRows.getEndRow();
        //let borderAfterSummary = this.setBoder(aMassBalance, currentRow, 0, 20, "medium");
        //this.addRows(rawRows, borderAfterSummary.rows);
        //this.addRows(mergedCells, borderAfterSummary.mergeCells);
        //currentRow = borderAfterSummary.getEndRow();
        //let processProductRows = this.generateProcessProduct(aMassBalance, currentRow);
        //this.addRows(rawRows, processProductRows.rows);
        //this.addRows(mergedCells, processProductRows.mergeCells);
        //currentRow = processProductRows.getEndRow();
        //let borderAfterProcessedProduct = this.setBoder(aMassBalance, currentRow, 0, 20, "thin")
        //this.addRows(rawRows, borderAfterProcessedProduct.rows);
        //this.addRows(mergedCells, borderAfterProcessedProduct.mergeCells);
        //currentRow = borderAfterProcessedProduct.getEndRow();
        //let finishedGoodsRows = this.generateFinishedGoods(aMassBalance, currentRow);
        //this.addRows(rawRows, finishedGoodsRows.rows);
        //this.addRows(mergedCells, finishedGoodsRows.mergeCells);
        //currentRow = finishedGoodsRows.getEndRow();
        //let borderAfterFinishedGoods = this.setBoder(aMassBalance, currentRow, 0, 20, "thin")
        //this.addRows(rawRows, borderAfterFinishedGoods.rows);
        //this.addRows(mergedCells, borderAfterFinishedGoods.mergeCells);
        //currentRow = borderAfterFinishedGoods.getEndRow();
        //let salesRows = this.generateSalesPerSalesReports(aMassBalance, currentRow)
        //this.addRows(rawRows, salesRows.rows);
        //this.addRows(mergedCells, salesRows.mergeCells);
        //currentRow = salesRows.getEndRow();
        // generate the spreadsheet itself
        var newWorksheet = this.sheet_from_array_of_arrays(rawRows, null);
        // create the sheet
        workBook.SheetNames.push(sheetName);
        workBook.Sheets[sheetName] = newWorksheet;
        // create the merged cells
        if (!newWorksheet['!merges'])
            newWorksheet['!merges'] = [];
        for (var i = 0; i < mergedCells.length; i++) {
            var currentMerge = (mergedCells)[i];
            newWorksheet['!merges'].push(currentMerge);
        }
        if (!newWorksheet['!cols'])
            newWorksheet['!cols'] = [];
        newWorksheet['!cols'] = this.columnWidths;
        // inventory start
        var inventoryRowsResult = this.generateInventoryAllLocations(aMassBalance, 0);
        var inventoryRows = [];
        this.addRows(inventoryRows, inventoryRowsResult.rows);
        workBook.SheetNames.push("Inventory");
        workBook.Sheets["Inventory"] = this.sheet_from_array_of_arrays(inventoryRows, null);
        // inventory end
        // purchases start
        var purchasesRowsResult = this.generatePurchases(aMassBalance, 0);
        var purchasesRows = [];
        this.addRows(purchasesRows, purchasesRowsResult.rows);
        workBook.SheetNames.push("Purchases");
        workBook.Sheets["Purchases"] = this.sheet_from_array_of_arrays(purchasesRows, null);
        // purchases end
        // ingredients start
        var ingreditentsRowsResult = this.generateIngreditentsInUsedInventory(aMassBalance, 0);
        var ingredientsRows = [];
        this.addRows(ingredientsRows, ingreditentsRowsResult.rows);
        workBook.SheetNames.push("Ingredients");
        workBook.Sheets["Ingredients"] = this.sheet_from_array_of_arrays(ingredientsRows, null);
        // ingredients end
        // production start
        var productionSummaryRowsResult = this.generateProductionSummary(aMassBalance, 0);
        var productionSummaryRows = [];
        this.addRows(productionSummaryRows, productionSummaryRowsResult.rows);
        workBook.SheetNames.push("ProductionSummary");
        workBook.Sheets["ProductionSummary"] = this.sheet_from_array_of_arrays(productionSummaryRows, null);
        // production end
        // production start
        var productionRowsResult = this.generateProductionDetail(aMassBalance, 0);
        var productionRows = [];
        this.addRows(productionRows, productionRowsResult.rows);
        workBook.SheetNames.push("ProductionDetail");
        workBook.Sheets["ProductionDetail"] = this.sheet_from_array_of_arrays(productionRows, null);
        // production end
        // production start
        var productionMatRowsResult = this.generateProduction_MaterialsDetail(aMassBalance, 0);
        var productionMatRows = [];
        this.addRows(productionMatRows, productionMatRowsResult.rows);
        workBook.SheetNames.push("ProductionMatDetail");
        workBook.Sheets["ProductionMatDetail"] = this.sheet_from_array_of_arrays(productionMatRows, null);
        // production end
        // 
        // production sales start
        var productionSalesResult = this.generateSalesProductionDetails(aMassBalance, 0);
        var productionSalesRows = [];
        this.addRows(productionSalesRows, productionSalesResult.rows);
        workBook.SheetNames.push("ProductionSalesDetail");
        workBook.Sheets["ProductionSalesDetail"] = this.sheet_from_array_of_arrays(productionSalesRows, null);
        // production sales end
        // 
        // reclassification/bulk start
        var bulkReclassRowsResult = this.generateBulkSalesReclassification(aMassBalance, 0);
        var bulkReclassRows = [];
        this.addRows(bulkReclassRows, bulkReclassRowsResult.rows);
        workBook.SheetNames.push("BulkReclass");
        workBook.Sheets["BulkReclass"] = this.sheet_from_array_of_arrays(bulkReclassRows, null);
        // reclassification/bulk end
        // IngredInSales start
        var ingredientsContainedInSalesRowsResult = this.generateIngredientContainedInSales(aMassBalance, 0);
        var ingredientsContainedInSalesRows = [];
        this.addRows(ingredientsContainedInSalesRows, ingredientsContainedInSalesRowsResult.rows);
        workBook.SheetNames.push("IngredInSales");
        workBook.Sheets["IngredInSales"] = this.sheet_from_array_of_arrays(ingredientsContainedInSalesRows, null);
        // IngredInSales end
        // Related Items start
        var relatedItemsRowsResult = this.generateRelated(aMassBalance, 0);
        var relatedItemsRows = [];
        this.addRows(relatedItemsRows, relatedItemsRowsResult.rows);
        workBook.SheetNames.push("RelatedItems");
        workBook.Sheets["RelatedItems"] = this.sheet_from_array_of_arrays(relatedItemsRows, null);
        // Related Items end
        // Warehouses start - keep at end
        var warehousesRowsResult = this.generateWarehouses(aMassBalance, 0);
        var warehousesRows = [];
        this.addRows(warehousesRows, warehousesRowsResult.rows);
        workBook.SheetNames.push("Warehouses");
        workBook.Sheets["Warehouses"] = this.sheet_from_array_of_arrays(warehousesRows, null);
        // Warehouses end
        var wbOut = XLSX.write(workBook, {
            bookType: 'xlsx', type: 'binary'
        });
        fileName = this.convertDateToYYYYMMddWithDashes(aMassBalance.startDate) + " - " + this.convertDateToYYYYMMddWithDashes(aMassBalance.endDate) + " " + fileName;
        var file;
        var properties = { type: 'application/octet-stream' };
        try {
            file = new File([this.string2ArrayBufer(wbOut)], fileName, properties);
        }
        catch (e) {
            file = new Blob([this.string2ArrayBufer(wbOut)], properties);
        }
        this.saveAs(file, fileName);
    };
    MWS070B_MassBalance.prototype.generateWarehouses = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Valid Warehouses for " + aMassBalance.facility }]);
        result.rows.push([{ v: "Warehouse" }]);
        if (aMassBalance.warehousesForDivision.length > 0) {
            for (var i = 0; i < aMassBalance.warehousesForDivision.length; i++) {
                var currentWarehouse = aMassBalance.warehousesForDivision[i];
                result.rows.push([{ v: currentWarehouse }]);
            }
        }
        return (result);
    };
    // 2.7.3.4
    MWS070B_MassBalance.prototype.generateBulkSalesReclassification = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Bulk Sales / Reclassification (2.7.3.4)" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "Transaction Date" }, { v: "Quantity" }, { v: "Type" }]);
        for (var j = 0; j < 2; j++) {
            var array = aMassBalance.bulkSales;
            var type = "bulk";
            if (j = 1) {
                array = aMassBalance.reclassification;
                type = "reclassify";
            }
            if (null != array && undefined != array && array.length > 0) {
                for (var i = 0; i < array.length; i++) {
                    var currentItemNumber = "";
                    var currentDescription = "";
                    var currentQuantity = 0;
                    var currentDate = "";
                    var currentInventoryItem = array[i];
                    currentItemNumber = currentInventoryItem.itemNumber;
                    currentDescription = currentInventoryItem.itemDescription;
                    currentQuantity = currentInventoryItem.quantity;
                    currentDate = currentInventoryItem.transactionDate;
                    result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentDate }, { v: currentQuantity }, { v: type }]);
                }
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generatePurchases = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Purchases (2.7.1.2)" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "Transaction Date" }, { v: "Quantity" }]);
        // -- change this
        if (null != aMassBalance.purchasesTransactions && undefined != aMassBalance.purchasesTransactions && aMassBalance.purchasesTransactions.length > 0) {
            for (var i = 0; i < aMassBalance.purchasesTransactions.length; i++) {
                var currentItemNumber = "";
                var currentDescription = "";
                var currentQuantity = 0;
                var currentDate = "";
                var currentInventoryItem = aMassBalance.purchasesTransactions[i];
                currentItemNumber = currentInventoryItem.itemNumber;
                currentDescription = currentInventoryItem.itemDescription;
                if (undefined != currentInventoryItem.quantity) {
                    currentQuantity = currentInventoryItem.quantity;
                }
                currentDate = currentInventoryItem.transactionDate;
                result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentDate }, { v: currentQuantity }]);
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateRelated = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Related Items" }]);
        result.rows.push([{ v: "Facility" }, { v: "Source Item" }, { v: "Blend Item" }]);
        if (null != this.itemLookupTable && this.itemLookupTable.length > 0) {
            for (var i = 0; i < this.itemLookupTable.length; i++) {
                var currentBlendItemNumber = "";
                var currentFacility = "";
                var currentSourceItem = "";
                var currentInventoryItem = this.itemLookupTable[i];
                currentFacility = currentInventoryItem.facility;
                currentSourceItem = currentInventoryItem.itemNumber;
                if (currentInventoryItem.childItems && currentInventoryItem.childItems.length > 0) {
                    for (var j = 0; j < currentInventoryItem.childItems.length; j++) {
                        currentBlendItemNumber = currentInventoryItem.childItems[j];
                        result.rows.push([{ v: currentFacility }, { v: currentSourceItem }, { v: currentBlendItemNumber }]);
                    }
                }
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateIngredientContainedInSales = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Production (2.7.4)" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "Transaction Date" }, { v: "Quantity" }]);
        if (null != aMassBalance.ingredientContainedInSales && undefined != aMassBalance.ingredientContainedInSales && aMassBalance.ingredientContainedInSales.length > 0) {
            for (var i = 0; i < aMassBalance.ingredientContainedInSales.length; i++) {
                var currentItemNumber = "";
                var currentDescription = "";
                var currentQuantity = 0;
                var currentDate = "";
                var currentInventoryItem = aMassBalance.ingredientContainedInSales[i];
                currentItemNumber = currentInventoryItem.itemNumber;
                currentDescription = currentInventoryItem.itemDescription;
                currentQuantity = currentInventoryItem.quantity;
                currentDate = currentInventoryItem.transactionDate;
                result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentDate }, { v: currentQuantity }]);
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateProduction_MaterialsDetail = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Production - Materials Detail (2.7.3.2)" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "MO" }, { v: "MO Manufactured Quantity" }, { v: "Item Reported Quantity" }, { v: "Lot" }, { v: "Origin Order Number (MWOMAT)", fg: { fgColor: { rgb: yellow } } }, { v: "Origin Quantity (MWOMAT)", fg: { fgColor: { rgb: yellow } } }, { v: "Blend Percentage (MWOMAT)", fg: { fgColor: { rgb: yellow } } }]);
        if (null != aMassBalance.materialsForFinishedGoods && undefined != aMassBalance.materialsForFinishedGoods && aMassBalance.materialsForFinishedGoods.length > 0) {
            for (var i = 0; i < aMassBalance.materialsForFinishedGoods.length; i++) {
                var currentItemNumber = "";
                var currentDescription = "";
                var currentMO = "";
                var curremtMOQuantity = 0;
                var currentReportedQuantity = 0;
                var currentPortion = 0;
                var currentLotNumber = "";
                var currentOriginOrderNumber = "";
                var currentOriginalQuantity = 0;
                var currentBlendPercentage = 0;
                var currentInventoryItem = aMassBalance.materialsForFinishedGoods[i];
                currentItemNumber = currentInventoryItem.itemNumber;
                currentDescription = currentInventoryItem.itemDescription;
                currentMO = currentInventoryItem.moNumber;
                curremtMOQuantity = currentInventoryItem.MOFinishedGoodsQuantity;
                currentReportedQuantity = currentInventoryItem.reportedQuantity;
                //currentPortion = currentInventoryItem.getPortionOfCompletedOrder();
                currentLotNumber = currentInventoryItem.lotNumber;
                currentOriginalQuantity = currentInventoryItem.originQuantity;
                currentOriginOrderNumber = currentInventoryItem.originOrderNumber;
                currentBlendPercentage = currentInventoryItem.actualBlendPercentage;
                result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentMO }, { v: curremtMOQuantity }, { v: currentReportedQuantity }, { v: currentLotNumber }, { v: currentOriginOrderNumber }, { v: currentOriginalQuantity }, { v: currentBlendPercentage }]);
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateProductionDetail = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Production - Detail (2.7.3.2)" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "Item Type" }, { v: "Order Number" }, { v: "Lot Number" }, { v: "Transaction Date" }, { v: "Quantity" }, { v: "Percentage of Order" }, { v: "MMS023 Conversion Factor" }, { v: "Original Trans Qty" }]);
        var position = aRow + 2;
        if (null != aMassBalance.productionDetail && undefined != aMassBalance.productionDetail && aMassBalance.productionDetail.length > 0) {
            var _loop_1 = function (i) {
                position += 1;
                var currentItemNumber = "";
                var currentDescription = "";
                var currentItemType = "";
                var currentQuantity = 0;
                var currentDate = "";
                var currentLotNumber = "";
                var currentOrderNumber = "";
                var currentPortionOfOrder = 0;
                var conversionFactor = 0;
                var originalQuantity = 0;
                var currentInventoryItem = aMassBalance.productionDetail[i];
                currentItemNumber = currentInventoryItem.itemNumber;
                currentDescription = currentInventoryItem.itemDescription;
                currentItemType = currentInventoryItem.itemType;
                currentQuantity = currentInventoryItem.quantity;
                currentDate = currentInventoryItem.transactionDate;
                currentLotNumber = currentInventoryItem.lotNumber;
                currentOrderNumber = currentInventoryItem.orderNumber;
                conversionFactor = currentInventoryItem.converstionFactor;
                originalQuantity = currentInventoryItem.originalTransactionQuantity;
                //if (currentOrderNumber === '0000000054') {
                //    debugger;
                //}
                var productionPercentange = aMassBalance.materialsForFinishedGoods.find(function (m) { return m.originOrderNumber === currentOrderNumber; });
                if (productionPercentange) {
                    currentPortionOfOrder = productionPercentange.actualBlendPercentage;
                }
                result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentItemType }, { v: currentOrderNumber }, { v: currentLotNumber }, { v: currentDate }, { v: currentQuantity }, { v: currentPortionOfOrder }, { f: "G" + position + "*H" + position }, { v: conversionFactor }, { v: originalQuantity }]);
            };
            for (var i = 0; i < aMassBalance.productionDetail.length; i++) {
                _loop_1(i);
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateProductionSummary = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Production Summary (2.7.3.2)" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "Quantity" }, { v: "Opening Balance" }, { v: "Closing Balance" }, { v: "MMS023 Conversion Factor" }, { v: "Original Trans Qty" }, { v: "Original Opening Balance" }, { v: "Original Closing Balance" }]);
        if (null != aMassBalance.productionSummary && undefined != aMassBalance.productionSummary && aMassBalance.productionSummary.length > 0) {
            for (var i = 0; i < aMassBalance.productionSummary.length; i++) {
                var currentItemNumber = "";
                var currentDescription = "";
                var currentQuantity = 0;
                var openingBalance = 0;
                var closingBalance = 0;
                var conversionFactor = 0;
                var originalQuantity = 0;
                var originalOpeningBalance = 0;
                var originalClosingBalance = 0;
                var currentInventoryItem = aMassBalance.productionSummary[i];
                currentItemNumber = currentInventoryItem.itemNumber;
                currentDescription = currentInventoryItem.itemDescription;
                currentQuantity = currentInventoryItem.quantity;
                openingBalance = currentInventoryItem.openingBalance;
                closingBalance = currentInventoryItem.closingBalance;
                conversionFactor = currentInventoryItem.converstionFactor;
                originalQuantity = currentInventoryItem.originalTransactionQuantity;
                originalOpeningBalance = currentInventoryItem.originalOpeningBalance;
                originalClosingBalance = currentInventoryItem.originalClosingBalance;
                result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentQuantity }, { v: openingBalance }, { v: closingBalance }, { v: conversionFactor }, { v: originalQuantity }, { v: originalOpeningBalance }, { v: originalClosingBalance }]);
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateIngreditentsInUsedInventory = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "2.7.3" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "Quantity" }, { v: "Order Number" }, { v: "Material Item Number" }, { v: "Material Description" }, { v: "CNQT" }, { v: "Opening Balance" }, { v: "Closing Balance" }]);
        if (null != aMassBalance.ingredientsInInventory && undefined != aMassBalance.ingredientsInInventory && aMassBalance.ingredientsInInventory.length > 0) {
            for (var i = 0; i < aMassBalance.ingredientsInInventory.length; i++) {
                var currentItemNumber = "";
                var currentDescription = "";
                var currentQuantity = 0;
                var currentOrderNumber = "";
                var currentMaterialItemNumber = "";
                var currentMaterialDescription = "";
                var currentCNQT = 0;
                var currentInventoryItem = aMassBalance.ingredientsInInventory[i];
                currentItemNumber = currentInventoryItem.itemNumber;
                currentDescription = currentInventoryItem.itemDescription;
                currentQuantity = currentInventoryItem.quantity;
                if (currentInventoryItem.orderNumbers && currentInventoryItem.orderNumbers.length > 0) {
                    for (var j = 0; j < currentInventoryItem.orderNumbers.length; j++) {
                        currentOrderNumber = currentInventoryItem.orderNumbers[j].orderNumber;
                        if (currentInventoryItem.orderNumbers[j].finishedItems && currentInventoryItem.orderNumbers[j].finishedItems.length > 0) {
                            for (var k = 0; k < currentInventoryItem.orderNumbers[j].finishedItems.length; k++) {
                                currentMaterialItemNumber = currentInventoryItem.orderNumbers[j].finishedItems[k].itemNumber;
                                currentMaterialDescription = currentInventoryItem.orderNumbers[j].finishedItems[k].itemDescription;
                                currentCNQT = currentInventoryItem.orderNumbers[j].finishedItems[k].materialQuantity;
                                var openingBalance = currentInventoryItem.orderNumbers[j].finishedItems[k].openingBalance;
                                var closingBalance = currentInventoryItem.orderNumbers[j].finishedItems[k].closingBalance;
                                result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentQuantity }, { v: currentOrderNumber }, { v: currentMaterialItemNumber }, { v: currentMaterialDescription }, { v: currentCNQT }, { v: openingBalance }, { v: closingBalance }]);
                            }
                        }
                        else {
                            result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentQuantity }, { v: currentOrderNumber }, { v: currentMaterialItemNumber }, { v: currentMaterialDescription }]);
                        }
                    }
                }
                else {
                    result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentQuantity }]);
                }
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateInventoryAllLocations = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "For Dates " + aMassBalance.startDate.toDateString() + ".." + aMassBalance.endDate.toDateString(), b: true }]);
        result.rows.push([{}]);
        result.rows.push([{ v: " Pompeian Inventory All Locations", b: true, u: true }]);
        result.rows.push([{ v: "Run Date:" }, { v: (new Date()).toDateString() }]);
        result.rows.push([{}]);
        result.rows.push([
            { v: "Item", b: true },
            { v: "Description", b: true },
            { v: "Std Cost", b: true },
            { v: "Opening Inv", b: true },
            { v: "Production", b: true },
            { v: "Purchases", b: true },
            { v: "Transfer In", b: true },
            { v: "Transfer Out", b: true },
            { v: "Sales", b: true },
            { v: "Samples", b: true },
            { v: "Adjustments", b: true },
            { v: "Ending Inventory", b: true }
        ]);
        result.rows.push(this.generateInventoryAllLocationsHeader_Line(aMassBalance));
        for (var t = 0; t < 3; t++) {
            for (var i = 0; i < aMassBalance.getChildItemCount(); i++) {
                var currentItem = aMassBalance.childItemBalances[i];
                if (currentItem.type == t) {
                    result.rows.push(this.generateInventoryAllLocationsHeader_Line(currentItem));
                }
            }
        }
        result.rows.push([{}]);
        for (var t = 0; t < 3; t++) {
            for (var i = 0; i < aMassBalance.productionSummary.length; i++) {
                var currentItem = aMassBalance.productionSummary[i];
                result.rows.push(this.generateInventoryAllLocationsHeader_Line_ItemBase(currentItem));
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateInventoryAllLocationsHeader_Line_ItemBase = function (aItemBalance) {
        return ([
            { v: aItemBalance.itemNumber },
            { v: aItemBalance.itemDescription },
            { v: 0 },
            { v: Number(aItemBalance.openingBalance) },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: Number(aItemBalance.closingBalance) }
        ]);
    };
    MWS070B_MassBalance.prototype.generateInventoryAllLocationsHeader_Line = function (aItemBalance) {
        return ([
            { v: aItemBalance.itemNumber },
            { v: aItemBalance.itemDescription },
            { v: 0 },
            { v: Number(aItemBalance.openingBalance) },
            { v: Number(aItemBalance.finishedProductQuantity) },
            { v: Number(aItemBalance.purchaseQuantity) },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: 0 },
            { v: Number(aItemBalance.closingBalance) }
        ]);
    };
    MWS070B_MassBalance.prototype.generateSalesProductionDetails = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Sales Production Detail" }]);
        result.rows.push([{ v: "Item Number" }, { v: "Description" }, { v: "Quantity" }, { v: "Ingr %" }]);
        if (null != aMassBalance.finishedProductInSalesDetail && undefined != aMassBalance.finishedProductInSalesDetail && aMassBalance.finishedProductInSalesDetail.length > 0) {
            for (var i = 0; i < aMassBalance.finishedProductInSalesDetail.length; i++) {
                var currentItemNumber = "";
                var currentDescription = "";
                var currentQuantity = 0;
                var currentPercentage = 0;
                var currentInventoryItem = aMassBalance.finishedProductInSalesDetail[i];
                currentItemNumber = currentInventoryItem.itemNumber;
                currentDescription = currentInventoryItem.itemDescription;
                currentQuantity = currentInventoryItem.quantity;
                currentPercentage = currentInventoryItem.ingredientPercentage;
                result.rows.push([{ v: currentItemNumber }, { v: currentDescription }, { v: currentQuantity }, { v: currentPercentage }]);
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.generateSalesPerSalesReports = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Sales per Sales Reports", b: true, u: true, fontColour: { rgb: "FFFF0000" } }]);
        result.rows.push([{}, { v: "Product Name", u: true }, {}, {}, { v: "Ingr. %", u: true }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { v: "Prod. QTY" }, {}, { v: "Ingr QTY" }]);
        var startLinesPosition = (result.startRow + result.rows.length + 1);
        var transactionalLinesAdded = 0;
        for (var i = 0; i < aMassBalance.finishedProductInSalesSummary.length; i++) {
            transactionalLinesAdded++;
            var currentPosition = (startLinesPosition + i);
            var currentItem = aMassBalance.finishedProductInSalesSummary[i];
            result.rows.push([
                { v: currentItem.itemNumber },
                { v: currentItem.itemDescription },
                {},
                {},
                { v: currentItem.ingredientPercentage },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                { v: currentItem.quantity },
                {},
                { f: "Q" + currentPosition + "*E" + currentPosition, numFmt: '0' },
            ]);
        }
        var endLinesPosition = (result.startRow + result.rows.length);
        var newRowPosition = (endLinesPosition + 1);
        //let endLinesPosition = (startLinesPosition + transactionalLinesAdded);
        //let newRowPosition = (endLinesPosition + 1);
        if (transactionalLinesAdded > 0) {
            result.rows.push([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { f: "sum(Q" + startLinesPosition + ":Q" + endLinesPosition + ")" }, {}, { f: "sum(S" + startLinesPosition + ":S" + endLinesPosition + ")", numFmt: '0' }, { f: "I" + newRowPosition + "+M" + newRowPosition + "-Q" + newRowPosition }]);
        }
        else {
            result.rows.push([{}]);
        }
        result.rows.push([{}, {}, { v: "Total Ingredients in Product Sold" }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { v: "D.", bold: true }, { f: "S" + newRowPosition, numFmt: '0' }, { v: "IN PRODUCT PRODUCED" }]);
        // we use this to determine our d position
        aMassBalance.dPositionFormula = "T" + (newRowPosition + 1);
        return (result);
    };
    MWS070B_MassBalance.prototype.generateFinishedGoods = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Finished Goods", b: true, u: true, fontColour: { rgb: "FFFF0000" } }]);
        result.rows.push([{}, {}, {}, {}, {}, {}, {}, {}, { v: "1" }, {}, {}, {}, { v: "2" }, {}, {}, {}, { v: "3" }, {}, { v: "1+2-3" }]);
        result.rows.push([{}, {}, {}, {}, {}, {}, { v: "Beginning" }, {}, { v: "Inventory" }, {}, { v: "Production" }, {}, {}, {}, { v: "Ending" }, {}, { v: "Inventory" }, {}, { v: "Inventory" }]);
        result.rows.push([{}, { v: "Product Name" }, {}, {}, { v: "Ingr. %" }, {}, { v: "Prod QTY" }, {}, { v: "Ingr. QTY" }, {}, { v: "Prod. QTY" }, {}, {}, {}, { v: "Prod. QTY" }, {}, { v: "Ingr. QTY" }, {}, { v: "SELL QTY" }]);
        var startLinesPosition = (result.startRow + result.rows.length + 1);
        // for (let i = 0; i < aMassBalance.getChildItemCount(); i++) {
        for (var i = 0; i < aMassBalance.productionSummary.length; i++) {
            // result.rows.push([{ code }, { v: "Product Name" }, {}, {}, { v: "Ingr. %" }, {}, { v: "Prod QTY" }, {}, { v: "Ingr. QTY" }, {}, { v: "Prod. QTY" }, {}, {}, {}, { v: "Prod. QTY" }, {}, { v: "Ingr. QTY" }, {}, { v: "SELL QTY" }]);
            // let currentChildItem = aMassBalance.childItemBalances[i];
            var currentChildItem = aMassBalance.productionSummary[i];
            var currentPosition = (startLinesPosition + i);
            //if (currentChildItem.type = 2) {
            result.rows.push([
                { v: currentChildItem.itemNumber },
                { v: currentChildItem.itemDescription },
                {},
                {},
                { f: "K" + currentPosition + "/M" + currentPosition },
                {},
                { v: Number(currentChildItem.openingBalance), fg: { fgColor: { rgb: yellow } }, numFmt: '0' },
                {},
                { f: "E" + currentPosition + "*G" + currentPosition, numFmt: '0' },
                {},
                { v: Number(currentChildItem.quantity), fg: { fgColor: { rgb: yellow } }, numFmt: '0' },
                {},
                { v: Number(aMassBalance.getIngredientPortionOfFinishedGoods(currentChildItem.itemNumber)), numFmt: '0' },
                {},
                { v: Number(currentChildItem.closingBalance), fg: { fgColor: { rgb: yellow } }, numFmt: '0' },
                {},
                { f: "E" + currentPosition + "*O" + currentPosition, numFmt: '0' },
                {},
                { f: "I" + currentPosition + "+M" + currentPosition + "-Q" + currentPosition, numFmt: '0' } // S
            ]);
            //}
        }
        var endLinesPosition = (result.startRow + result.rows.length);
        var newRowPosition = (endLinesPosition + 1);
        if (aMassBalance.productionSummary.length > 0) {
            result.rows.push([{}, {}, {}, {}, {}, {}, { f: "sum(G" + startLinesPosition + ":G" + endLinesPosition + ")" }, {}, { f: "sum(I" + startLinesPosition + ":I" + endLinesPosition + ")", numFmt: '0' }, {}, { f: "sum(K" + startLinesPosition + ":K" + endLinesPosition + ")" }, {}, { f: "sum(M" + startLinesPosition + ":M" + endLinesPosition + ")", numFmt: '0' }, {}, { f: "sum(O" + startLinesPosition + ":O" + endLinesPosition + ")" }, {}, { f: "sum(Q" + startLinesPosition + ":Q" + endLinesPosition + ")", numFmt: '0' }, {}, { f: "sum(S" + startLinesPosition + ":S" + endLinesPosition + ")", numFmt: '0' }, { f: "I" + newRowPosition + "+M" + newRowPosition + "-Q" + newRowPosition, numFmt: '0' }]);
        }
        result.rows.push([{}, {}, { v: "Total Ingredients in Fin Goods" }, {}, {}, {}, {}, {}, { v: "Produced" }, {}, { v: "B.", bold: true }, {}, { f: "M" + newRowPosition, numFmt: '0' }, {}, {}, {}, { v: "Used/Sold" }, {}, { v: "C.", bold: true }, { f: "S" + newRowPosition, numFmt: '0' }, { v: "IN PRODUCT SOLD" }]);
        // we use this to determine our c position
        aMassBalance.cPositionFormula = "T" + (newRowPosition + 1);
        aMassBalance.bPositionFormula = "M" + (newRowPosition + 1);
        newRowPosition;
        return (result);
    };
    MWS070B_MassBalance.prototype.generateProcessProduct = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{ v: "Processed Product", b: true, u: true, fontColour: { rgb: "FFFF0000" } }]);
        result.rows.push([{}]);
        result.rows.push([{ v: "Raw Mtls", u: true, fontColour: { rgb: "FFFF0000" } }]);
        result.rows.push([{}, {}, {}, {}, {}, {}, {}, {}, { v: "1" }, {}, {}, {}, { v: "2" }, {}, {}, {}, { v: "3" }, {}, {}, { v: " 1+2-3" }]);
        result.rows.push([{}, {}, {}, {}, {}, {}, {}, {}, { v: "Beginning" }, {}, {}, {}, {}, {}, {}, {}, { v: "Ending" }, {}, {}, { v: "Raw Mtl." }]);
        result.rows.push([{}, {}, {}, {}, {}, {}, {}, {}, { v: "Inventory" }, {}, {}, {}, { v: "Purchases" }, {}, {}, {}, { v: "Inventory" }, {}, {}, { v: "Usage" }]);
        // now the values
        result.rows.push([{}, {}, {}, {}, {}, {}, {}, {}, { v: aMassBalance.getChildrenTotalOpeningBalance(), fg: { fgColor: { rgb: yellow } }, numFmt: '0' }, {}, {}, {}, { v: aMassBalance.getChildrenPurchasesTotal(), fg: { fgColor: { rgb: yellow } }, numFmt: '0' }, {}, {}, {}, { v: aMassBalance.getChildrenTotalClosingBalance(), fg: { fgColor: { rgb: yellow } }, numFmt: '0' }, {}, {}, { v: "Usage" }]);
        // and the total
        var i = "sum(I" + (aRow + result.rows.length) + ")";
        var m = "sum(M" + (aRow + result.rows.length) + ")";
        var q = "sum(Q" + (aRow + result.rows.length) + ")";
        var t = "sum(I" + (aRow + result.rows.length + 1) + "+M" + (aRow + result.rows.length + 1) + "-Q" + (aRow + result.rows.length + 1) + ")";
        result.rows.push([{}, {}, { v: "Total Ingredient RM Used" }, {}, {}, {}, {}, {}, { f: i, numFmt: '0' }, {}, {}, {}, { f: m, numFmt: '0' }, {}, {}, {}, { f: q, numFmt: '0' }, {}, { v: "A.", fg: { fgColor: { rgb: green } } }, { f: t, fg: { fgColor: { rgb: green } }, numFmt: '0' }]);
        result.rows.push([{}]);
        // we use this to determine our a position
        aMassBalance.aPositionFormula = "T" + (result.startRow + result.rows.length - 1);
        return (result);
    };
    MWS070B_MassBalance.prototype.setBoder = function (aMassBalance, aRow, aStart, aCount, aStyle) {
        var result = new rowResult();
        result.startRow = aRow;
        var array = [];
        for (var i = 0; i < (aStart + aCount); i++) {
            if (i < aStart) {
                array.push({ v: "" });
            }
            else {
                array.push({ v: "", border: { top: { style: aStyle, color: "000000" } } });
            }
        }
        result.rows.push(array);
        return (result);
    };
    MWS070B_MassBalance.prototype.generateSummaryResults = function (aMassBalance, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{}, {}, {}, {}, { v: "Summary Results", b: true, fontColour: { rgb: "FFFF0000" } }]); // fg: { fgColor: { rgb: 'FFFF0000' } } }]);
        result.rows.push([{}, {}, { v: "Raw Material Usage (A)", fontColour: { rgb: "FFFF0000" }, fg: { fgColor: { rgb: green } } }, {}, {}, {}, { v: "Raw Material in Finished Product (B)", wrapText: true, fontColour: { rgb: "FFFF0000" }, fg: { fgColor: { rgb: blue } } }, {}, {}, {}, { v: "Does A=B? If not, explain", fontColour: { rgb: "FFFF0000" }, wrapText: true }, {}, {}, {}, { v: "WIP Used to Make WIP / Raw Sales", fontColour: { rgb: "FFFF0000" }, wrapText: true }, {}, { v: "Flushed & unaccounted", fontColour: { rgb: "FFFF0000" }, wrapText: true }, {}, { v: "Unaccounted %", fontColour: { rgb: "FFFF0000" }, wrapText: true }]);
        result.rows.push([{ v: "Raw Material", fontColour: { rgb: "FFFF0000" }, b: true }, {}, { f: aMassBalance.aPositionFormula, fg: { fgColor: { rgb: green } }, numFmt: '0' }, {}, {}, {}, { f: aMassBalance.bPositionFormula, fg: { fgColor: { rgb: blue } }, numFmt: '0' }, {}, {}, {}, { v: 0 }, {}, { v: 0, fg: { fgColor: { rgb: yellow } } }, {}, { v: aMassBalance.getWIPUsedToMakeWip(), fg: { fgColor: { rgb: yellow } } }, {}, { v: 0 }]);
        result.rows.push([{}, {}, { v: "Ingredient Contained in Used Inventory (C)", wrapText: true, fontColour: { rgb: "FFFF0000" }, fg: { fgColor: { rgb: "FFDA9694" } } }, {}, {}, {}, { v: "Ingredient Contained in Sales (D)", fontColour: { rgb: "FFFF0000" }, fg: { fgColor: { rgb: "FFB1A0C7" } }, wrapText: true }, {}, { v: "Does A=B? If not, explain", wrapText: true, fontColour: { rgb: "FFFF0000" } }, {}, {}, {}, {}, {}, {}, {}, {}]);
        result.rows.push([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, { v: "Repackaged" }]);
        result.rows.push([{ v: "Processed Product", fontColour: { rgb: "FFFF0000" } }, {}, { f: aMassBalance.cPositionFormula, fg: { fgColor: { rgb: "FFDA9694" } }, numFmt: '0' }, {}, {}, {}, { f: aMassBalance.dPositionFormula, fg: { fgColor: { rgb: "FFB1A0C7" } }, numFmt: '0' }, {}, { v: 0 }, {}, {}, {}, { v: 0 }, {}, {}, {}, {}]);
        result.rows.push([{}]);
        result.rows.push([{}]);
        result.mergeCells.push({ s: { r: aRow + 1, c: 2 }, e: { r: aRow + 1, c: 4 } });
        result.mergeCells.push({ s: { r: aRow + 1, c: 6 }, e: { r: aRow + 1, c: 8 } });
        result.mergeCells.push({ s: { r: aRow + 3, c: 2 }, e: { r: aRow + 4, c: 4 } });
        result.mergeCells.push({ s: { r: aRow + 3, c: 6 }, e: { r: aRow + 4, c: 8 } });
        return (result);
    };
    MWS070B_MassBalance.prototype.generateHeader = function (aItemNumber, aItemDescription, aStartTime, aEndTime, aRow) {
        var result = new rowResult();
        result.startRow = aRow;
        result.rows.push([{}, {}, {}, {}, {}, {}, { v: "Input/Output Balance Worksheet", b: true, u: true, fontSize: 16 }]);
        //result.rows.push([{ v: "Input/Output Balance Worksheet", b: true, u: true }]);
        result.rows.push([{}, {}, {}, {}, {}, {}, { v: "(Enter data in Highlit Fields only)", fg: { fgColor: { rgb: yellow } } }]);
        result.rows.push([{}, { v: "Ingredient/Product" }, {}, {}, {}, {}, {}, {}, { v: aItemNumber + "  " + aItemDescription, u: true, b: true }]);
        result.rows.push([{}]);
        result.rows.push([{}, { v: "Time Period" }, {}, {}, {}, {}, {}, {}, { v: (aStartTime.toDateString() + " - " + aEndTime.toDateString()) }]);
        result.rows.push([{}]);
        result.mergeCells.push({ s: { r: (aRow + 1), c: 6 }, e: { r: (aRow + 1), c: 10 } });
        //result.mergeCells.push({ s: { r: aRow + 1, c: 0 }, e: { r: aRow + 1, c: 7 } });
        return (result);
    };
    // **********************************
    // * -- data retrieval functions -- *
    // **********************************
    MWS070B_MassBalance.prototype.retrieveData = function (aFacility, aItemNumber, aFromDate, aToDate) {
        return __awaiter(this, void 0, void 0, function () {
            var m3FromDate, m3toDate, massBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        m3FromDate = this.convertDateToM3Format(aFromDate);
                        m3toDate = this.convertDateToM3Format(aToDate);
                        massBalance = new massBalanceDataClass();
                        massBalance.facility = aFacility;
                        massBalance.itemNumber = aItemNumber;
                        massBalance.startDate = aFromDate;
                        massBalance.endDate = aToDate;
                        massBalance.m3StartDate = m3FromDate;
                        massBalance.m3EndDate = m3toDate;
                        this.gDebug.Debug("Items Number: " + aItemNumber);
                        this.gDebug.Debug("Facility: " + aFacility);
                        return [4 /*yield*/, this.retrieveRelatedItems(massBalance)];
                    case 1:
                        _a.sent();
                        // retrieve the warehouses
                        return [4 /*yield*/, this.retrieveWarehousesForFacility(massBalance)];
                    case 2:
                        // retrieve the warehouses
                        _a.sent();
                        return [4 /*yield*/, this.retrieveInventoryQuantity(massBalance)];
                    case 3:
                        _a.sent(); // , aFacility, aItemNumber, m3FromDate, m3toDate);
                        return [4 /*yield*/, this.retrieveInventoryQuantity_getMOs(massBalance)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.retrievePurchases(massBalance)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveRawmaterialInFinishedProduct(massBalance)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveProduction(massBalance)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveBulkSalesReclassification(massBalance)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.retrieveIngredientContainedInSales(massBalance)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.resolveItemDescriptions(massBalance)];
                    case 10:
                        _a.sent();
                        // this has a dependency on the item descriptions
                        return [4 /*yield*/, this.retrieveProduction_Summary(massBalance)];
                    case 11:
                        // this has a dependency on the item descriptions
                        _a.sent();
                        //massBalance.setItemDescriptionsForProductionSummary();
                        return [4 /*yield*/, this.retrieveSalesOfFinishedGoods(massBalance)];
                    case 12:
                        //massBalance.setItemDescriptionsForProductionSummary();
                        _a.sent();
                        massBalance.setItemDescriptionsFinishedProduct();
                        this.gController.ShowMessageInStatusBar("");
                        return [2 /*return*/, (massBalance)];
                }
            });
        });
    };
    MWS070B_MassBalance.prototype.resolveItemDescriptions = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var mainItemDescription, itemNumbers, i, childItem, item, mainItemDescription_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving item descriptions");
                        return [4 /*yield*/, this.MMS200MI_GetItmBasic(aMassBalance.itemNumber)];
                    case 1:
                        mainItemDescription = _a.sent();
                        if (null != mainItemDescription && undefined != mainItemDescription.FUDS) {
                            aMassBalance.itemDescription = mainItemDescription.FUDS;
                            aMassBalance.itemType = mainItemDescription.ITTY;
                        }
                        itemNumbers = aMassBalance.getListOfItems();
                        if (!(itemNumbers.length > 0)) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < itemNumbers.length)) return [3 /*break*/, 5];
                        childItem = itemNumbers[i];
                        item = new itemDescription();
                        this.gController.ShowMessageInStatusBar("Retrieving item descriptions for " + childItem);
                        return [4 /*yield*/, this.MMS200MI_GetItmBasic(childItem)];
                    case 3:
                        mainItemDescription_1 = _a.sent();
                        if (null != mainItemDescription_1 && undefined != mainItemDescription_1.FUDS) {
                            item.itemNumber = childItem;
                            item.itemDescription = mainItemDescription_1.FUDS;
                            item.itemType = mainItemDescription_1.ITTY;
                            aMassBalance.itemsList.push(item);
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        aMassBalance.setItemDescriptions();
                        return [2 /*return*/];
                }
            });
        });
    };
    MWS070B_MassBalance.prototype.retrieveRelatedItems = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var originalItemNumber, validItemsByItemType, i, currentValidItemNumber, blendLots, j, blendOrderNumber, consumed, k, facility, consumedItemNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving Related Items");
                        this.gDebug.Debug("retrieveRelatedItems()");
                        originalItemNumber = aMassBalance.itemNumber;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MMITNO from MITMAS where MMITTY = 'Z30'", this.gSeperatorCharacter)];
                    case 1:
                        validItemsByItemType = _a.sent();
                        if (!(validItemsByItemType && validItemsByItemType.length > 0)) return [3 /*break*/, 8];
                        this.gDebug.Debug(" +-- Z30 Items: " + validItemsByItemType.length);
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < validItemsByItemType.length)) return [3 /*break*/, 8];
                        currentValidItemNumber = validItemsByItemType[i].MMITNO;
                        this.gDebug.Debug(" +--- Item: " + currentValidItemNumber);
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTBANO, MTRIDN, MTTRQT, MTNSTQ from MITTRA where MTITNO = '" + currentValidItemNumber + "' and MTTTYP = '10' and MTTRDT <= '" + aMassBalance.m3EndDate + "'", this.gSeperatorCharacter)];
                    case 3:
                        blendLots = _a.sent();
                        if (!(blendLots && blendLots.length > 0)) return [3 /*break*/, 7];
                        this.gDebug.Debug(" +---- Blend Lots for item: " + blendLots.length);
                        j = 0;
                        _a.label = 4;
                    case 4:
                        if (!(j < blendLots.length)) return [3 /*break*/, 7];
                        blendOrderNumber = blendLots[j].MTRIDN;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("VMMFNO, VMFACI, VMBANO, VMPRNO, VMCNQT, VMMTNO, VMRPQT from MWOMAT where VMMFNO = '" + blendOrderNumber + "' and VMMTNO = '" + originalItemNumber + "'", this.gSeperatorCharacter)];
                    case 5:
                        consumed = _a.sent();
                        this.gDebug.Debug(" +----- Blend Order Number: " + blendOrderNumber);
                        if (consumed && consumed.length > 0) {
                            this.gDebug.Debug(" +------ Consumed Records: " + consumed.length);
                            for (k = 0; k < consumed.length; k++) {
                                debugger;
                                facility = consumed[k].VMFACI;
                                consumedItemNumber = consumed[k].VMPRNO;
                                if (consumedItemNumber === currentValidItemNumber) {
                                    this.gDebug.Debug(" +------- Consumed Item Number matches the original number, adding to blend");
                                    this.addRelatedItem(facility, originalItemNumber, currentValidItemNumber);
                                }
                            }
                        }
                        _a.label = 6;
                    case 6:
                        j++;
                        return [3 /*break*/, 4];
                    case 7:
                        i++;
                        return [3 /*break*/, 2];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    MWS070B_MassBalance.prototype.retrieveWarehousesForFacility = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var warehouses, i, currentWarehouse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving warehouses for facility: " + aMassBalance.facility);
                        this.gDebug.Debug("retrieveWarehousesForFacility()");
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MWFACI, MWWHLO from MITWHL where MWFACI = '" + aMassBalance.facility + "'", this.gSeperatorCharacter)];
                    case 1:
                        warehouses = _a.sent();
                        if (warehouses && null != warehouses && warehouses.length > 0) {
                            for (i = 0; i < warehouses.length; i++) {
                                currentWarehouse = warehouses[i].MWWHLO;
                                aMassBalance.warehousesForDivision.push(currentWarehouse);
                            }
                        }
                        this.gDebug.Debug(" +-- Count of warehouses: " + aMassBalance.warehousesForDivision.length);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 2.7.2
    MWS070B_MassBalance.prototype.retrieveRawmaterialInFinishedProduct = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var finishedProduct11, finishedProduct31, finishedProduct98;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving main item finished product");
                        this.gDebug.Debug("retrieveRawmaterialInFinishedProduct()");
                        this.gDebug.Debug(" +- child count: " + aMassBalance.getChildItemCount());
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTTYP, MTTRQT, MTWHLO from MITTRA where MTITNO = '" + aMassBalance.itemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTTTYP = 11", this.gSeperatorCharacter)];
                    case 1:
                        finishedProduct11 = _a.sent();
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTTYP, MTTRQT, MTWHLO from MITTRA where MTITNO = '" + aMassBalance.itemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTTTYP = 13", this.gSeperatorCharacter)];
                    case 2:
                        finishedProduct31 = _a.sent();
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTTYP, MTTRQT, MTWHLO from MITTRA where MTITNO = '" + aMassBalance.itemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTTTYP = 98", this.gSeperatorCharacter)];
                    case 3:
                        finishedProduct98 = _a.sent();
                        return [4 /*yield*/, aMassBalance.setFinishedProduct(finishedProduct11)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, aMassBalance.setFinishedProduct(finishedProduct31)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, aMassBalance.setFinishedProduct(finishedProduct98)];
                    case 6:
                        _a.sent();
                        this.gDebug.Debug(" +- finished product quantity: " + aMassBalance.finishedProductQuantity);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 2.7.1.2
    MWS070B_MassBalance.prototype.retrievePurchases = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var total, i, currentChildItem, runningTotal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving main item purchases");
                        this.gDebug.Debug("retrivePurchases()");
                        this.gDebug.Debug(" +- child count: " + aMassBalance.getChildItemCount());
                        return [4 /*yield*/, this.retrievePurchases_inner(aMassBalance, aMassBalance.itemNumber)];
                    case 1:
                        total = _a.sent();
                        aMassBalance.purchaseQuantity = total;
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < aMassBalance.getChildItemCount())) return [3 /*break*/, 5];
                        currentChildItem = aMassBalance.childItemBalances[i];
                        return [4 /*yield*/, this.retrievePurchases_inner(aMassBalance, currentChildItem.itemNumber)];
                    case 3:
                        runningTotal = _a.sent();
                        currentChildItem.purchaseQuantity = runningTotal;
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MWS070B_MassBalance.prototype.retrievePurchases_inner = function (aMassBalance, aItem) {
        return __awaiter(this, void 0, void 0, function () {
            var currentChildItem, purchaseQuantity, runningTotal, k, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentChildItem = aItem;
                        this.gDebug.Debug(" +- item number: " + currentChildItem);
                        this.gController.ShowMessageInStatusBar("Retrieving purchases for: " + currentChildItem);
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTTYP, MTTRQT, MTWHLO from MITTRA where MTITNO = '" + currentChildItem + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTTTYP = 25", this.gSeperatorCharacter)];
                    case 1:
                        purchaseQuantity = _a.sent();
                        runningTotal = 0;
                        if (null != purchaseQuantity && purchaseQuantity.length > 0) {
                            //currentChildItem.setOpenClosingBalances(purchaseQuantity);
                            for (k = 0; k < purchaseQuantity.length; k++) {
                                transaction = new inventoryManufactureItemsTransaction();
                                transaction.set(purchaseQuantity[k]);
                                runningTotal += transaction.quantity;
                                aMassBalance.purchasesTransactions.push(transaction);
                            }
                        }
                        return [2 /*return*/, (runningTotal)];
                }
            });
        });
    };
    // 2.7.4
    MWS070B_MassBalance.prototype.retrieveIngredientContainedInSales = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var i, j, finishedItem, currentItemNumber, ingredientsInInventoryQty, k, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving ingredients contained in sales");
                        if (!(aMassBalance.ingredientsInInventory && aMassBalance.ingredientsInInventory.length > 0)) return [3 /*break*/, 6];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < aMassBalance.ingredientsInInventory.length)) return [3 /*break*/, 6];
                        if (!(aMassBalance.ingredientsInInventory[i].finishedItemsConsolidated && aMassBalance.ingredientsInInventory[i].finishedItemsConsolidated.length > 0)) return [3 /*break*/, 5];
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < aMassBalance.ingredientsInInventory[i].finishedItemsConsolidated.length)) return [3 /*break*/, 5];
                        finishedItem = aMassBalance.ingredientsInInventory[i].finishedItemsConsolidated[j];
                        currentItemNumber = finishedItem.itemNumber;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTRQT, MTWHLO from MITTRA where MTITNO = '" + currentItemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTTTYP = 31", this.gSeperatorCharacter)];
                    case 3:
                        ingredientsInInventoryQty = _a.sent();
                        if (null != ingredientsInInventoryQty && ingredientsInInventoryQty.length > 0) {
                            for (k = 0; k < ingredientsInInventoryQty.length; k++) {
                                transaction = new inventoryManufactureItemsTransaction();
                                transaction.itemNumber = currentItemNumber;
                                transaction.transactionDate = ingredientsInInventoryQty[k].MTTRDT;
                                transaction.quantity = Number(ingredientsInInventoryQty[k].MTTRQT);
                                aMassBalance.ingredientContainedInSales.push(transaction);
                            }
                        }
                        _a.label = 4;
                    case 4:
                        j++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // 2.7.3.4
    MWS070B_MassBalance.prototype.retrieveBulkSalesReclassification = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var currentItemNumber, k, transactionType, ingredientsInInventoryQty, k_1, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving bulk sales and reclassifications");
                        currentItemNumber = aMassBalance.itemNumber;
                        k = 0;
                        _a.label = 1;
                    case 1:
                        if (!(k < 2)) return [3 /*break*/, 4];
                        transactionType = "31";
                        if (k == 1) {
                            transactionType = "98";
                        }
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTRQT, MTWHLO from MITTRA where MTITNO = '" + currentItemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTTTYP = " + transactionType, this.gSeperatorCharacter)];
                    case 2:
                        ingredientsInInventoryQty = _a.sent();
                        if (null != ingredientsInInventoryQty && ingredientsInInventoryQty.length > 0) {
                            for (k_1 = 0; k_1 < ingredientsInInventoryQty.length; k_1++) {
                                transaction = new inventoryManufactureItemsTransaction();
                                transaction.itemNumber = currentItemNumber;
                                transaction.transactionDate = ingredientsInInventoryQty[k_1].MTTRDT;
                                transaction.quantity = Number(ingredientsInInventoryQty[k_1].MTTRQT);
                                if (k_1 == 0) {
                                    aMassBalance.bulkSales.push(transaction);
                                }
                                else if (k_1 == 1) {
                                    aMassBalance.reclassification.push(transaction);
                                }
                            }
                        }
                        _a.label = 3;
                    case 3:
                        k++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 2.7.3.2 (sub)
    // retrieve lot numbers from the base order numbers
    MWS070B_MassBalance.prototype.retrieveProduction_GetUniqueLotNumbersForOrderNumber = function (aOrderNumbers) {
        return __awaiter(this, void 0, void 0, function () {
            var result, j, orderNumber, lotNumbersFromOrderNumber, i, lotNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        if (!(aOrderNumbers && aOrderNumbers.length > 0)) return [3 /*break*/, 4];
                        j = 0;
                        _a.label = 1;
                    case 1:
                        if (!(j < aOrderNumbers.length)) return [3 /*break*/, 4];
                        orderNumber = aOrderNumbers[j];
                        this.gController.ShowMessageInStatusBar("Retrieving lot numbers for order " + orderNumber);
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTBANO from MITTRA where MTRIDN = '" + orderNumber + "' and MTTTYP = 10", this.gSeperatorCharacter)];
                    case 2:
                        lotNumbersFromOrderNumber = _a.sent();
                        if (null != lotNumbersFromOrderNumber && undefined != lotNumbersFromOrderNumber && lotNumbersFromOrderNumber.length > 0) {
                            for (i = 0; i < lotNumbersFromOrderNumber.length; i++) {
                                lotNumber = lotNumbersFromOrderNumber[i].MTBANO;
                                if (-1 == result.indexOf(lotNumber)) {
                                    result.push(lotNumber);
                                }
                            }
                        }
                        _a.label = 3;
                    case 3:
                        j++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, (result)];
                }
            });
        });
    };
    // 2.7.3.2 (sub)
    // - retrieve the orders associated with a lot number
    MWS070B_MassBalance.prototype.retrieveProduction_RetrieveOrdersUsingLotNumber = function (aLotNumber, aFromDate, aToDate) {
        return __awaiter(this, void 0, void 0, function () {
            var result, lotNumber, ordersUsingLotNumber, i, orderNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        lotNumber = aLotNumber;
                        if (!(null != aLotNumber && undefined != aLotNumber)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTBANO, MTRIDN from MITTRA where MTBANO = '" + lotNumber + " ' and MTTTYP = 11 and MTTRDT >= " + aFromDate + " and MTTRDT <= " + aToDate, this.gSeperatorCharacter)];
                    case 1:
                        ordersUsingLotNumber = _a.sent();
                        if (null != ordersUsingLotNumber && undefined != ordersUsingLotNumber && ordersUsingLotNumber.length > 0) {
                            for (i = 0; i < ordersUsingLotNumber.length; i++) {
                                orderNumber = ordersUsingLotNumber[i].MTRIDN;
                                if (-1 == result.indexOf(orderNumber)) {
                                    result.push(orderNumber);
                                }
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, (result)];
                }
            });
        });
    };
    // 2.7.3.2 (sub) retrieve the order number for TTYP === 11
    MWS070B_MassBalance.prototype.retrieveProduction_OrderNumbersForTTYP11_Individual = function (aMassBalance, aItemNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var result, dateRangeStart, dateRangeEnd, itemNumber, orderNumbersFromOriginalItem, i, currentOrderNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = null;
                        dateRangeStart = aMassBalance.m3StartDate;
                        dateRangeEnd = aMassBalance.m3EndDate;
                        itemNumber = aItemNumber;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTWHLO, MTRIDN from MITTRA where MTITNO = '" + itemNumber + "' and MTTRDT >= " + dateRangeStart + " and MTTRDT <= " + dateRangeEnd + " and MTTTYP = 11", this.gSeperatorCharacter)];
                    case 1:
                        orderNumbersFromOriginalItem = _a.sent();
                        if (null != orderNumbersFromOriginalItem && undefined != orderNumbersFromOriginalItem && orderNumbersFromOriginalItem.length > 0) {
                            orderNumbersFromOriginalItem = orderNumbersFromOriginalItem.filter(function (item) { return aMassBalance.isWarehouseValid(item.MTWHLO); });
                            if (orderNumbersFromOriginalItem && orderNumbersFromOriginalItem.length > 0) {
                                result = [];
                                for (i = 0; i < orderNumbersFromOriginalItem.length; i++) {
                                    currentOrderNumber = orderNumbersFromOriginalItem[i].MTRIDN;
                                    if (-1 == result.indexOf(currentOrderNumber)) {
                                        result.push(currentOrderNumber);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/, (result)];
                }
            });
        });
    };
    // 2.7.3.2 (sub) here we will retrieve the order numbers for our main item and the related blend items
    MWS070B_MassBalance.prototype.retrieveProduction_OrderNumbersForOrgItmAndRelatedItems = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var uniqueOrderNumbers, originalItemNumber, originalItemOrderNumbers, i, i, currentRelatedItemNumber, orderNumbers, i_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving production for related item numbers");
                        uniqueOrderNumbers = [];
                        originalItemNumber = aMassBalance.itemNumber;
                        this.gController.ShowMessageInStatusBar("Retrieving order numbers for: " + originalItemNumber);
                        return [4 /*yield*/, this.retrieveProduction_OrderNumbersForTTYP11_Individual(aMassBalance, originalItemNumber)];
                    case 1:
                        originalItemOrderNumbers = _a.sent();
                        if (null != originalItemOrderNumbers && originalItemOrderNumbers.length > 0) {
                            for (i = 0; i < originalItemOrderNumbers.length; i++) {
                                if (-1 == uniqueOrderNumbers.indexOf(originalItemOrderNumbers[i])) {
                                    uniqueOrderNumbers.push(originalItemOrderNumbers[i]);
                                }
                            }
                        }
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < aMassBalance.relatedItemNumbersWithValues.length)) return [3 /*break*/, 5];
                        currentRelatedItemNumber = aMassBalance.relatedItemNumbersWithValues[i];
                        this.gController.ShowMessageInStatusBar("Retrieving order numbers for: " + currentRelatedItemNumber);
                        return [4 /*yield*/, this.retrieveProduction_OrderNumbersForTTYP11_Individual(aMassBalance, currentRelatedItemNumber)];
                    case 3:
                        orderNumbers = _a.sent();
                        if (null != orderNumbers && orderNumbers.length > 0) {
                            for (i_1 = 0; i_1 < orderNumbers.length; i_1++) {
                                if (-1 == uniqueOrderNumbers.indexOf(orderNumbers[i_1])) {
                                    uniqueOrderNumbers.push(orderNumbers[i_1]);
                                }
                            }
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        if (uniqueOrderNumbers.length == 0) {
                            uniqueOrderNumbers = null;
                        }
                        else {
                            //debugger;
                        }
                        return [2 /*return*/, (uniqueOrderNumbers)];
                }
            });
        });
    };
    // 2.7.3.2 (sub) must be called after we resolve our items
    MWS070B_MassBalance.prototype.retrieveProduction_Summary = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var productionItemNumbers, _loop_2, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productionItemNumbers = aMassBalance.getListOfItemsInProduction();
                        _loop_2 = function (i) {
                            var productionSummary, currentItemNumber, itmDetail, records, j, inventoryQuantity;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productionSummary = new inventoryManufactureItemsTransaction();
                                        currentItemNumber = productionItemNumbers[i];
                                        itmDetail = aMassBalance.itemsList.find(function (itm) { return itm.itemNumber === currentItemNumber; });
                                        if (!(itmDetail && itmDetail.itemType !== 'Z30')) return [3 /*break*/, 2];
                                        productionSummary.itemNumber = currentItemNumber;
                                        productionSummary.itemDescription = itmDetail.itemDescription;
                                        productionSummary.itemType = itmDetail.itemType;
                                        records = aMassBalance.productionDetail.filter(function (item) { return item.itemNumber === currentItemNumber && item.itemType !== "Z30"; });
                                        if (null != records && undefined != records && records.length > 0) {
                                            for (j = 0; j < records.length; j++) {
                                                productionSummary.quantity += Number(records[j].quantity);
                                                productionSummary.converstionFactor = records[j].converstionFactor;
                                                productionSummary.originalTransactionQuantity += Number(records[j].originalTransactionQuantity);
                                            }
                                        }
                                        this_1.gController.ShowMessageInStatusBar("Retrieving production summary for: " + currentItemNumber);
                                        return [4 /*yield*/, this_1.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTRTM, MTNSTQ, MTWHLO, MTTTYP from MITTRA where MTITNO = '" + currentItemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTSTAS = 2 and MTTTYP <> '17'", this_1.gSeperatorCharacter)];
                                    case 1:
                                        inventoryQuantity = _a.sent();
                                        if (null != inventoryQuantity && undefined != inventoryQuantity && inventoryQuantity.length > 0) {
                                            // remove records from different warehouses attached to different divisions
                                            inventoryQuantity = inventoryQuantity.filter(function (item) { return true == aMassBalance.isWarehouseValid(item.MTWHLO); });
                                            if (null != inventoryQuantity && undefined != inventoryQuantity && inventoryQuantity.length > 0) {
                                                productionSummary.setOpenClosingBalances(inventoryQuantity);
                                                if (productionSummary.converstionFactor != 0) {
                                                    productionSummary.originalOpeningBalance = Number(productionSummary.openingBalance);
                                                    productionSummary.originalClosingBalance = Number(productionSummary.closingBalance);
                                                    productionSummary.openingBalance = (Number(productionSummary.openingBalance) * Number(productionSummary.converstionFactor));
                                                    productionSummary.closingBalance = (Number(productionSummary.closingBalance) * Number(productionSummary.converstionFactor));
                                                }
                                            }
                                        }
                                        aMassBalance.productionSummary.push(productionSummary);
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < productionItemNumbers.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_2(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 2.7.3.2 (sub)
    MWS070B_MassBalance.prototype.retrieveProduction_MaterialLines = function (aMassBalance, aOrderNumbers) {
        return __awaiter(this, void 0, void 0, function () {
            var result, uniqueItemLotNumbers, i, currentOrderNumber, moQuantity, materialRecords, _loop_3, this_2, j, cachedQuantitiesConsumed, i, currentItemNumber, currentLotNumber, originOrderNumber, originQuantity, orderNumbers, _loop_4, this_3, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        this.gDebug.Debug("retrieveProduction_MaterialLines()");
                        if (!(aOrderNumbers && aOrderNumbers.length > 0)) return [3 /*break*/, 11];
                        uniqueItemLotNumbers = [];
                        this.gDebug.Debug(" +-- number of order numbers to process: " + aOrderNumbers.length);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < aOrderNumbers.length)) return [3 /*break*/, 4];
                        currentOrderNumber = aOrderNumbers[i];
                        moQuantity = 0;
                        this.gDebug.Debug(" +--- order number: " + currentOrderNumber);
                        this.gController.ShowMessageInStatusBar("Retrieving material records for mo number " + currentOrderNumber);
                        // 13
                        this.gDebug.Debug(" +--- Query: " + "VMMTNO, VMRPQA, VMMFNO, VMBANO from MWOMAT where VMMFNO = '" + currentOrderNumber + "'");
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("VMMTNO, VMRPQA, VMMFNO, VMBANO from MWOMAT where VMMFNO = '" + currentOrderNumber + "'", this.gSeperatorCharacter)];
                    case 2:
                        materialRecords = _a.sent();
                        if (materialRecords && materialRecords.length > 0) {
                            _loop_3 = function (j) {
                                var mat = material.create(materialRecords[j]);
                                if (null != mat) {
                                    //debugger;
                                    if (true == this_2.isRelatedItemNumberValid(aMassBalance.facility, aMassBalance.itemNumber, mat.itemNumber)) {
                                        this_2.gDebug.Debug(" +---- accepted item: " + mat.itemNumber);
                                        if (!(uniqueItemLotNumbers.find(function (m) { return m.itemNumber === mat.itemNumber && m.lotNumber == mat.lotNumber && m.moNumber === mat.moNumber; }))) {
                                            uniqueItemLotNumbers.push(mat);
                                        }
                                    }
                                    else {
                                        this_2.gDebug.Debug(" +---- rejected item: " + mat.itemNumber);
                                    }
                                }
                            };
                            this_2 = this;
                            //if (currentOrderNumber === '0000000054') {
                            //    debugger;
                            //}
                            for (j = 0; j < materialRecords.length; j++) {
                                _loop_3(j);
                            }
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.gDebug.Debug(" +-- number of item/lot numbers to process: " + uniqueItemLotNumbers.length);
                        if (!(uniqueItemLotNumbers.length > 0)) return [3 /*break*/, 11];
                        cachedQuantitiesConsumed = [];
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < uniqueItemLotNumbers.length)) return [3 /*break*/, 11];
                        currentItemNumber = uniqueItemLotNumbers[i].itemNumber;
                        currentLotNumber = uniqueItemLotNumbers[i].lotNumber;
                        originOrderNumber = uniqueItemLotNumbers[i].moNumber;
                        originQuantity = uniqueItemLotNumbers[i].reportedQuantity;
                        this.gDebug.Debug(" +--- Processing Unique Item Lot Numbers [" + i + "/" + uniqueItemLotNumbers.length + "]");
                        this.gDebug.Debug(" +--- currentItemNumber: " + currentItemNumber);
                        this.gDebug.Debug(" +--- currentLotNumber: " + currentLotNumber);
                        this.gDebug.Debug(" +--- originOrderNumber: " + originOrderNumber);
                        this.gDebug.Debug(" +--- originQuantity: " + originQuantity);
                        this.gController.ShowMessageInStatusBar("Retrieving lots records for " + currentItemNumber + "/" + currentLotNumber);
                        // 15
                        this.gDebug.Debug(" +--- Query: " + "MTITNO, MTBANO, MTRIDN, MTTRQT from MITTRA where MTBANO = '" + currentLotNumber + "' and MTITNO = '" + currentItemNumber + "' and MTTTYP = '10'");
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTBANO, MTRIDN, MTTRQT from MITTRA where MTBANO = '" + currentLotNumber + "' and MTITNO = '" + currentItemNumber + "' and MTTTYP = '10'", this.gSeperatorCharacter)];
                    case 6:
                        orderNumbers = _a.sent();
                        if (!(orderNumbers && orderNumbers.length > 0)) return [3 /*break*/, 10];
                        this.gDebug.Debug(" +---- Records returned for Lot " + currentLotNumber + "/Item " + currentLotNumber + ": " + orderNumbers.length);
                        _loop_4 = function (j) {
                            var currentOrderNumber, currentTransactionQuantity, currentQuantityConsumed, k, k, currentMaterial;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        currentOrderNumber = orderNumbers[j].MTRIDN;
                                        currentTransactionQuantity = Number(orderNumbers[j].MTTRQT);
                                        this_3.gDebug.Debug(" +-----  currentOrderNumber: " + currentOrderNumber);
                                        this_3.gDebug.Debug(" +-----  currentTransactionQuantity: " + currentTransactionQuantity);
                                        if (true == Number.isNaN(currentTransactionQuantity)) {
                                            currentTransactionQuantity = 0;
                                        }
                                        currentQuantityConsumed = cachedQuantitiesConsumed.find(function (q) { return q.VMMFNO === currentOrderNumber && q.VMMTNO === aMassBalance.itemNumber; });
                                        if (!(undefined == currentQuantityConsumed)) return [3 /*break*/, 2];
                                        // 16
                                        this_3.gDebug.Debug(" +----- Query: " + "VMMTNO, VMRPQA, VMMFNO, VMBANO from MWOMAT where VMMFNO = '" + currentOrderNumber + "' and VMMTNO = '" + aMassBalance.itemNumber + "'");
                                        return [4 /*yield*/, this_3.EXPORTMI_Select_Generic("VMMTNO, VMRPQA, VMMFNO, VMBANO from MWOMAT where VMMFNO = '" + currentOrderNumber + "' and VMMTNO = '" + aMassBalance.itemNumber + "'", this_3.gSeperatorCharacter)];
                                    case 1:
                                        currentQuantityConsumed = _a.sent();
                                        if (currentQuantityConsumed && currentQuantityConsumed.length > 0) {
                                            this_3.gDebug.Debug(" +----- Caching MWOMAT Record for order number " + currentOrderNumber);
                                            for (k = 0; k < currentQuantityConsumed.length; k++) {
                                                cachedQuantitiesConsumed.push(currentQuantityConsumed);
                                            }
                                        }
                                        return [3 /*break*/, 3];
                                    case 2:
                                        this_3.gDebug.Debug(" +----- Cache hit for MWOMAT Record for order number " + currentOrderNumber);
                                        _a.label = 3;
                                    case 3:
                                        for (k = 0; k < currentQuantityConsumed.length; k++) {
                                            currentMaterial = material.createMITTRA(orderNumbers[j]);
                                            if (currentMaterial) {
                                                currentMaterial.originOrderNumber = originOrderNumber;
                                                currentMaterial.originQuantity = originQuantity;
                                                currentMaterial.MOFinishedGoodsQuantity = Number(currentQuantityConsumed[k].VMRPQA);
                                                currentMaterial.actualBlendPercentage = currentMaterial.MOFinishedGoodsQuantity / currentMaterial.reportedQuantity;
                                                result.push(currentMaterial);
                                                //debugger;
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_3 = this;
                        j = 0;
                        _a.label = 7;
                    case 7:
                        if (!(j < orderNumbers.length)) return [3 /*break*/, 10];
                        return [5 /*yield**/, _loop_4(j)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        j++;
                        return [3 /*break*/, 7];
                    case 10:
                        i++;
                        return [3 /*break*/, 5];
                    case 11:
                        if (result.length == 0) {
                            result = null;
                        }
                        return [2 /*return*/, (result)];
                }
            });
        });
    };
    // 2.7.3.2
    MWS070B_MassBalance.prototype.retrieveProduction = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var dateRangeStart, dateRangeEnd, orderNumbersFromOriginalAndRelatedItems, uniqueLotNumbers, initialLotNumbers, j, uniqueFinalOrderNumbers, j, currentLotNumber, finalOrderNumbers, k, j, finalOrderNumber, productionRecords, l, transaction, conversionQuantity, pkgConversion, pgkConversationRequest, materialLines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving production");
                        dateRangeStart = aMassBalance.m3StartDate;
                        dateRangeEnd = aMassBalance.m3EndDate;
                        return [4 /*yield*/, this.retrieveProduction_OrderNumbersForOrgItmAndRelatedItems(aMassBalance)];
                    case 1:
                        orderNumbersFromOriginalAndRelatedItems = _a.sent();
                        uniqueLotNumbers = [];
                        if (!(null != orderNumbersFromOriginalAndRelatedItems && undefined != orderNumbersFromOriginalAndRelatedItems && orderNumbersFromOriginalAndRelatedItems.length > 0)) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.retrieveProduction_GetUniqueLotNumbersForOrderNumber(orderNumbersFromOriginalAndRelatedItems)];
                    case 2:
                        initialLotNumbers = _a.sent();
                        //debugger;
                        if (null != initialLotNumbers && undefined != initialLotNumbers && initialLotNumbers.length > 0) {
                            for (j = 0; j < initialLotNumbers.length; j++) {
                                if (-1 == uniqueLotNumbers.indexOf(initialLotNumbers[j])) {
                                    uniqueLotNumbers.push(initialLotNumbers[j]);
                                }
                            }
                        }
                        if (!(null != uniqueLotNumbers && undefined != uniqueLotNumbers && uniqueLotNumbers.length > 0)) return [3 /*break*/, 16];
                        uniqueFinalOrderNumbers = [];
                        j = 0;
                        _a.label = 3;
                    case 3:
                        if (!(j < uniqueLotNumbers.length)) return [3 /*break*/, 6];
                        currentLotNumber = uniqueLotNumbers[j];
                        this.gController.ShowMessageInStatusBar("Retrieving orders for lot number: " + currentLotNumber);
                        return [4 /*yield*/, this.retrieveProduction_RetrieveOrdersUsingLotNumber(currentLotNumber, dateRangeStart, dateRangeEnd)];
                    case 4:
                        finalOrderNumbers = _a.sent();
                        if (null != finalOrderNumbers && undefined != finalOrderNumbers && finalOrderNumbers.length > 0) {
                            for (k = 0; k < finalOrderNumbers.length; k++) {
                                if (-1 == uniqueFinalOrderNumbers.indexOf(finalOrderNumbers[k])) {
                                    uniqueFinalOrderNumbers.push(finalOrderNumbers[k]);
                                }
                            }
                        }
                        _a.label = 5;
                    case 5:
                        j++;
                        return [3 /*break*/, 3];
                    case 6:
                        if (!(uniqueFinalOrderNumbers.length > 0)) return [3 /*break*/, 16];
                        j = 0;
                        _a.label = 7;
                    case 7:
                        if (!(j < uniqueFinalOrderNumbers.length)) return [3 /*break*/, 14];
                        finalOrderNumber = uniqueFinalOrderNumbers[j];
                        this.gController.ShowMessageInStatusBar("Retrieving transactions for order number " + finalOrderNumber);
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTBANO, MTRIDN, MTTRQT, MTTRDT from MITTRA where MTRIDN = '" + finalOrderNumber + "' and MTTTYP = 10", this.gSeperatorCharacter)];
                    case 8:
                        productionRecords = _a.sent();
                        if (!(null != productionRecords && undefined != productionRecords && productionRecords.length > 0)) return [3 /*break*/, 13];
                        l = 0;
                        _a.label = 9;
                    case 9:
                        if (!(l < productionRecords.length)) return [3 /*break*/, 13];
                        transaction = new inventoryManufactureItemsTransaction();
                        conversionQuantity = 1;
                        pkgConversion = aMassBalance.getItemPackageConversion(productionRecords[l].MTITNO);
                        if (!!pkgConversion) return [3 /*break*/, 11];
                        this.gController.ShowMessageInStatusBar("Retrieving package conversion " + productionRecords[l].MTITNO);
                        return [4 /*yield*/, this.MMS023MI_GetItemPack(productionRecords[l].MTITNO)];
                    case 10:
                        pgkConversationRequest = _a.sent();
                        if (pgkConversationRequest) {
                            pkgConversion = MMS023MI_GetItemPack_Response.create(pgkConversationRequest);
                            aMassBalance.itemsPackageConversion.push(pkgConversion);
                        }
                        _a.label = 11;
                    case 11:
                        //debugger;
                        if (pkgConversion) {
                            conversionQuantity = pkgConversion.quantity;
                        }
                        transaction.itemNumber = productionRecords[l].MTITNO;
                        transaction.transactionDate = productionRecords[l].MTTRDT;
                        transaction.originalTransactionQuantity = Number(productionRecords[l].MTTRQT);
                        transaction.converstionFactor = conversionQuantity;
                        transaction.quantity = (Number(productionRecords[l].MTTRQT) * conversionQuantity);
                        transaction.lotNumber = productionRecords[l].MTBANO;
                        transaction.orderNumber = finalOrderNumber;
                        aMassBalance.productionDetail.push(transaction);
                        _a.label = 12;
                    case 12:
                        l++;
                        return [3 /*break*/, 9];
                    case 13:
                        j++;
                        return [3 /*break*/, 7];
                    case 14: return [4 /*yield*/, this.retrieveProduction_MaterialLines(aMassBalance, uniqueFinalOrderNumbers)];
                    case 15:
                        materialLines = _a.sent();
                        aMassBalance.materialsForFinishedGoods = materialLines;
                        _a.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    MWS070B_MassBalance.prototype.retrieveSalesOfFinishedGoods_sub = function (aMassBalance, aItemNumber, aQuantity) {
        return __awaiter(this, void 0, void 0, function () {
            var currentItemNumber, currentQuantity, dateRangeStart, dateRangeEnd, salesRecords, _loop_5, this_4, j;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentItemNumber = aItemNumber;
                        currentQuantity = aQuantity;
                        dateRangeStart = aMassBalance.m3StartDate;
                        dateRangeEnd = aMassBalance.m3EndDate;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRQT, MTBANO from MITTRA where MTITNO = '" + currentItemNumber + "' and MTTTYP = '31' and MTTRDT >= " + dateRangeStart + " and MTTRDT <= " + dateRangeEnd, this.gSeperatorCharacter)];
                    case 1:
                        salesRecords = _a.sent();
                        if (!(salesRecords && salesRecords.length > 0)) return [3 /*break*/, 5];
                        _loop_5 = function (j) {
                            var finishedProdInSales, conversionQuantity, perc, pkgConversion, pgkConversationRequest, findSalesSummary, summaryFinishedSales;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        finishedProdInSales = finishedProductInSales.create(salesRecords[j]);
                                        if (!(null != finishedProdInSales)) return [3 /*break*/, 3];
                                        conversionQuantity = 1;
                                        if (!(aMassBalance.itemNumber === finishedProdInSales.itemNumber)) {
                                            perc = Number(aMassBalance.getIngredientPortionOfFinishedGoods(finishedProdInSales.itemNumber));
                                            if (perc != 0) {
                                                finishedProdInSales.ingredientPercentage = (currentQuantity / perc);
                                            }
                                        }
                                        else {
                                            // if it is our main item number the percentage will be 1
                                            finishedProdInSales.ingredientPercentage = 1;
                                        }
                                        pkgConversion = aMassBalance.getItemPackageConversion(finishedProdInSales.itemNumber);
                                        if (!!pkgConversion) return [3 /*break*/, 2];
                                        this_4.gController.ShowMessageInStatusBar("Retrieving package conversion " + finishedProdInSales.itemNumber);
                                        return [4 /*yield*/, this_4.MMS023MI_GetItemPack(finishedProdInSales.itemNumber)];
                                    case 1:
                                        pgkConversationRequest = _a.sent();
                                        if (pgkConversationRequest) {
                                            pkgConversion = MMS023MI_GetItemPack_Response.create(pgkConversationRequest);
                                            aMassBalance.itemsPackageConversion.push(pkgConversion);
                                        }
                                        _a.label = 2;
                                    case 2:
                                        if (pkgConversion) {
                                            conversionQuantity = pkgConversion.quantity;
                                            finishedProdInSales.originalQuantity = finishedProdInSales.quantity;
                                            finishedProdInSales.conversionValue = conversionQuantity;
                                            finishedProdInSales.quantity = finishedProdInSales.quantity * conversionQuantity;
                                        }
                                        aMassBalance.finishedProductInSalesDetail.push(finishedProdInSales);
                                        findSalesSummary = aMassBalance.finishedProductInSalesSummary.find(function (s) { return s.itemNumber === finishedProdInSales.itemNumber; });
                                        if (findSalesSummary) {
                                            findSalesSummary.quantity += finishedProdInSales.quantity;
                                        }
                                        else {
                                            summaryFinishedSales = finishedProductInSales.create(salesRecords[j]);
                                            if (null != summaryFinishedSales) {
                                                summaryFinishedSales.ingredientPercentage = finishedProdInSales.ingredientPercentage;
                                                aMassBalance.finishedProductInSalesSummary.push(summaryFinishedSales);
                                            }
                                        }
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        };
                        this_4 = this;
                        j = 0;
                        _a.label = 2;
                    case 2:
                        if (!(j < salesRecords.length)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_5(j)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        j++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // must be called after the retrieval of production
    MWS070B_MassBalance.prototype.retrieveSalesOfFinishedGoods = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving production");
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < aMassBalance.productionSummary.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.retrieveSalesOfFinishedGoods_sub(aMassBalance, aMassBalance.productionSummary[i].itemNumber, aMassBalance.productionSummary[i].quantity)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, this.retrieveSalesOfFinishedGoods_sub(aMassBalance, aMassBalance.itemNumber, 1)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // removed 20191217
    //private async retrieveProduction(aMassBalance: massBalanceDataClass) {
    //    this.gController.ShowMessageInStatusBar("Retrieving production");
    //    //let originalItemNumber = aMassBalance.itemNumber;
    //    let dateRangeStart = aMassBalance.m3StartDate;
    //    let dateRangeEnd = aMassBalance.m3EndDate;
    //    let orderNumbersFromOriginalAndRelatedItems = await this.retrieveProduction_OrderNumbersForOrgItmAndRelatedItems(aMassBalance);
    //    let uniqueLotNumbers: string[] = [];
    //    if (null != orderNumbersFromOriginalAndRelatedItems && undefined != orderNumbersFromOriginalAndRelatedItems && orderNumbersFromOriginalAndRelatedItems.length > 0) {
    //        //for (let i = 0; i < orderNumbersFromOriginalAndRelatedItems.length; i++) {
    //        // get the lot numbers used in the orders (MTITNO, MTBANO from MITTRA where MTRIDN = '" + orderNumber + "' and MTTTYP = 10)
    //        let initialLotNumbers = await this.retrieveProduction_GetUniqueLotNumbersForOrderNumber(orderNumbersFromOriginalAndRelatedItems);
    //        //debugger;
    //        if (null != initialLotNumbers && undefined != initialLotNumbers && initialLotNumbers.length > 0) {
    //            for (let j = 0; j < initialLotNumbers.length; j++) {
    //                if (-1 == uniqueLotNumbers.indexOf(initialLotNumbers[j])) {
    //                    uniqueLotNumbers.push(initialLotNumbers[j]);
    //                }
    //            }
    //        }
    //        //}
    //        let materialLines: material[] = await this.retrieveProduction_MaterialLines(orderNumbersFromOriginalAndRelatedItems);
    //        aMassBalance.materialsForFinishedGoods = materialLines;
    //        if (null != uniqueLotNumbers && undefined != uniqueLotNumbers && uniqueLotNumbers.length > 0) {
    //            let uniqueFinalOrderNumbers: string[] = [];
    //            for (let j = 0; j < uniqueLotNumbers.length; j++) {
    //                let currentLotNumber = uniqueLotNumbers[j];
    //                this.gController.ShowMessageInStatusBar("Retrieving orders for lot number: " + currentLotNumber);
    //                // get the orders associated with the lot numbers (MTITNO, MTBANO, MTRIDN from MITTRA where MTBANO = '" + lotNumber + " ' and MTTTYP = 11 and MTTRDT >= " + aFromDate + " and MTTRDT <= " + aToDate)
    //                let finalOrderNumbers = await this.retrieveProduction_RetrieveOrdersUsingLotNumber(currentLotNumber, dateRangeStart, dateRangeEnd);
    //                if (null != finalOrderNumbers && undefined != finalOrderNumbers && finalOrderNumbers.length > 0) {
    //                    for (let k = 0; k < finalOrderNumbers.length; k++) {
    //                        let finalOrderNumber = finalOrderNumbers[k];
    //                        this.gController.ShowMessageInStatusBar("Retrieving transactions for order number " + finalOrderNumber);
    //                        // retrieve all of the transactions - Output is all  items and quantities produced within the time frame from blends produced in the time interval from the original item number
    //                        let productionRecords = await this.EXPORTMI_Select_Generic("MTITNO, MTBANO, MTRIDN, MTTRQT, MTTRDT from MITTRA where MTRIDN = '" + finalOrderNumber + "' and MTTTYP = 10", this.gSeperatorCharacter);
    //                        if (null != productionRecords && undefined != productionRecords && productionRecords.length > 0) {
    //                            for (let l = 0; l < productionRecords.length; l++) {
    //                                let transaction = new inventoryManufactureItemsTransaction();
    //                                transaction.itemNumber = productionRecords[l].MTITNO;
    //                                transaction.transactionDate = productionRecords[l].MTTRDT;
    //                                transaction.quantity = Number(productionRecords[l].MTTRQT);
    //                                transaction.lotNumber = productionRecords[l].MTBANO;
    //                                aMassBalance.productionDetail.push(transaction);
    //                            }
    //                        }
    //                    }
    //                }
    //            }
    //        }
    //    }
    //}
    // 2.7.3
    MWS070B_MassBalance.prototype.retrieveInventoryQuantity_getMOs = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var result, mbItemNumber, ingredientsInInventory, inv, i, currentOrderNumber, itemsInMO, currentOrderNumber_1, j, moItemNumber, materials, m, openInventory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gController.ShowMessageInStatusBar("Retrieving inventory quantity for MOs");
                        result = [];
                        mbItemNumber = aMassBalance.itemNumber;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTRIDN, MTWHLO from MITTRA where MTITNO = '" + mbItemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTTTYP = 11", this.gSeperatorCharacter)];
                    case 1:
                        ingredientsInInventory = _a.sent();
                        if (!(null != ingredientsInInventory && ingredientsInInventory.length > 0)) return [3 /*break*/, 10];
                        inv = new inventory();
                        inv.itemNumber = mbItemNumber;
                        inv.addOrderNumbers(ingredientsInInventory);
                        if (!(inv.orderNumbers.length > 0)) return [3 /*break*/, 9];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < inv.orderNumbers.length)) return [3 /*break*/, 9];
                        if (!inv.orderNumbers[i].orderNumber) return [3 /*break*/, 8];
                        currentOrderNumber = inv.orderNumbers[i].orderNumber;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("VHMFNO, VHITNO, VHMAQT from MWOHED where VHMFNO = '" + currentOrderNumber + "'", this.gSeperatorCharacter)];
                    case 3:
                        itemsInMO = _a.sent();
                        if (!(null != itemsInMO && itemsInMO.length > 0)) return [3 /*break*/, 8];
                        currentOrderNumber_1 = inv.orderNumbers[i];
                        //inv.addManufacturingOrderNumbers(inv.orderNumbers[i], itemsInMO);
                        inv.addManufacturingOrderNumbers(currentOrderNumber_1, itemsInMO);
                        j = 0;
                        _a.label = 4;
                    case 4:
                        if (!(j < currentOrderNumber_1.finishedItems.length)) return [3 /*break*/, 8];
                        if (!(currentOrderNumber_1.finishedItems[j] && currentOrderNumber_1.finishedItems[j].itemNumber)) return [3 /*break*/, 7];
                        moItemNumber = currentOrderNumber_1.finishedItems[j].itemNumber;
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("PMCNQT from MPDMAT where PMMTNO = '" + moItemNumber + "'", this.gSeperatorCharacter)];
                    case 5:
                        materials = _a.sent();
                        if (null != materials && materials.length > 0) {
                            for (m = 0; m < materials.length; m++) {
                                currentOrderNumber_1.finishedItems[j].materialQuantity = materials[0].PMCNQT;
                                //itemsInMO[j].materialQuantity = materials[0].PMCNQT;
                            }
                        }
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTRTM, MTNSTQ, MTWHLO from MITTRA where MTITNO = '" + moItemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTSTAS = 2 and MTTTYP <> '17'", this.gSeperatorCharacter)];
                    case 6:
                        openInventory = _a.sent();
                        if (null != openInventory && openInventory.length > 0) {
                            currentOrderNumber_1.finishedItems[j].setOpenClosingBalances(openInventory);
                        }
                        _a.label = 7;
                    case 7:
                        j++;
                        return [3 /*break*/, 4];
                    case 8:
                        i++;
                        return [3 /*break*/, 2];
                    case 9:
                        aMassBalance.ingredientsInInventory.push(inv);
                        _a.label = 10;
                    case 10: return [2 /*return*/, (result)];
                }
            });
        });
    };
    // 2.7.1.1
    // 2.7.1.3
    // 2.7.3.1
    MWS070B_MassBalance.prototype.retrieveInventoryQuantity = function (aMassBalance) {
        return __awaiter(this, void 0, void 0, function () {
            var relatedItemNumbers, inventoryQuantity, i, relatedItemNumber, j, childItem, childItemInventoryQuantity, tempItemBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        relatedItemNumbers = this.getRelatedItemNumbers(aMassBalance.facility, aMassBalance.itemNumber);
                        this.gController.ShowMessageInStatusBar("Retrieving main item history");
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTRTM, MTNSTQ, MTWHLO from MITTRA where MTITNO = '" + aMassBalance.itemNumber + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTSTAS = 2 and MTTTYP <> '17'", this.gSeperatorCharacter)];
                    case 1:
                        inventoryQuantity = _a.sent();
                        if (!(null != inventoryQuantity && inventoryQuantity.length > 0)) return [3 /*break*/, 8];
                        this.gDebug.Debug(" +-- mittra count: " + inventoryQuantity.length);
                        inventoryQuantity = inventoryQuantity.filter(function (item) { return aMassBalance.isWarehouseValid(item.MTWHLO); });
                        this.gDebug.Debug(" +-- filtered mittra count: " + inventoryQuantity.length);
                        aMassBalance.setOpenClosingBalances(inventoryQuantity);
                        this.gDebug.Debug(" +-- opening Balance: " + aMassBalance.openingBalance);
                        this.gDebug.Debug(" +--- opening Balance Date: " + aMassBalance.openingBalanceDate);
                        this.gDebug.Debug(" +--- opening Balance Time: " + aMassBalance.openingBalanceTime);
                        this.gDebug.Debug(" +-- closing Balance: " + aMassBalance.closingBalance);
                        this.gDebug.Debug(" +--- closing Balance Date: " + aMassBalance.closingBalanceDate);
                        this.gDebug.Debug(" +--- closing Balance Time: " + aMassBalance.closingBalanceTime);
                        this.gDebug.Debug(" +-- items related to: " + aMassBalance.itemNumber);
                        if (!(null != relatedItemNumbers && undefined != relatedItemNumbers && relatedItemNumbers.length > 0)) return [3 /*break*/, 7];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < relatedItemNumbers.length)) return [3 /*break*/, 7];
                        relatedItemNumber = relatedItemNumbers[i];
                        if (!(null != relatedItemNumber.childItems && relatedItemNumber.childItems.length > 0)) return [3 /*break*/, 6];
                        j = 0;
                        _a.label = 3;
                    case 3:
                        if (!(j < relatedItemNumber.childItems.length)) return [3 /*break*/, 6];
                        childItem = relatedItemNumber.childItems[j];
                        this.gDebug.Debug(" +-- child item number: " + childItem);
                        this.gController.ShowMessageInStatusBar("Retrieving item history for " + childItem);
                        return [4 /*yield*/, this.EXPORTMI_Select_Generic("MTITNO, MTTRDT, MTTRTM, MTNSTQ, MTWHLO from MITTRA where MTITNO = '" + childItem + "' and MTTRDT >= " + aMassBalance.m3StartDate + " and MTTRDT <= " + aMassBalance.m3EndDate + " and MTSTAS = 2 and MTTTYP <> '17'", this.gSeperatorCharacter)];
                    case 4:
                        childItemInventoryQuantity = _a.sent();
                        if (null != childItemInventoryQuantity && childItemInventoryQuantity.length > 0) {
                            // find valid warehouses
                            childItemInventoryQuantity = childItemInventoryQuantity.filter(function (item) { return aMassBalance.isWarehouseValid(item.MTWHLO); });
                            if (null != childItemInventoryQuantity && childItemInventoryQuantity.length > 0) {
                                tempItemBalance = aMassBalance.addChildItemBalance(childItemInventoryQuantity, childItem);
                                // this is one of our related items that has a valid quantity
                                aMassBalance.relatedItemNumbersWithValues.push(childItem);
                                this.gDebug.Debug(" +-- child item: " + tempItemBalance.itemNumber);
                                this.gDebug.Debug(" +--- opening Balance: " + tempItemBalance.openingBalance);
                                this.gDebug.Debug(" +---- opening Balance Date: " + tempItemBalance.openingBalanceDate);
                                this.gDebug.Debug(" +---- opening Balance Time: " + tempItemBalance.openingBalanceTime);
                                this.gDebug.Debug(" +--- closing Balance: " + tempItemBalance.closingBalance);
                                this.gDebug.Debug(" +---- closing Balance Date: " + tempItemBalance.closingBalanceDate);
                                this.gDebug.Debug(" +---- closing Balance Time: " + tempItemBalance.closingBalanceTime);
                            }
                        }
                        childItemInventoryQuantity = null;
                        _a.label = 5;
                    case 5:
                        j++;
                        return [3 /*break*/, 3];
                    case 6:
                        i++;
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.gDebug.Info("There was no inventory in the selected date range");
                        this.gController.ShowMessage("There was no inventory for " + aMassBalance.itemNumber + " in the selected date range");
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    // **************************
    // * -- dialog functions -- *
    // **************************
    MWS070B_MassBalance.prototype.promptForInputValues = function (aFacility, aItemNumber) {
        var result = null;
        var _this = this;
        // ComboBoxElement
        $("<div><table>\n                <tr><td><label class='inforLabel noColon'>Facility:</label></td><td><div style='width:80'><input type=text id='facility' class='inforTextbox' /></div></td></tr>\n                <tr><td><label class='inforLabel noColon'>Item:</label></td><td><div style='width:80'><input type=text id='itemNumber' class='inforTextbox' /></div></td></tr>\n                <tr><td><label class='inforLabel noColon'>From Date:</label></td><td><div style='width:80'><input type=text id='fr_Date' class='inforDateField inforTextbox' df='YYMMDD'/></div></td></tr>\n                <tr><td><label class='inforLabel noColon'>To Date:</label></td><td><div style='width:80'><input type=text id='to_Date' class='inforDateField inforTextbox' df='YYMMDD' /></div></td></tr>\n                </table></div>").inforDialog({
            title: "Please Select Dates",
            dialogType: "General",
            open: function () {
                $('#itemNumber').width(150);
                if (null != aItemNumber && aItemNumber !== "") {
                    $('#itemNumber').val(aItemNumber);
                    $('#itemNumber').readOnly();
                }
                if (null != aFacility && aFacility !== "") {
                    $('#facility').val(aFacility);
                    //$('#facility').readOnly();
                }
                $("#fr_Date").width(80);
                $("#fr_Date").datepicker("setDate", new Date());
                $("#fr_Date").inforDateField({
                    hasInitialValue: true,
                    openOnEnter: false,
                    beforeShow: function () {
                        if ($(this).val() == "") {
                            $(this).datepicker("setDate", new Date());
                        }
                    }
                });
                //$("#fr_Date").datepicker("setDate", new Date());
                $("#to_Date").width(80);
                $("#to_Date").inforDateField({
                    hasInitialValue: true,
                    openOnEnter: false,
                    beforeShow: function () {
                        if ($(this).val() == "") {
                            var addedDate = new Date();
                            try {
                                var fromDate = new Date($("#fr_Date").val());
                                //debugger;
                                var newToDate = new Date(fromDate);
                                newToDate.setDate(fromDate.getDate() + 7);
                                addedDate = newToDate;
                            }
                            catch (e) { }
                            $(this).datepicker("setDate", addedDate);
                        }
                    }
                });
            },
            buttons: {
                Ok: function () {
                    var from2 = $('#fr_Date').val();
                    var to2 = $('#to_Date').val();
                    var itemNumber = $('#itemNumber').val();
                    var facility = $('#facility').val();
                    var close = true;
                    if (true == _this.isValidFacility(facility)) {
                        if (null != from2 && from2.length > 0 && null != to2 && to2.length > 0) {
                            var fromDate = from2;
                            var toDate = to2;
                            var dt_fromDate = new Date(fromDate);
                            var dt_toDate = new Date(toDate);
                            if (itemNumber != null && itemNumber !== "") {
                                if (dt_toDate > dt_fromDate) {
                                    _this.gDebug.Debug("Item Number: " + itemNumber);
                                    _this.gDebug.Debug("From Date: " + from2);
                                    _this.gDebug.Debug("To Date: " + to2);
                                    _this.gController.ShowMessageInStatusBar("Generating Spreadsheet, please wait");
                                    //_this.generate(facility, itemNumber, fromDate, toDate);
                                    _this.generate(facility, itemNumber, dt_fromDate, dt_toDate);
                                }
                                else {
                                    _this.gController.ShowMessage("Error, to date must be after from date");
                                    close = false;
                                }
                            }
                            else {
                                _this.gController.ShowMessage("Error, item number must be entered or selected");
                                close = false;
                            }
                        }
                    }
                    else {
                        close = false;
                        _this.gController.ShowMessage("Error, facility " + facility + " is not valid");
                    }
                    if (true == close) {
                        $(this).inforDialog("destroy").remove();
                    }
                },
                Cancel: function () {
                    $(this).inforDialog("destroy").remove();
                }
            }
        });
        return (result);
    };
    // ***************************************
    // * -- spreadsheet generic functions -- *
    // ***************************************
    MWS070B_MassBalance.prototype.sheet_from_array_of_arrays = function (data, opts) {
        var ws = {};
        var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
        var maxColumnNumber = 0;
        for (var R = 0; R != data.length; ++R) {
            //for (var C = 0; C != data[R].length; ++C) {
            if (undefined != data[R].length) {
                for (var C = 0; C != data[R].length; ++C) {
                    if (range.s.r > R)
                        range.s.r = R;
                    if (range.s.c > C)
                        range.s.c = C;
                    if (range.e.r < R)
                        range.e.r = R;
                    if (range.e.c < C)
                        range.e.c = C;
                    var dTemp = data[R][C];
                    var dValue = null;
                    var bold = false;
                    var fill = null;
                    var formula = null;
                    var fontSize = null;
                    var underline = false;
                    var wrapText = false;
                    var fontColour = null;
                    var border = null;
                    var numberFormat = null;
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
                    }
                    var cell = {
                        v: dValue
                    }; //data[R][C] };
                    if (cell.v == null)
                        continue;
                    var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });
                    if (typeof cell.v === 'number')
                        cell.t = 'n';
                    else if (typeof cell.v === 'boolean')
                        cell.t = 'b';
                    else if (cell.v instanceof Date) {
                        cell.t = 'n';
                        cell.z = XLSX.SSF._table[14];
                        cell.v = XLSX.datenum(cell.v);
                    }
                    else
                        cell.t = 's';
                    if (formula) {
                        //cell.v = XLSX.writetag('f', XLSX.escapexml(formula));
                        //debugger;
                        cell.f = formula;
                    }
                    if (true == bold || true == underline || null != fontSize || true == wrapText || null != fill || null != fontColour || null != border || null != numberFormat) {
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
                //debugger;
                this.gDebug.Error("Error in data, undefined array length");
            }
        }
        if (range.s.c < 10000000)
            ws['!ref'] = XLSX.utils.encode_range(range);
        return ws;
    };
    MWS070B_MassBalance.prototype.saveAs = function (blob, fileName) {
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
    };
    MWS070B_MassBalance.prototype.addRows = function (aMain, aNew) {
        if (null != aMain && aNew && undefined != aNew && aNew.length > 0) {
            for (var i = 0; i < aNew.length; i++) {
                aMain.push(aNew[i]);
            }
        }
    };
    MWS070B_MassBalance.prototype.string2ArrayBufer = function (s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return (buf);
    };
    // ***********************
    // * -- API functions -- *
    // ***********************
    MWS070B_MassBalance.prototype.EXPORTMI_Select_Generic = function (aQuery, aSeperatorCharacter) {
        var _this = this;
        return new Promise(function (resolve) {
            var record = { 'SEPC': aSeperatorCharacter, 'HDRS': '1', 'QERY': aQuery };
            var outputFields = ["REPL"];
            var request = {
                maxReturnedRecords: 0,
                program: 'EXPORTMI',
                transaction: 'Select',
                record: record,
                outputFields: outputFields
            };
            MIService.Current.executeRequest(request).then(function (response) {
                if (null != response && null != response.items && response.items.length > 0) {
                    //this.gDebug.Debug("  +-- Result count: " + response.items.length);
                    var headers = null;
                    var result = [];
                    for (var i = 0; i < response.items.length; i++) {
                        var workingString = response.items[i].REPL;
                        var record_1 = new Object;
                        if (workingString.length > 0) {
                            if (null != headers) {
                                var splitString = workingString.split(aSeperatorCharacter);
                                if (null != splitString && splitString.length > 0) {
                                    var headersLength = headers.length;
                                    if (splitString.length < headersLength) {
                                        headersLength = splitString.length;
                                    }
                                    for (var h = 0; h < headersLength; h++) {
                                        record_1[headers[h]] = splitString[h];
                                        //record.push({
                                        //    name: headers[h],
                                        //    value: splitString[h]
                                        //});
                                    }
                                }
                                result.push(record_1);
                            }
                            else {
                                headers = workingString.split(aSeperatorCharacter);
                            }
                        }
                    }
                    resolve(result);
                }
                else {
                    _this.gDebug.Debug("  +-- no records found");
                    resolve(null);
                }
            }).catch(function (response) {
                _this.gDebug.Error(response.errorMessage);
                resolve(null);
            });
        });
    };
    MWS070B_MassBalance.prototype.MMS200MI_GetItmBasic = function (aItemNumber) {
        var _this = this;
        return new Promise(function (resolve) {
            var record = { 'ITNO': aItemNumber };
            var outputFields = ['ITNO', 'FUDS', 'ITTY'];
            MIService.Current.execute("MMS200MI", "GetItmBasic", record, outputFields).then(function (response) {
                if (null != response && null != response.item) {
                    resolve(response.item);
                }
                else {
                    _this.gDebug.Debug("  +-- no records found");
                    resolve(null);
                }
            }).catch(function (response) {
                _this.gDebug.Error(response.errorMessage);
                resolve(null);
            });
        });
    };
    MWS070B_MassBalance.prototype.MMS023MI_GetItemPack = function (aItemNumber) {
        var _this = this;
        return new Promise(function (resolve) {
            var record = { 'ITNO': aItemNumber };
            var outputFields = ['ITNO', 'PKFQ'];
            MIService.Current.execute("MMS023MI", "GetItemPack", record, outputFields).then(function (response) {
                if (null != response && null != response.item) {
                    resolve(response.item);
                }
                else {
                    _this.gDebug.Debug("  +-- no records found");
                    resolve(null);
                }
            }).catch(function (response) {
                _this.gDebug.Error(response.errorMessage);
                resolve(null);
            });
        });
    };
    MWS070B_MassBalance.prototype.MMS005MI_GetWarehouse = function (aWarehouse) {
        var _this = this;
        return new Promise(function (resolve) {
            var record = { 'WHLO': aWarehouse };
            var outputFields = ['FACI'];
            MIService.Current.execute("MMS005MI", "GetWarehouse", record, outputFields).then(function (response) {
                if (null != response && null != response.item) {
                    resolve(response.item.FACI);
                }
                else {
                    _this.gDebug.Debug("  +-- no records found");
                    resolve(null);
                }
            }).catch(function (response) {
                _this.gDebug.Error(response.errorMessage);
                resolve(null);
            });
        });
    };
    // ***************************
    // * -- Utility functions -- *
    // ***************************
    MWS070B_MassBalance.prototype.getBrowserLocale = function () {
        if (navigator.language != undefined) {
            return (navigator.languages[0]);
        }
        else {
            return (navigator.language);
        }
    };
    MWS070B_MassBalance.prototype.addButton = function (_a) {
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
    };
    MWS070B_MassBalance.prototype.addDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    MWS070B_MassBalance.prototype.convertDateToM3Format = function (aDate) {
        return ("" + aDate.getFullYear() + ("00" + (aDate.getMonth() + 1)).slice(-2) + ("00" + (aDate.getDate())).slice(-2));
    };
    MWS070B_MassBalance.prototype.convertDateToYYYYMMddWithSlashes = function (aDate) {
        return ("" + aDate.getFullYear() + "/" + ("00" + (aDate.getMonth() + 1)).slice(-2) + "/" + ("00" + (aDate.getDate())).slice(-2));
    };
    MWS070B_MassBalance.prototype.convertDateToYYYYMMddWithDashes = function (aDate) {
        return ("" + aDate.getFullYear() + "-" + ("00" + (aDate.getMonth() + 1)).slice(-2) + "-" + ("00" + (aDate.getDate())).slice(-2));
    };
    MWS070B_MassBalance.prototype.convertM3DateToDate = function (aM3Date) {
        var result = null;
        if (aM3Date.length > 7) {
            try {
                result = new Date(aM3Date.substr(0, 4) + "/" + aM3Date.substr(4, 2) + "/" + aM3Date.substr(6, 2));
            }
            catch (ex) {
                this.gDebug.Error("Failed to convert '" + aM3Date + "' to a valid date object");
            }
        }
        else {
            this.gDebug.Debug("convertM3DateToDate() fail");
            this.gDebug.Debug(" +--" + aM3Date.length);
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.ordinalSuffix = function (n) {
        var j = n % 10, k = n % 100;
        if (j == 1 && k != 11) {
            return n + "st";
        }
        if (j == 2 && k != 12) {
            return n + "nd";
        }
        if (j == 3 && k != 13) {
            return n + "rd";
        }
        return (n + "th");
    };
    MWS070B_MassBalance.prototype.calculateNumberOfDays = function (aStartDate, aEndDate) {
        var dateRangeMS = aEndDate.getTime() - aStartDate.getTime();
        return (Math.ceil((dateRangeMS / (1000 * 3600 * 24) + 1)));
    };
    // ***************************
    // * -- item lookup table -- *
    // ***************************
    MWS070B_MassBalance.prototype.addRelatedItem = function (aFacility, aItemNumber, aRelatedItem) {
        var relatedItems = this.getRelatedItemNumbers(aFacility, aItemNumber);
        if (relatedItems && relatedItems.length > 0) {
            var relatedItem = relatedItems[0];
            if (-1 == relatedItem.childItems.findIndex(function (c) { return c == aRelatedItem; })) {
                relatedItem.childItems.push(aRelatedItem);
            }
        }
        else {
            this.itemLookupTable.push({
                facility: aFacility,
                itemNumber: aItemNumber,
                childItems: [aRelatedItem]
            });
        }
    };
    MWS070B_MassBalance.prototype.isRelatedItemNumberValid = function (aFacility, aItemNumber, aRelatedItemNumber) {
        var result = false;
        var relatedItems = this.getRelatedItemNumbers(aFacility, aItemNumber);
        if (relatedItems && relatedItems.length > 0 && relatedItems[0].childItems.length > 0) {
            if (-1 != relatedItems[0].childItems.findIndex(function (c) { return c == aRelatedItemNumber; })) {
                result = true;
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.getRelatedItemNumbers = function (aFacility, aItemNumber) {
        return (this.itemLookupTable.filter(function (data) { return data.facility == aFacility && data.itemNumber == aItemNumber; }));
    };
    MWS070B_MassBalance.prototype.getRelatedItemNumbersChildren = function (aFacility, aItemNumber) {
        var result = null;
        var relatedItemNumbers = this.getRelatedItemNumbers(aFacility, aItemNumber);
        if (null != relatedItemNumbers && undefined != relatedItemNumbers && relatedItemNumbers.length > 0) {
            var relatedItemNumber = relatedItemNumbers[0];
            if (null != relatedItemNumber.childItems && relatedItemNumber.childItems.length > 0) {
                result = relatedItemNumber.childItems;
            }
        }
        return (result);
    };
    MWS070B_MassBalance.prototype.isValidFacility = function (aFacility) {
        var result = true;
        //let found = this.itemLookupTable.find(f => f.facility === aFacility);
        //if (null != found && undefined != found) {
        //    result = true;
        //}
        return (result);
    };
    return MWS070B_MassBalance;
}());
//# sourceMappingURL=MWS070B_MassBalance.js.map
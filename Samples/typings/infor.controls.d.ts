/// <reference path="jquery.d.ts" />

interface JQuery {
	inforAccordion(p1?: any);
	inforContextMenu(p1?: any, p2?: any);
	inforForm();
	inforMessageDialog(options: any);
	inforDialog(p: any): JQuery;
	inforDraggableList(p1?: any);
	inforDropDownList(p1?: any, p2?: any);
	inforFileField(p1?: any);
	inforListBox(p1?: any, p2?: any, p3?: any);
	inforLoadingIndicator(p1?: any);
	inforProgressIndicator(p1?: any);
	inforBusyIndicator(p1?: any);
	inforDataGrid(p1?: any);
	inforMenuButton(p1?: any);
	inforTree(p1?: any);
	inforPieChart(p1?: any, p2?: any);
	inforRichTextEditor(p1?: any);
	inforSearchField(p1?: any);
	inforTabset(p1?: any);
	inforTriggerField(p1?: any);
	inforToolTip(p1?: any);
	autocomplete(p1?: any);
	readOnly();
	enable();
	disable();
	resetForm();
	validationMessage(p1?: any, p2?: any, p3?: any);
	fileupload(p1?: any, p2?: any);
}

interface JQueryStatic {
	inforDialog(p?: any): JQuery;
}
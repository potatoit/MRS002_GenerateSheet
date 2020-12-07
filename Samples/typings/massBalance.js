var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sortInventoryDateTime = function (a, b) {
    if (a.MMITNO > b.MMITNO)
        return 1;
    if (a.MMITNO < b.MMITNO)
        return -1;
    if (a.MTTRDT > b.MTTRDT)
        return 1;
    if (a.MTTRDT < b.MTTRDT)
        return -1;
    if (a.MTTRTM > b.MTTRTM)
        return 1;
    if (a.MTTRTM < b.MTTRTM)
        return -1;
};
var itemDescription = /** @class */ (function () {
    function itemDescription() {
        this.itemNumber = "";
        this.itemDescription = "";
        this.itemType = "";
    }
    return itemDescription;
}());
var itemBase = /** @class */ (function () {
    function itemBase() {
        this.itemNumber = "";
        this.itemDescription = "";
        this.itemType = "";
        this.openingBalance = 0;
        this.closingBalance = 0;
        this.openingBalanceDate = "";
        this.closingBalanceDate = "";
        this.openingBalanceTime = "";
        this.closingBalanceTime = "";
    }
    // expects an ordered list with only this item number
    itemBase.prototype.setOpenClosingBalances = function (aMIArray) {
        var _this = this;
        var sortedInventory = aMIArray.sort(sortInventoryDateTime);
        var filteredInventory = sortedInventory.filter(function (item) { return item.MTITNO === _this.itemNumber; });
        //debugger;
        if (null != filteredInventory && filteredInventory != undefined && filteredInventory.length > 0) {
            if (undefined != filteredInventory[0].MTNSTQ) {
                this.openingBalance = filteredInventory[0].MTNSTQ;
            }
            if (undefined != filteredInventory[filteredInventory.length - 1].MTNSTQ) {
                this.closingBalance = filteredInventory[filteredInventory.length - 1].MTNSTQ;
            }
            if (undefined != filteredInventory[0].MTTRDT) {
                this.openingBalanceDate = filteredInventory[0].MTTRDT;
            }
            if (undefined != filteredInventory[filteredInventory.length - 1].MTTRDT) {
                this.closingBalanceDate = filteredInventory[filteredInventory.length - 1].MTTRDT;
            }
            if (undefined != filteredInventory[0].MTTRTM) {
                this.openingBalanceTime = filteredInventory[0].MTTRTM;
            }
            if (undefined != filteredInventory[filteredInventory.length - 1].MTTRTM) {
                this.closingBalanceTime = filteredInventory[filteredInventory.length - 1].MTTRTM;
            }
        }
    };
    return itemBase;
}());
var itemBalance = /** @class */ (function (_super) {
    __extends(itemBalance, _super);
    function itemBalance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.purchaseQuantity = 0;
        _this.finishedProductQuantity = 0;
        _this.type = 0; // 0 = balances, 1 = purchases, 2 = final product
        return _this;
    }
    itemBalance.prototype.setPurchases = function (aMIArray) {
        this.type = 1;
        if (null != aMIArray && undefined != aMIArray) {
            var runningTotal = 0;
            for (var i = 0; i < aMIArray.length; i++) {
                if (undefined != aMIArray[i].MTTRQT) {
                    var tempNumber = Number(aMIArray[i].MTTRQT);
                    if (false == isNaN(tempNumber)) {
                        runningTotal += tempNumber;
                    }
                }
            }
            this.purchaseQuantity += runningTotal;
        }
    };
    itemBalance.prototype.setFinishedProduct = function (aMIArray) {
        this.type = 2;
        if (null != aMIArray && undefined != aMIArray) {
            var runningTotal = 0;
            for (var i = 0; i < aMIArray.length; i++) {
                if (undefined != aMIArray[i].MTTRQT) {
                    var tempNumber = Number(aMIArray[i].MTTRQT);
                    if (false == isNaN(tempNumber)) {
                        runningTotal += tempNumber;
                    }
                }
            }
            this.finishedProductQuantity += runningTotal;
        }
    };
    return itemBalance;
}(itemBase));
var massBalanceDataClass = /** @class */ (function (_super) {
    __extends(massBalanceDataClass, _super);
    function massBalanceDataClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.aPositionFormula = "";
        _this.bPositionFormula = "";
        _this.cPositionFormula = "";
        _this.dPositionFormula = "";
        _this.childItemBalances = [];
        _this.ingredientsInInventory = [];
        _this.warehousesForDivision = [];
        _this.relatedItemNumbersWithValues = [];
        // 2.7.1.1
        _this.purchasesTransactions = [];
        // 2.7.3.2 - detail
        _this.productionDetail = [];
        // 2.7.3.2 - summary
        _this.productionSummary = [];
        // 2.7.3.2 - materials for finished goods detail
        _this.materialsForFinishedGoods = [];
        // 2.7.3.4
        _this.bulkSales = [];
        // 2.7.3.4
        _this.reclassification = [];
        // 2.7.4
        _this.ingredientContainedInSales = [];
        // the finished product in sales
        _this.finishedProductInSalesDetail = [];
        _this.finishedProductInSalesSummary = [];
        _this.itemsList = [];
        _this.itemsPackageConversion = [];
        return _this;
    }
    massBalanceDataClass.prototype.getItemPackageConversion = function (aItemNumber) {
        return (this.itemsPackageConversion.find(function (i) { return i.itemNumber === aItemNumber; }));
    };
    massBalanceDataClass.prototype.getIngredientPortionOfFinishedGoods = function (aItemNumber) {
        var result = 0;
        var productionDetails = this.productionDetail.filter(function (i) { return i.itemNumber === aItemNumber; });
        if (productionDetails) {
            var _loop_1 = function (i) {
                var currentInventoryItem = productionDetails[i];
                var currentOrderNumber = currentInventoryItem.orderNumber;
                var currentQuantity = currentInventoryItem.quantity;
                var productionPercentange = this_1.materialsForFinishedGoods.find(function (m) { return m.originOrderNumber === currentOrderNumber; });
                if (productionPercentange) {
                    var currentPortionOfOrder = productionPercentange.actualBlendPercentage;
                    result += (currentQuantity * currentPortionOfOrder);
                }
            };
            var this_1 = this;
            for (var i = 0; i < productionDetails.length; i++) {
                _loop_1(i);
            }
        }
        return (result);
    };
    massBalanceDataClass.prototype.getWIPUsedToMakeWip = function () {
        var result = 0;
        if (this.productionDetail.length > 0) {
            for (var i = 0; i < this.productionDetail.length; i++) {
                var currentProductionDetail = this.productionDetail[i];
                if (currentProductionDetail.itemType === "Z30") {
                    result += currentProductionDetail.quantity;
                }
            }
        }
        return (result);
    };
    // is the warehouse in our list of valid warehouses?
    massBalanceDataClass.prototype.isWarehouseValid = function (aWarehouse) {
        var result = false;
        if (this.warehousesForDivision.length > 0) {
            for (var i = 0; i < this.warehousesForDivision.length; i++) {
                if (this.warehousesForDivision[i] === aWarehouse) {
                    result = true;
                    break;
                }
            }
        }
        return (result);
    };
    massBalanceDataClass.prototype.getListOfItemsInProduction = function () {
        var result = [];
        for (var i = 0; i < this.productionDetail.length; i++) {
            var currentProductionRecord = this.productionDetail[i];
            if (-1 == result.indexOf(currentProductionRecord.itemNumber)) {
                result.push(currentProductionRecord.itemNumber);
            }
        }
        return (result);
    };
    massBalanceDataClass.prototype.getListOfItems = function () {
        var result = [];
        if (this.childItemBalances.length > 0) {
            for (var i = 0; i < this.childItemBalances.length; i++) {
                if (undefined != this.childItemBalances[i].itemNumber) {
                    result.push(this.childItemBalances[i].itemNumber);
                }
            }
        }
        //debugger;
        if (this.ingredientsInInventory.length > 0) {
            for (var i = 0; i < this.ingredientsInInventory.length; i++) {
                if (undefined != this.ingredientsInInventory[i].itemNumber) {
                    result.push(this.ingredientsInInventory[i].itemNumber);
                    if (this.ingredientsInInventory[i].finishedItemsConsolidated && this.ingredientsInInventory[i].finishedItemsConsolidated.length > 0) {
                        for (var j = 0; j < this.ingredientsInInventory[i].finishedItemsConsolidated.length; j++) {
                            if (undefined != this.ingredientsInInventory[i].finishedItemsConsolidated[j].itemNumber) {
                                result.push(this.ingredientsInInventory[i].finishedItemsConsolidated[j].itemNumber);
                            }
                        }
                    }
                }
            }
        }
        if (this.purchasesTransactions.length > 0) {
            for (var i = 0; i < this.purchasesTransactions.length; i++) {
                if (undefined != this.purchasesTransactions[i].itemNumber) {
                    result.push(this.purchasesTransactions[i].itemNumber);
                }
            }
        }
        if (this.productionDetail.length > 0) {
            for (var i = 0; i < this.productionDetail.length; i++) {
                if (undefined != this.productionDetail[i].itemNumber) {
                    result.push(this.productionDetail[i].itemNumber);
                }
            }
        }
        if (this.bulkSales.length > 0) {
            for (var i = 0; i < this.bulkSales.length; i++) {
                if (undefined != this.bulkSales[i].itemNumber) {
                    result.push(this.bulkSales[i].itemNumber);
                }
            }
        }
        if (this.reclassification.length > 0) {
            for (var i = 0; i < this.reclassification.length; i++) {
                if (undefined != this.reclassification[i].itemNumber) {
                    result.push(this.reclassification[i].itemNumber);
                }
            }
        }
        if (this.ingredientContainedInSales.length > 0) {
            for (var i = 0; i < this.ingredientContainedInSales.length; i++) {
                if (undefined != this.ingredientContainedInSales[i].itemNumber) {
                    result.push(this.ingredientContainedInSales[i].itemNumber);
                }
            }
        }
        return (result.filter(function (item, pos) { return result.indexOf(item) == pos; }));
    };
    massBalanceDataClass.prototype.getItemDescription = function (aItemNumber) {
        var result = "";
        if (this.itemsList.length > 0) {
            for (var i = 0; i < this.itemsList.length; i++) {
                if (this.itemsList[i].itemNumber === aItemNumber) {
                    result = this.itemsList[i].itemDescription;
                    break;
                }
            }
        }
        return (result);
    };
    massBalanceDataClass.prototype.setItemDescriptions = function () {
        var _this = this;
        if (this.childItemBalances.length > 0) {
            var _loop_2 = function (i) {
                if (undefined != this_2.childItemBalances[i].itemNumber) {
                    var item = this_2.itemsList.find(function (itm) { return itm.itemNumber === _this.childItemBalances[i].itemNumber; });
                    if (item) {
                        this_2.childItemBalances[i].itemDescription = item.itemDescription;
                        this_2.childItemBalances[i].itemType = item.itemType;
                    }
                }
            };
            var this_2 = this;
            for (var i = 0; i < this.childItemBalances.length; i++) {
                _loop_2(i);
            }
        }
        if (this.ingredientsInInventory.length > 0) {
            var _loop_3 = function (i) {
                if (undefined != this_3.ingredientsInInventory[i].itemNumber) {
                    this_3.ingredientsInInventory[i].itemDescription = this_3.getItemDescription(this_3.ingredientsInInventory[i].itemNumber);
                    if (this_3.ingredientsInInventory[i].finishedItemsConsolidated && this_3.ingredientsInInventory[i].finishedItemsConsolidated.length > 0) {
                        var _loop_10 = function (j) {
                            if (undefined != this_3.ingredientsInInventory[i].finishedItemsConsolidated[j]) {
                                var item = this_3.itemsList.find(function (itm) { return itm.itemNumber === _this.ingredientsInInventory[i].finishedItemsConsolidated[j].itemNumber; });
                                if (item) {
                                    this_3.ingredientsInInventory[i].finishedItemsConsolidated[j].itemDescription = item.itemDescription;
                                    this_3.ingredientsInInventory[i].finishedItemsConsolidated[j].itemType = item.itemType;
                                }
                            }
                        };
                        for (var j = 0; j < this_3.ingredientsInInventory[i].finishedItemsConsolidated.length; j++) {
                            _loop_10(j);
                        }
                    }
                }
            };
            var this_3 = this;
            for (var i = 0; i < this.ingredientsInInventory.length; i++) {
                _loop_3(i);
            }
        }
        if (this.purchasesTransactions.length > 0) {
            var _loop_4 = function (i) {
                if (undefined != this_4.purchasesTransactions[i].itemNumber) {
                    var item = this_4.itemsList.find(function (itm) { return itm.itemNumber === _this.purchasesTransactions[i].itemNumber; });
                    if (item) {
                        this_4.purchasesTransactions[i].itemDescription = item.itemDescription;
                        this_4.purchasesTransactions[i].itemType = item.itemType;
                    }
                }
            };
            var this_4 = this;
            for (var i = 0; i < this.purchasesTransactions.length; i++) {
                _loop_4(i);
            }
        }
        if (this.productionDetail.length > 0) {
            var _loop_5 = function (i) {
                if (undefined != this_5.productionDetail[i].itemNumber) {
                    var item = this_5.itemsList.find(function (itm) { return itm.itemNumber === _this.productionDetail[i].itemNumber; });
                    if (item) {
                        this_5.productionDetail[i].itemDescription = item.itemDescription;
                        this_5.productionDetail[i].itemType = item.itemType;
                    }
                }
            };
            var this_5 = this;
            for (var i = 0; i < this.productionDetail.length; i++) {
                _loop_5(i);
            }
        }
        if (this.bulkSales.length > 0) {
            var _loop_6 = function (i) {
                if (undefined != this_6.bulkSales[i].itemNumber) {
                    var item = this_6.itemsList.find(function (itm) { return itm.itemNumber === _this.bulkSales[i].itemNumber; });
                    if (item) {
                        this_6.bulkSales[i].itemDescription = item.itemDescription;
                        this_6.bulkSales[i].itemType = item.itemType;
                    }
                }
            };
            var this_6 = this;
            for (var i = 0; i < this.bulkSales.length; i++) {
                _loop_6(i);
            }
        }
        if (this.reclassification.length > 0) {
            var _loop_7 = function (i) {
                if (undefined != this_7.reclassification[i].itemNumber) {
                    var item = this_7.itemsList.find(function (itm) { return itm.itemNumber === _this.reclassification[i].itemNumber; });
                    if (item) {
                        this_7.reclassification[i].itemDescription = item.itemDescription;
                        this_7.reclassification[i].itemType = item.itemType;
                    }
                }
            };
            var this_7 = this;
            for (var i = 0; i < this.reclassification.length; i++) {
                _loop_7(i);
            }
        }
        if (this.ingredientContainedInSales.length > 0) {
            var _loop_8 = function (i) {
                if (undefined != this_8.ingredientContainedInSales[i].itemNumber) {
                    var item = this_8.itemsList.find(function (itm) { return itm.itemNumber === _this.ingredientContainedInSales[i].itemNumber; });
                    if (item) {
                        this_8.ingredientContainedInSales[i].itemDescription = item.itemDescription;
                        this_8.ingredientContainedInSales[i].itemType = item.itemType;
                    }
                }
            };
            var this_8 = this;
            for (var i = 0; i < this.ingredientContainedInSales.length; i++) {
                _loop_8(i);
            }
        }
        if (this.materialsForFinishedGoods.length > 0) {
            var _loop_9 = function (i) {
                if (undefined != this_9.materialsForFinishedGoods[i].itemNumber) {
                    var item = this_9.itemsList.find(function (itm) { return itm.itemNumber === _this.materialsForFinishedGoods[i].itemNumber; });
                    if (item) {
                        this_9.materialsForFinishedGoods[i].itemDescription = item.itemDescription;
                    }
                }
            };
            var this_9 = this;
            for (var i = 0; i < this.materialsForFinishedGoods.length; i++) {
                _loop_9(i);
            }
        }
    };
    massBalanceDataClass.prototype.setItemDescriptionsFinishedProduct = function () {
        var _this = this;
        if (this.finishedProductInSalesSummary.length > 0) {
            var _loop_11 = function (i) {
                if (undefined != this_10.finishedProductInSalesSummary[i].itemNumber) {
                    var item = this_10.itemsList.find(function (itm) { return itm.itemNumber === _this.finishedProductInSalesSummary[i].itemNumber; });
                    if (item) {
                        this_10.finishedProductInSalesSummary[i].itemDescription = item.itemDescription;
                    }
                }
            };
            var this_10 = this;
            for (var i = 0; i < this.finishedProductInSalesSummary.length; i++) {
                _loop_11(i);
            }
        }
        if (this.finishedProductInSalesDetail.length > 0) {
            var _loop_12 = function (i) {
                if (undefined != this_11.finishedProductInSalesDetail[i].itemNumber) {
                    var item = this_11.itemsList.find(function (itm) { return itm.itemNumber === _this.finishedProductInSalesDetail[i].itemNumber; });
                    if (item) {
                        this_11.finishedProductInSalesDetail[i].itemDescription = item.itemDescription;
                    }
                }
            };
            var this_11 = this;
            for (var i = 0; i < this.finishedProductInSalesDetail.length; i++) {
                _loop_12(i);
            }
        }
    };
    massBalanceDataClass.prototype.setItemDescriptionsForProductionSummary = function () {
        var _this = this;
        if (this.productionSummary.length > 0) {
            var _loop_13 = function (i) {
                if (undefined != this_12.productionSummary[i].itemNumber) {
                    var item = this_12.itemsList.find(function (itm) { return itm.itemNumber === _this.productionSummary[i].itemNumber; });
                    if (item) {
                        this_12.productionSummary[i].itemDescription = item.itemDescription;
                        this_12.productionSummary[i].itemType = item.itemType;
                    }
                }
            };
            var this_12 = this;
            for (var i = 0; i < this.productionSummary.length; i++) {
                _loop_13(i);
            }
        }
    };
    massBalanceDataClass.prototype.addChildItemBalance = function (aMIArray, aItemNumber) {
        var result = null;
        if (null != aMIArray && undefined != aMIArray && aMIArray.length > 0) {
            result = new itemBalance();
            result.itemNumber = aItemNumber;
            result.setOpenClosingBalances(aMIArray);
            this.childItemBalances.push(result);
        }
        return (result);
    };
    massBalanceDataClass.prototype.getChildItemCount = function () {
        var result = 0;
        if (null != this.childItemBalances && undefined != this.childItemBalances) {
            result = this.childItemBalances.length;
        }
        return (result);
    };
    massBalanceDataClass.prototype.getTotalOpeningBalance = function () {
        return (Number(this.openingBalance + this.getChildrenTotalOpeningBalance()));
    };
    massBalanceDataClass.prototype.getChildrenTotalOpeningBalance = function () {
        var result = 0;
        if (this.getChildItemCount() > 0) {
            for (var i = 0; i < this.getChildItemCount(); i++) {
                if (this.childItemBalances[i].type == 0) {
                    result += Number(this.childItemBalances[i].openingBalance);
                }
            }
        }
        return (result);
    };
    massBalanceDataClass.prototype.getTotalClosingBalance = function () {
        return (this.closingBalance + this.getChildrenTotalClosingBalance());
    };
    massBalanceDataClass.prototype.getChildrenTotalClosingBalance = function () {
        var result = 0;
        if (this.getChildItemCount() > 0) {
            for (var i = 0; i < this.getChildItemCount(); i++) {
                if (this.childItemBalances[i].type == 0) {
                    result += Number(this.childItemBalances[i].closingBalance);
                }
            }
        }
        return (result);
    };
    massBalanceDataClass.prototype.getChildrenPurchasesTotal = function () {
        var result = 0;
        if (this.purchasesTransactions.length > 0) {
            for (var i = 0; i < this.purchasesTransactions.length; i++) {
                result += Number(this.purchasesTransactions[i].quantity);
            }
        }
        return (result);
    };
    massBalanceDataClass.prototype.getChildrenFinishedProductTotal = function () {
        var result = 0;
        if (this.getChildItemCount() > 0) {
            for (var i = 0; i < this.getChildItemCount(); i++) {
                if (this.childItemBalances[i].type == 2) {
                    result += Number(this.childItemBalances[i].finishedProductQuantity);
                }
            }
        }
        return (result);
    };
    return massBalanceDataClass;
}(itemBalance));
var rowResult = /** @class */ (function () {
    function rowResult() {
        this.rows = [];
        this.mergeCells = [];
        this.startRow = 0;
    }
    rowResult.prototype.getEndRow = function () {
        var result = 0;
        if (null != this.rows && undefined != this.rows) {
            result = this.rows.length + this.startRow;
        }
        return (result);
    };
    return rowResult;
}());
var inventory = /** @class */ (function () {
    function inventory() {
        this.orderNumbers = [];
        // this is a list regardless of the order number
        this.finishedItemsConsolidated = [];
    }
    inventory.prototype.addOrderNumbers = function (aAPIResults) {
        if (null != aAPIResults && aAPIResults.length > 0) {
            for (var i = 0; i < aAPIResults.length; i++) {
                var order = {
                    itemNumber: aAPIResults[i].MTITNO,
                    orderNumber: aAPIResults[i].MTRIDN,
                    finishedItems: []
                };
                this.orderNumbers.push(order);
            }
        }
    };
    inventory.prototype.addManufacturingOrderNumbers = function (aOrder, aAPIResults) {
        if (null != aAPIResults && aAPIResults.length > 0) {
            for (var i = 0; i < aAPIResults.length; i++) {
                var item = new inventoryManufactureItems();
                item.manufacturingOrderNumber = aAPIResults[i].VHMFNO;
                item.itemNumber = aAPIResults[i].VHITNO;
                if (aAPIResults[i].VHMAQT) {
                    item.materialQuantity = Number(aAPIResults[i].VHMAQT);
                    if (Number.isNaN(item.materialQuantity)) {
                        item.materialQuantity = 0;
                    }
                }
                this.finishedItemsConsolidated.push(item);
                aOrder.finishedItems.push(item);
            }
        }
    };
    return inventory;
}());
var inventoryOrders = /** @class */ (function () {
    function inventoryOrders() {
    }
    return inventoryOrders;
}());
var inventoryManufactureItems = /** @class */ (function (_super) {
    __extends(inventoryManufactureItems, _super);
    function inventoryManufactureItems() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.manufacturingOrderNumber = "";
        _this.materialQuantity = 0;
        _this.transactions = [];
        return _this;
    }
    return inventoryManufactureItems;
}(itemBase));
var inventoryManufactureItemsTransaction = /** @class */ (function (_super) {
    __extends(inventoryManufactureItemsTransaction, _super);
    function inventoryManufactureItemsTransaction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.quantity = 0;
        // populate after the fact
        _this.orderNumber = "";
        // this is the conversion to gallons
        _this.converstionFactor = 0;
        _this.originalTransactionQuantity = 0;
        _this.originalOpeningBalance = 0;
        _this.originalClosingBalance = 0;
        return _this;
    }
    inventoryManufactureItemsTransaction.prototype.set = function (aMIRecord) {
        if (null != aMIRecord && aMIRecord != undefined) {
            this.itemNumber = aMIRecord.MTITNO;
            this.transactionDate = aMIRecord.MTTRDT;
            if (undefined != aMIRecord.MTTRQT) {
                this.quantity = Number(aMIRecord.MTTRQT);
            }
        }
    };
    return inventoryManufactureItemsTransaction;
}(itemBase));
var material = /** @class */ (function () {
    function material() {
        this.itemNumber = "";
        this.itemDescription = "";
        this.reportedQuantity = 0; // VMRPQA
        this.moNumber = "";
        this.MOFinishedGoodsQuantity = 0;
        this.actualBlendPercentage = 0;
        this.lotNumber = "";
        // from the original source order number
        this.originOrderNumber = "";
        this.originQuantity = 0;
        //public getPortionOfCompletedOrder() {
        //    if (this.MOFinishedGoodsQuantity != 0) {
        //        return (this.reportedQuantity / this.MOFinishedGoodsQuantity);
        //    }
        //    return (0);
        //}
    }
    //public originLotNumber: string = "";
    material.prototype.set = function (aMIRecord) {
        if (aMIRecord) {
            this.itemNumber = aMIRecord.VMMTNO;
            this.moNumber = aMIRecord.VMMFNO;
            this.reportedQuantity = aMIRecord.VMRPQA;
            this.lotNumber = aMIRecord.VMBANO;
        }
    };
    material.prototype.setMITTRA = function (aMIRecord) {
        if (aMIRecord) {
            this.itemNumber = aMIRecord.MTITNO;
            this.moNumber = aMIRecord.MTRIDN;
            this.reportedQuantity = aMIRecord.MTTRQT;
            this.lotNumber = aMIRecord.MTBANO;
        }
    };
    material.create = function (aMIRecord) {
        var result = null;
        if (aMIRecord) {
            result = new material();
            result.set(aMIRecord);
        }
        return (result);
    };
    material.createMITTRA = function (aMIRecord) {
        var result = null;
        if (aMIRecord) {
            result = new material();
            result.setMITTRA(aMIRecord);
        }
        return (result);
    };
    return material;
}());
var finishedProductInSales = /** @class */ (function () {
    function finishedProductInSales() {
        this.itemNumber = "";
        this.itemDescription = "";
        this.quantity = 0;
        this.ingredientPercentage = 0;
        this.originalQuantity = 0;
        this.conversionValue = 0;
    }
    finishedProductInSales.prototype.set = function (aMIRecord) {
        if (aMIRecord) {
            this.itemNumber = aMIRecord.MTITNO;
            this.quantity = (Number(aMIRecord.MTTRQT) * -1);
        }
    };
    finishedProductInSales.create = function (aMIRecord) {
        var result = null;
        if (aMIRecord) {
            result = new finishedProductInSales();
            result.set(aMIRecord);
        }
        return (result);
    };
    return finishedProductInSales;
}());
var MMS023MI_GetItemPack_Response = /** @class */ (function () {
    function MMS023MI_GetItemPack_Response() {
        this.itemNumber = "";
        this.quantity = 0;
    }
    MMS023MI_GetItemPack_Response.prototype.set = function (aMIRecord) {
        if (aMIRecord) {
            this.itemNumber = aMIRecord.ITNO;
            this.quantity = Number(aMIRecord.PKFQ);
        }
    };
    MMS023MI_GetItemPack_Response.create = function (aMIRecord) {
        var result = null;
        if (aMIRecord) {
            result = new MMS023MI_GetItemPack_Response();
            result.set(aMIRecord);
        }
        return (result);
    };
    return MMS023MI_GetItemPack_Response;
}());
//# sourceMappingURL=massBalance.js.map
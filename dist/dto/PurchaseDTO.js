"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Purchase_1 = require("../model/Purchase");
class PurchaseDTO {
    constructor(name, order_id, order_status, order_date, shipped_date) {
        this.name = name;
        this.order_id = order_id;
        this.order_status = order_status;
        this.order_date = order_date;
        this.shipped_date = shipped_date;
    }
}
exports.PurchaseDTO = PurchaseDTO;
function convertToPurchaseArray(input) {
    const newPurchase = new Purchase_1.Purchase(input.name, input.order_id, input.order_status, input.order_date, input.shipped_date);
    return newPurchase;
}
exports.convertToPurchaseArray = convertToPurchaseArray;

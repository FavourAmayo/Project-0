"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Purchase {
    constructor(name, order_id, order_status, order_date, shipped_date) {
        this.name = name;
        this.order_id = order_id;
        this.order_status = order_status;
        this.order_date = order_date;
        this.shipped_date = shipped_date;
    }
}
exports.Purchase = Purchase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(order_id, user_id, order_status, order_date, shipped_date) {
        this.order_id = order_id;
        this.user_id = user_id;
        this.order_status = order_status;
        this.order_date = order_date;
        this.shipped_date = shipped_date;
    }
}
exports.Order = Order;

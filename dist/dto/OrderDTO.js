"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("../model/Order");
class OrderDTO {
    constructor(order_id, user_id, order_status, order_date, shipped_date) {
        this.order_id = order_id;
        this.user_id = user_id;
        this.order_status = order_status;
        this.order_date = order_date;
        this.shipped_date = shipped_date;
    }
}
exports.OrderDTO = OrderDTO;
function convertToOrderArray(input) {
    const newOrder = new Order_1.Order(input.order_id, input.user_id, input.order_status, input.order_date, input.shipped_date);
    return newOrder;
}
exports.convertToOrderArray = convertToOrderArray;

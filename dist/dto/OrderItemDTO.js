"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrderItem_1 = require("../model/OrderItem");
class OrderItemDTO {
    constructor(item_id, order_id, product_id, quantity, list_price, name, description) {
        this.item_id = item_id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.list_price = list_price;
        this.name = name;
        this.description = description;
    }
}
exports.OrderItemDTO = OrderItemDTO;
function convertToOrderItemArray(input) {
    const newOrderItem = new OrderItem_1.OrderItem(input.item_id, input.order_id, input.product_id, input.quantity, input.list_price, input.name, input.description);
    return newOrderItem;
}
exports.convertToOrderItemArray = convertToOrderItemArray;

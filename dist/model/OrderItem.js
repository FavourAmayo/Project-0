"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(item_id, product_id, quantity, list_price, name, description) {
        this.item_id = item_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.list_price = list_price;
        this.name = name;
        this.description = description;
    }
}
exports.OrderItem = OrderItem;

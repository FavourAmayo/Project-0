"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderItem_1 = require("../model/OrderItem");
const _1 = require("./");
const OrderItemDTO_1 = require("../dto/OrderItemDTO");
function findAllOrderItems() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.order_items");
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(OrderItemDTO_1.convertToOrderItemArray);
            // console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findAllOrderItems = findAllOrderItems;
function saveOneOrderItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newOrderItem = new OrderItem_1.OrderItem(0, 0, 0, 0, "", "");
        try {
            client = yield _1.pool.connect();
            //insert paper into table and retrieve the generated id (optional)
            const result = yield client.query("INSERT INTO order_items(item_id, product_id, quantity, list_price, name, description) VALUES($1,$2,$3,$4,$5,$6) RETURNING item_id;", [
                input.item_id,
                input.product_id,
                input.quantity,
                input.list_price,
                input.name,
                input.description,
            ]);
            let OrderItemId = result.rows[0].item_id; // try console.log-ing result.rows to see why we access the id this way
            // console.table(result.rows);
            newOrderItem = input;
            newOrderItem.item_id = OrderItemId;
            return newOrderItem;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return newOrderItem;
    });
}
exports.saveOneOrderItem = saveOneOrderItem;
function findOrderItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.order_items WHERE item_id = $1", [input]);
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(OrderItemDTO_1.convertToOrderItemArray);
            // console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findOrderItem = findOrderItem;
function findPrice(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.order_items WHERE item_id = $1", [input]);
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(OrderItemDTO_1.convertToOrderItemArray);
            // console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findPrice = findPrice;
function filterByPrice(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.order_items WHERE list_price >= $1", [input]);
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(OrderItemDTO_1.convertToOrderItemArray);
            // console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.filterByPrice = filterByPrice;
function updateOneOrderItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let updatedOrderItem = new OrderItem_1.OrderItem(0, 0, 0, 0, "", "");
        try {
            client = yield _1.pool.connect();
            const result = yield client.query("UPDATE public.order_items SET product_id = $2, quantity = $3, list_price = $4, name = $5, description = $6 WHERE item_id = $1;", [
                input.item_id,
                input.product_id,
                input.quantity,
                input.list_price,
                input.name,
                input.description,
            ]);
            //let OrderItemId = result.rows[0].item_id; // try console.log-ing result.rows to see why we access the id this way
            // console.table(result.rows);
            //updatedOrderItem = input;
            //updatedOrderItem.item_id = OrderItemId;
            //return updatedOrderItem;
            return "successful";
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        //return updatedOrderItem;
        return "not successful";
    });
}
exports.updateOneOrderItem = updateOneOrderItem;

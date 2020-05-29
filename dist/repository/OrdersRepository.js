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
const Order_1 = require("../model/Order");
const _1 = require("./");
const OrderDTO_1 = require("../dto/OrderDTO");
function findAllOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.orders");
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(OrderDTO_1.convertToOrderArray);
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
exports.findAllOrders = findAllOrders;
function findOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.orders WHERE order_id = $1", [input]);
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(OrderDTO_1.convertToOrderArray);
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
exports.findOrder = findOrder;
function saveOneOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newOrder = new Order_1.Order(0, 0, "", "", "", 0);
        try {
            client = yield _1.pool.connect();
            //insert paper into table and retrieve the generated id (optional)
            const result = yield client.query("INSERT INTO orders(order_id, user_id, order_status, order_date, shipped_date, item_id) VALUES($1,$2,$3,$4, $5, $6) RETURNING order_id;", [
                input.order_id,
                input.user_id,
                input.order_status,
                input.order_date,
                input.shipped_date,
                input.item_id,
            ]);
            let OrderId = result.rows[0].order_id; // try console.log-ing result.rows to see why we access the id this way
            //console.table(result.rows);
            newOrder = input;
            newOrder.order_id = OrderId;
            return newOrder;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return newOrder;
    });
}
exports.saveOneOrder = saveOneOrder;
function updateOneOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let updatedOrder = new Order_1.Order(0, 0, "", "", "", 0);
        try {
            client = yield _1.pool.connect();
            //insert paper into table and retrieve the generated id (optional)
            const result = yield client.query("UPDATE orders SET user_id = $2, order_status = $3, order_date = $4, shipped_date = $5, item_id = $6 WHERE order_id = $1;", [
                input.order_id,
                input.user_id,
                input.order_status,
                input.order_date,
                input.shipped_date,
                input.item_id,
            ]);
            //let OrderId = result.rows[0].order_id; // try console.log-ing result.rows to see why we access the id this way
            // console.table(result.rows);
            //updatedOrder = input;
            //updatedOrder.order_id = OrderId;
            //return updatedOrder;
            return "successful";
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        //return updatedOrder;
        return "unsuccessful";
    });
}
exports.updateOneOrder = updateOneOrder;

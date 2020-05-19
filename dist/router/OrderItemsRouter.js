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
const express_1 = require("express");
const orderItemService = require("../service/OrderItemService");
const OrderItem_1 = require("../model/OrderItem");
exports.orderItemRouter = express_1.Router();
exports.orderItemRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield orderItemService.findAllOrderItems());
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
exports.orderItemRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield orderItemService.findOrderItem(req.params.id));
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
exports.orderItemRouter.get("/:id/price", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let found = yield orderItemService.findPrice(req.params.id);
        res.json({
            quantity: found[0].quantity,
            list_price: found[0].list_price,
            name: found[0].name,
            description: found[0].description,
        });
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
exports.orderItemRouter.get("/filter/:cost", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield orderItemService.filterByPrice(req.params.cost));
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
exports.orderItemRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { item_id, order_id, product_id, quantity, list_price, name, description, } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let orderItem = yield orderItemService.saveOneOrderItem(new OrderItem_1.OrderItem(item_id, order_id, product_id, quantity, list_price, name, description));
        // upon successful creation, send back a 201 (created)
        res.status(201).json(orderItem);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
exports.orderItemRouter.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { item_id, order_id, product_id, quantity, list_price, name, description, } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let orderItem = yield orderItemService.updateOneOrderItem(new OrderItem_1.OrderItem(item_id, order_id, product_id, quantity, list_price, name, description));
        // upon successful creation, send back a 201 (created)
        res.status(201).json({ message: orderItem });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));

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
const orderService = require("../service/OrderService");
const Order_1 = require("../model/Order");
exports.orderRouter = express_1.Router();
exports.orderRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield orderService.findAllOrders());
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
exports.orderRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield orderService.findOrder(req.params.id));
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
//this route requires input from the boy of an http request.
// in order for it to run properly, make sure you app.use() the body parser in index.ts
exports.orderRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { order_id, user_id, order_status, order_date, shipped_date, item_id, } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let order = yield orderService.saveOneOrder(new Order_1.Order(order_id, user_id, order_status, order_date, shipped_date, item_id));
        // upon successful creation, send back a 201 (created)
        res.status(201).json(order);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
exports.orderRouter.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { order_id, user_id, order_status, order_date, shipped_date, item_id, } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let order = yield orderService.updateOneOrder(new Order_1.Order(order_id, user_id, order_status, order_date, shipped_date, item_id));
        // upon successful creation, send back a 201 (created)
        res.status(201).json({ message: order });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const config_1 = require("./config/");
const UsersRouter_1 = require("./router/UsersRouter");
const OrdersRouter_1 = require("./router/OrdersRouter");
const OrderItemsRouter_1 = require("./router/OrderItemsRouter");
const PurchasesRouter_1 = require("./router/PurchasesRouter");
const bodyParser = require("body-parser");
const logging_middleware_1 = require("./middleware/logging-middleware");
const session_middleware_1 = require("./middleware/session-middleware");
const LogInRouter_1 = require("./router/LogInRouter");
exports.app = express();
var corsOptions = {
    origin: "*",
    credentials: true,
};
exports.app.use(bodyParser.json());
exports.app.use(cors(corsOptions));
exports.app.use(logging_middleware_1.loggingMiddleware);
exports.app.use(session_middleware_1.sessionMiddleware);
exports.app.use("/user", UsersRouter_1.userRouter);
exports.app.use("/order", OrdersRouter_1.orderRouter);
exports.app.use("/order-item", OrderItemsRouter_1.orderItemRouter);
exports.app.use("/purchases", PurchasesRouter_1.purchaseRouter);
exports.app.use("/auth", LogInRouter_1.loginRouter);
exports.app.listen(config_1.port, () => console.log(`Example app listening at http://localhost:${config_1.port}`));

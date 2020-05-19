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
//app.use(bodyParser.urlencoded({ extended: false }));
exports.app.use(cors(corsOptions));
exports.app.use(logging_middleware_1.loggingMiddleware);
exports.app.use(session_middleware_1.sessionMiddleware);
exports.app.use("/user", UsersRouter_1.userRouter);
exports.app.use("/order", OrdersRouter_1.orderRouter);
exports.app.use("/order-item", OrderItemsRouter_1.orderItemRouter);
exports.app.use("/purchases", PurchasesRouter_1.purchaseRouter);
exports.app.use("/auth", LogInRouter_1.loginRouter);
exports.app.listen(config_1.port, () => console.log(`Example app listening at http://localhost:${config_1.port}`));
// Generics in typescript - enforces a specific type
// gitignore the environment variables for your database. Put the variables in another file
//DBeaver instead of PGAdmin
// Create script file in DBeaver
//What is the structure of the code again, that is allowing you to serve this code to each other?
// Do I need a Data Transfer Object and Model?
// Can you explain how you are using sessions in your code?
// Why am I saving one user in the saveOneUser function in the UserRepository file?
// How to log in as more than one type of role?
// So when this goes to deployment, the javascript is going to be run? How come when I make the Javascript file, it doesn't go to the dist folder?
// Create a gitignore
/* Service layer for business logic. Controller layer is what is going to execute/called from user input. Database layer calls to the data */
/* CHECK creates a constraint on a column. EX: CHECK(paper_price > -1) */
/*
Do logging into a text file.
Can save your requests in Post Man
 */
/*
Do I need to do sql scripts
How many tests do I need
 */
/* Show code coverage. 1 or 2 tets per route */
/* Know the definiton of SQL. Know different types of sublanguages. Be confident and don't look around a lot. Look into the camera and talk confidently. Don't say "I think". Know different isolation levels and problems that would arise from them. Practice interviewing and speaking so you have a better chance at presenting your answers */
// ,
//  "include": ["**/*"]
// is my server.js suppposed to be in my dist folder?
/* Introduce yourself and introduce your project. Ask if there are any questions to finish off your project */
/* Why are my JS files in the src file instead of the dist file? */
/* Record of logging? */

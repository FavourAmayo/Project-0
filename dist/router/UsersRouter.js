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
const userService = require("../service/UserService");
const User_1 = require("../model/User");
exports.userRouter = express_1.Router();
exports.userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield userService.findAllUsers());
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
exports.userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield userService.findUser(req.params.id));
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
//this route requires input from the boy of an http request.
// in order for it to run properly, make sure you app.use() the body parser in index.ts
exports.userRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { user_id, name, email, password, phone, } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let user = yield userService.saveOneUser(new User_1.User(0, name, email, password, phone));
        // upon successful creation, send back a 201 (created)
        res.status(201).json(user);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
exports.userRouter.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { user_id, name, email, password, phone, } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let user = yield userService.updateOneUser(new User_1.User(user_id, name, email, password, phone));
        // upon successful creation, send back a 201 (created)
        res.status(201).json({ message: user });
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));

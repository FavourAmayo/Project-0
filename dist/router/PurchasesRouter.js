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
exports.purchaseRouter = express_1.Router();
exports.purchaseRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(await userService.findOrderedItems());
        res.json(yield userService.findOrderedItems());
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));

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
const OrdersRepository = require("../repository/OrdersRepository");
function findAllOrders() {
    return __awaiter(this, void 0, void 0, function* () {
        return OrdersRepository.findAllOrders();
    });
}
exports.findAllOrders = findAllOrders;
function saveOneOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrdersRepository.saveOneOrder(input);
    });
}
exports.saveOneOrder = saveOneOrder;
function findOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrdersRepository.findOrder(input);
    });
}
exports.findOrder = findOrder;
function updateOneOrder(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrdersRepository.updateOneOrder(input);
    });
}
exports.updateOneOrder = updateOneOrder;

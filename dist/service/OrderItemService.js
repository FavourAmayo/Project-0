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
const OrderItemsRepository = require("../repository/OrderItemRepository");
function findAllOrderItems() {
    return __awaiter(this, void 0, void 0, function* () {
        return OrderItemsRepository.findAllOrderItems();
    });
}
exports.findAllOrderItems = findAllOrderItems;
function saveOneOrderItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrderItemsRepository.saveOneOrderItem(input);
    });
}
exports.saveOneOrderItem = saveOneOrderItem;
function findOrderItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrderItemsRepository.findOrderItem(input);
    });
}
exports.findOrderItem = findOrderItem;
function findPrice(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrderItemsRepository.findPrice(input);
    });
}
exports.findPrice = findPrice;
function filterByPrice(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrderItemsRepository.filterByPrice(input);
    });
}
exports.filterByPrice = filterByPrice;
function updateOneOrderItem(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return OrderItemsRepository.updateOneOrderItem(input);
    });
}
exports.updateOneOrderItem = updateOneOrderItem;

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
const UsersRepository = require("../repository/UsersRepository");
function findAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return UsersRepository.findAllUsers();
    });
}
exports.findAllUsers = findAllUsers;
function saveOneUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return UsersRepository.saveOneUser(input);
    });
}
exports.saveOneUser = saveOneUser;
function findUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return UsersRepository.findUser(input);
    });
}
exports.findUser = findUser;
function updateOneUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        return UsersRepository.updateOneUser(input);
    });
}
exports.updateOneUser = updateOneUser;
function findOrderedItems() {
    return __awaiter(this, void 0, void 0, function* () {
        return UsersRepository.findOrderedItems();
    });
}
exports.findOrderedItems = findOrderedItems;

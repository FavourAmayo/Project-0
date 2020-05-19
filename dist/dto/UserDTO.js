"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../model/User");
class UserDTO {
    constructor(user_id, name, email, password, phone) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}
exports.UserDTO = UserDTO;
function convertToUserArray(input) {
    const newUser = new User_1.User(input.user_id, input.name, input.email, input.password, input.phone);
    return newUser;
}
exports.convertToUserArray = convertToUserArray;

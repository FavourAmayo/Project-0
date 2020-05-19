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
const User_1 = require("../model/User");
const _1 = require("./");
const UserDTO_1 = require("../dto/UserDTO");
const PurchaseDTO_1 = require("../dto/PurchaseDTO");
function findAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.users;");
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(UserDTO_1.convertToUserArray);
            // console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findAllUsers = findAllUsers;
function findUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT * FROM public.users WHERE user_id = $1", [input]);
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(UserDTO_1.convertToUserArray);
            //console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findUser = findUser;
function findOrderedItems() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT users.name, orders.order_id, orders.order_status, orders.order_date, orders.shipped_date FROM users INNER JOIN orders ON users.user_id = orders.user_id;");
            // console.table(results.rows);
            // console.log(results.rows);
            let output = results.rows.map(PurchaseDTO_1.convertToPurchaseArray);
            //console.log(output);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findOrderedItems = findOrderedItems;
function saveOneUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newUser = new User_1.User(0, "", "", "", "");
        let total = yield getTotal();
        total += 1;
        try {
            client = yield _1.pool.connect();
            //insert paper into table and retrieve the generated id (optional)
            const result = yield client.query("INSERT INTO public.users(user_id, name, email, password, phone) VALUES($1,$2,$3,$4, $5) RETURNING user_id;", [total, input.name, input.email, input.password, input.phone]);
            let UserId = result.rows[0].user_id; // try console.log-ing result.rows to see why we access the id this way
            // console.table(result.rows);
            newUser = input;
            newUser.user_id = UserId;
            return newUser;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return newUser;
    });
}
exports.saveOneUser = saveOneUser;
function updateOneUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        //let updatedUser = new User(0, "", "", "", "");
        try {
            client = yield _1.pool.connect();
            //insert paper into table and retrieve the generated id (optional)
            const result = yield client.query("UPDATE public.users SET name = $2, email=$3, password=$4, phone=$5 WHERE user_id = $1;", [input.user_id, input.name, input.email, input.password, input.phone]);
            //let UserId = result.rows[0].user_id; // try console.log-ing result.rows to see why we access the id this way
            //console.table(result.rows);
            //console.log(result.rows);
            //updatedUser = input;
            //updatedUser.user_id = UserId;
            //return updatedUser;
            return "successful";
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        //return updatedUser;
        return "not successful";
    });
}
exports.updateOneUser = updateOneUser;
function getTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield _1.pool.connect();
            const results = yield client.query("SELECT COUNT(user_id) FROM public.users;");
            // console.table(results.rows);
            // console.log(results.rows);
            let output = parseInt(results.rows[0].count);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return 0;
    });
}
exports.getTotal = getTotal;

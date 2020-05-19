"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogIn {
    constructor(session_id, username, password, session, admin) {
        this.session_id = session_id;
        this.username = username;
        this.password = password;
        this.session = session;
        this.admin = admin;
    }
}
exports.LogIn = LogIn;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session = require("express-session");
let MemoryStore = require("session-memory-store")(session);
//thi is the object that we will use to configure our session middleware
const sessionConfig = {
    resave: true,
    store: new MemoryStore(60 * 60 * 12),
    secret: "mySecret",
    saveUninitialized: true,
    cookie: { secure: false },
};
// we can call app.use() in index.ts with this object to enable the use of sessions
exports.sessionMiddleware = session(sessionConfig);

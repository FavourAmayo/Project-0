"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "workout",
    password: "null",
    port: 5432,
});

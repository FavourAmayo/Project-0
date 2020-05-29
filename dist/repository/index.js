"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: "postgres",
    host: "database-1.ch4fpdxcfwkt.us-east-2.rds.amazonaws.com",
    database: "workout",
    password: "gettingData5",
    port: 5432,
});

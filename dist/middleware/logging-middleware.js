"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loggingMiddleware(req, res, next) {
    console.log(`Request url is \'${req.url}\' and Request Method is ${req.method}`);
    //calls the next middleware function
    next();
}
exports.loggingMiddleware = loggingMiddleware;

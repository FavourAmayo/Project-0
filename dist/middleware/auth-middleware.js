"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Authentication and Authorization Middleware
exports.auth = function (req, res, next) {
    if (req.session && req.session.user === "logan" && req.session.admin) {
        return next();
    }
    else {
        return res.sendStatus(401);
    }
};

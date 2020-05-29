"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LogIn_1 = require("../model/LogIn");
// This router repsresents the user "logging in" to your app
// it is over-simplified by a lot since we do not actually have users in our db or in our models
// for your projects you will probably want to acutally add some users
exports.loginRouter = express_1.Router();
let admin = new LogIn_1.LogIn("", "", "", null, false);
// Authentication and Authorization Middleware
let auth = (req, res, next) => {
    if (admin.session && admin.username === "logan" && admin.admin) {
        return next();
    }
    else {
        return res.sendStatus(401);
    }
};
//Typically login in is done using a post request
exports.loginRouter.post("/login", (req, res, next) => {
    if (req.session) {
        if (!req.body.username || !req.body.password) {
            res.end("login failed");
        }
        else {
            //usually you would set the data of the user to the session
            req.session.user = req.body.username;
            req.session.admin = false;
            admin.admin = req.session.admin;
            admin.password = req.session.password;
            admin.session = req.session;
            admin.session_id = req.sessionID;
            admin.username = req.session.user;
            req.session.save((err) => {
                res.end("logged in successfully!");
            });
        }
    }
});
//Admin login
exports.loginRouter.post("/admin-login", (req, res) => {
    if (req.session) {
        if (!req.body.username || !req.body.password) {
            res.end("login failed");
        }
        else if (req.body.username === "logan" ||
            req.body.password === "loganspassword") {
            req.session.user = req.body.username;
            req.session.admin = true;
            admin.admin = req.session.admin;
            admin.password = req.session.password;
            admin.session = req.session;
            admin.session_id = req.sessionID;
            admin.username = req.session.user;
            req.session.save((err) => {
                res.end("admin logged in successfully!");
            });
        }
    }
});
// Get content
exports.loginRouter.get("/content", auth, (req, res) => {
    res.send("You can only see if logged in as admin.");
});
// logout functionality
exports.loginRouter.get("/logout", (req, res, next) => {
    if (req.session) {
        // when you "logout" you are really just removing the data set by loggin in
        req.session.user = false;
        req.session.admin = false;
        admin = new LogIn_1.LogIn("", "", "", null, false);
        /* req.session.destroy((err) => {
          res.end("logged out!");
        }); */
    }
    res.end("logged out, yes!");
});
// this is just here for debugging purposes. It returns the info about the session
exports.loginRouter.get("/check", (req, res, next) => {
    res.json(req.session);
});

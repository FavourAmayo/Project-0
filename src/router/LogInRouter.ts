import { Router } from "express";
import { LogIn } from "../model/LogIn";

// This router repsresents the user "logging in" to your app
// it is over-simplified by a lot since we do not actually have users in our db or in our models
// for your projects you will probably want to acutally add some users

export const loginRouter = Router();

let admin: LogIn = new LogIn("", "", "", null, false);

// Authentication and Authorization Middleware
let auth: any = (req: any, res: any, next: any) => {
  if (admin.session && admin.username === "logan" && admin.admin) {
    return next();
  } else {
    return res.sendStatus(401);
  }
};

//Typically login in is done using a post request
loginRouter.post("/login", (req, res, next) => {
  if (req.session) {
    if (!req.body.username || !req.body.password) {
      res.end("login failed");
    } else {
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
loginRouter.post("/admin-login", (req, res) => {
  if (req.session) {
    if (!req.body.username || !req.body.password) {
      res.end("login failed");
    } else if (
      req.body.username === "logan" ||
      req.body.password === "loganspassword"
    ) {
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
loginRouter.get("/content", auth, (req, res) => {
  res.send("You can only see if logged in as admin.");
});

// logout functionality
loginRouter.get("/logout", (req, res, next) => {
  if (req.session) {
    // when you "logout" you are really just removing the data set by loggin in
    req.session.user = false;
    req.session.admin = false;
    admin = new LogIn("", "", "", null, false);
    /* req.session.destroy((err) => {
      res.end("logged out!");
    }); */
  }
  res.end("logged out, yes!");
});

// this is just here for debugging purposes. It returns the info about the session
loginRouter.get("/check", (req, res, next) => {
  res.json(req.session);
});

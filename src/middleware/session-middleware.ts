import * as session from "express-session";
let MemoryStore: any = require("session-memory-store")(session);

//thi is the object that we will use to configure our session middleware
const sessionConfig = {
  resave: true,
  store: new MemoryStore(60 * 60 * 12),
  secret: "mySecret",
  saveUninitialized: true,
  cookie: { secure: false },
};

// we can call app.use() in index.ts with this object to enable the use of sessions
export const sessionMiddleware = session(sessionConfig);

import { Router } from "express";
import * as userService from "../service/UserService";
import { User } from "../model/User";

export const userRouter = Router();

userRouter.get("/", async (req: any, res: any) => {
  try {
    res.json(await userService.findAllUsers());
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

userRouter.get("/:id", async (req: any, res: any) => {
  try {
    res.json(await userService.findUser(req.params.id));
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

//this route requires input from the boy of an http request.
// in order for it to run properly, make sure you app.use() the body parser in index.ts
userRouter.post("/", async (req: any, res: any) => {
  // the line below is getting information from the body of the request via destructuring
  let {
    user_id,
    name,
    email,
    password,
    phone,
  }: {
    user_id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
  } = req.body; //try outputting req.body to the console to see what it looks like
  try {
    let user: User = await userService.saveOneUser(
      new User(0, name, email, password, phone)
    );
    // upon successful creation, send back a 201 (created)
    res.status(201).json(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.put("/", async (req: any, res: any) => {
  // the line below is getting information from the body of the request via destructuring
  let {
    user_id,
    name,
    email,
    password,
    phone,
  }: {
    user_id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
  } = req.body; //try outputting req.body to the console to see what it looks like
  try {
    let user: string = await userService.updateOneUser(
      new User(user_id, name, email, password, phone)
    );
    // upon successful creation, send back a 201 (created)
    res.status(201).json({ message: user });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

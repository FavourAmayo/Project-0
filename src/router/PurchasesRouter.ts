import { Router } from "express";
import * as userService from "../service/UserService";
import { User } from "../model/User";

export const purchaseRouter = Router();

purchaseRouter.get("/", async (req: any, res: any) => {
  try {
    //console.log(await userService.findOrderedItems());
    res.json(await userService.findOrderedItems());
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

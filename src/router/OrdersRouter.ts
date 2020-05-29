import { Router } from "express";
import * as orderService from "../service/OrderService";
import { Order } from "../model/Order";

export const orderRouter = Router();

orderRouter.get("/", async (req: any, res: any) => {
  try {
    res.json(await orderService.findAllOrders());
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

orderRouter.get("/:id", async (req: any, res: any) => {
  try {
    res.json(await orderService.findOrder(req.params.id));
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

//this route requires input from the boy of an http request.
// in order for it to run properly, make sure you app.use() the body parser in index.ts
orderRouter.post("/", async (req: any, res: any) => {
  // the line below is getting information from the body of the request via destructuring
  let {
    order_id,
    user_id,
    order_status,
    order_date,
    shipped_date,
    item_id,
  }: {
    order_id: number;
    user_id: number;
    order_status: string;
    order_date: string;
    shipped_date: string;
    item_id: number;
  } = req.body; //try outputting req.body to the console to see what it looks like
  try {
    let order: Order = await orderService.saveOneOrder(
      new Order(
        order_id,
        user_id,
        order_status,
        order_date,
        shipped_date,
        item_id
      )
    );
    // upon successful creation, send back a 201 (created)
    res.status(201).json(order);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

orderRouter.put("/", async (req: any, res: any) => {
  // the line below is getting information from the body of the request via destructuring
  let {
    order_id,
    user_id,
    order_status,
    order_date,
    shipped_date,
    item_id,
  }: {
    order_id: number;
    user_id: number;
    order_status: string;
    order_date: string;
    shipped_date: string;
    item_id: number;
  } = req.body; //try outputting req.body to the console to see what it looks like
  try {
    let order: string = await orderService.updateOneOrder(
      new Order(
        order_id,
        user_id,
        order_status,
        order_date,
        shipped_date,
        item_id
      )
    );
    // upon successful creation, send back a 201 (created)
    res.status(201).json({ message: order });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

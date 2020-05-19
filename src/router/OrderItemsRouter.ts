import { Router } from "express";
import * as orderItemService from "../service/OrderItemService";
import { OrderItem } from "../model/OrderItem";

export const orderItemRouter = Router();

orderItemRouter.get("/", async (req: any, res: any) => {
  try {
    res.json(await orderItemService.findAllOrderItems());
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

orderItemRouter.get("/:id", async (req: any, res: any) => {
  try {
    res.json(await orderItemService.findOrderItem(req.params.id));
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

orderItemRouter.get("/:id/price", async (req: any, res: any) => {
  try {
    let found: OrderItem[] = await orderItemService.findPrice(req.params.id);
    res.json({
      quantity: found[0].quantity,
      list_price: found[0].list_price,
      name: found[0].name,
      description: found[0].description,
    });
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

orderItemRouter.get("/filter/:cost", async (req: any, res: any) => {
  try {
    res.json(await orderItemService.filterByPrice(req.params.cost));
  } catch (e) {
    // if something goes wrong, send back a 500 error and the error message
    res.status(500).send(e.message);
  }
});

orderItemRouter.post("/", async (req: any, res: any) => {
  // the line below is getting information from the body of the request via destructuring
  let {
    item_id,
    order_id,
    product_id,
    quantity,
    list_price,
    name,
    description,
  }: {
    item_id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    list_price: number;
    name: string;
    description: string;
  } = req.body; //try outputting req.body to the console to see what it looks like
  try {
    let orderItem: OrderItem = await orderItemService.saveOneOrderItem(
      new OrderItem(
        item_id,
        order_id,
        product_id,
        quantity,
        list_price,
        name,
        description
      )
    );
    // upon successful creation, send back a 201 (created)
    res.status(201).json(orderItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

orderItemRouter.put("/", async (req: any, res: any) => {
  // the line below is getting information from the body of the request via destructuring
  let {
    item_id,
    order_id,
    product_id,
    quantity,
    list_price,
    name,
    description,
  }: {
    item_id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    list_price: number;
    name: string;
    description: string;
  } = req.body; //try outputting req.body to the console to see what it looks like
  try {
    let orderItem: string = await orderItemService.updateOneOrderItem(
      new OrderItem(
        item_id,
        order_id,
        product_id,
        quantity,
        list_price,
        name,
        description
      )
    );
    // upon successful creation, send back a 201 (created)
    res.status(201).json({ message: orderItem });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

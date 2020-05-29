import { Order } from "../model/Order";
import { pool } from "./";
import { convertToOrderArray } from "../dto/OrderDTO";

export async function findAllOrders(): Promise<Order[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query("SELECT * FROM public.orders");
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToOrderArray);
    // console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function findOrder(input: any): Promise<Order[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query(
      "SELECT * FROM public.orders WHERE order_id = $1",
      [input]
    );
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToOrderArray);
    // console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function saveOneOrder(input: Order): Promise<Order> {
  let client;
  let newOrder = new Order(0, 0, "", "", "", 0);
  try {
    client = await pool.connect();
    //insert paper into table and retrieve the generated id (optional)
    const result = await client.query(
      "INSERT INTO orders(order_id, user_id, order_status, order_date, shipped_date, item_id) VALUES($1,$2,$3,$4, $5, $6) RETURNING order_id;",
      [
        input.order_id,
        input.user_id,
        input.order_status,
        input.order_date,
        input.shipped_date,
        input.item_id,
      ]
    );
    let OrderId = result.rows[0].order_id; // try console.log-ing result.rows to see why we access the id this way
    //console.table(result.rows);
    newOrder = input;
    newOrder.order_id = OrderId;
    return newOrder;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return newOrder;
}

export async function updateOneOrder(input: Order): Promise<string> {
  let client;
  let updatedOrder = new Order(0, 0, "", "", "", 0);
  try {
    client = await pool.connect();
    //insert paper into table and retrieve the generated id (optional)
    const result = await client.query(
      "UPDATE orders SET user_id = $2, order_status = $3, order_date = $4, shipped_date = $5, item_id = $6 WHERE order_id = $1;",
      [
        input.order_id,
        input.user_id,
        input.order_status,
        input.order_date,
        input.shipped_date,
        input.item_id,
      ]
    );
    //let OrderId = result.rows[0].order_id; // try console.log-ing result.rows to see why we access the id this way
    // console.table(result.rows);
    //updatedOrder = input;
    //updatedOrder.order_id = OrderId;
    //return updatedOrder;
    return "successful";
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  //return updatedOrder;
  return "unsuccessful";
}

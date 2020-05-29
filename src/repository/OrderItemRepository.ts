import { OrderItem } from "../model/OrderItem";
import { pool } from "./";
import { convertToOrderItemArray } from "../dto/OrderItemDTO";

export async function findAllOrderItems(): Promise<OrderItem[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query("SELECT * FROM public.order_items");
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToOrderItemArray);
    // console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function saveOneOrderItem(input: OrderItem): Promise<OrderItem> {
  let client;
  let newOrderItem = new OrderItem(0, 0, 0, 0, "", "");
  try {
    client = await pool.connect();
    //insert paper into table and retrieve the generated id (optional)
    const result = await client.query(
      "INSERT INTO order_items(item_id, product_id, quantity, list_price, name, description) VALUES($1,$2,$3,$4,$5,$6) RETURNING item_id;",
      [
        input.item_id,
        input.product_id,
        input.quantity,
        input.list_price,
        input.name,
        input.description,
      ]
    );
    let OrderItemId = result.rows[0].item_id; // try console.log-ing result.rows to see why we access the id this way
    // console.table(result.rows);
    newOrderItem = input;
    newOrderItem.item_id = OrderItemId;
    return newOrderItem;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return newOrderItem;
}

export async function findOrderItem(input: any): Promise<OrderItem[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query(
      "SELECT * FROM public.order_items WHERE item_id = $1",
      [input]
    );
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToOrderItemArray);
    // console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function findPrice(input: any): Promise<OrderItem[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query(
      "SELECT * FROM public.order_items WHERE item_id = $1",
      [input]
    );
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToOrderItemArray);
    // console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function filterByPrice(input: any): Promise<OrderItem[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query(
      "SELECT * FROM public.order_items WHERE list_price >= $1",
      [input]
    );
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToOrderItemArray);
    // console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function updateOneOrderItem(input: OrderItem): Promise<string> {
  let client;
  let updatedOrderItem = new OrderItem(0, 0, 0, 0, "", "");
  try {
    client = await pool.connect();
    const result = await client.query(
      "UPDATE public.order_items SET product_id = $2, quantity = $3, list_price = $4, name = $5, description = $6 WHERE item_id = $1;",
      [
        input.item_id,
        input.product_id,
        input.quantity,
        input.list_price,
        input.name,
        input.description,
      ]
    );
    //let OrderItemId = result.rows[0].item_id; // try console.log-ing result.rows to see why we access the id this way
    // console.table(result.rows);
    //updatedOrderItem = input;
    //updatedOrderItem.item_id = OrderItemId;
    //return updatedOrderItem;
    return "successful";
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  //return updatedOrderItem;
  return "not successful";
}

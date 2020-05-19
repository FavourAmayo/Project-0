import { User } from "../model/User";
import { Purchase } from "../model/Purchase";
import { pool } from "./";
import { convertToUserArray } from "../dto/UserDTO";
import { convertToPurchaseArray } from "../dto/PurchaseDTO";

export async function findAllUsers(): Promise<User[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query("SELECT * FROM public.users;");
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToUserArray);
    // console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function findUser(input: any): Promise<User[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query(
      "SELECT * FROM public.users WHERE user_id = $1",
      [input]
    );
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToUserArray);
    //console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function findOrderedItems(): Promise<Purchase[]> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query(
      "SELECT users.name, orders.order_id, orders.order_status, orders.order_date, orders.shipped_date FROM users INNER JOIN orders ON users.user_id = orders.user_id;"
    );
    // console.table(results.rows);
    // console.log(results.rows);
    let output = results.rows.map(convertToPurchaseArray);
    //console.log(output);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return [];
}

export async function saveOneUser(input: User): Promise<User> {
  let client;
  let newUser = new User(0, "", "", "", "");
  let total = await getTotal();
  total += 1;
  try {
    client = await pool.connect();
    //insert paper into table and retrieve the generated id (optional)
    const result = await client.query(
      "INSERT INTO public.users(user_id, name, email, password, phone) VALUES($1,$2,$3,$4, $5) RETURNING user_id;",
      [total, input.name, input.email, input.password, input.phone]
    );
    let UserId = result.rows[0].user_id; // try console.log-ing result.rows to see why we access the id this way
    // console.table(result.rows);
    newUser = input;
    newUser.user_id = UserId;
    return newUser;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return newUser;
}

export async function updateOneUser(input: User): Promise<string> {
  let client;
  //let updatedUser = new User(0, "", "", "", "");
  try {
    client = await pool.connect();
    //insert paper into table and retrieve the generated id (optional)
    const result = await client.query(
      "UPDATE public.users SET name = $2, email=$3, password=$4, phone=$5 WHERE user_id = $1;",
      [input.user_id, input.name, input.email, input.password, input.phone]
    );
    //let UserId = result.rows[0].user_id; // try console.log-ing result.rows to see why we access the id this way
    //console.table(result.rows);
    //console.log(result.rows);
    //updatedUser = input;
    //updatedUser.user_id = UserId;
    //return updatedUser;
    return "successful";
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  //return updatedUser;
  return "not successful";
}

export async function getTotal(): Promise<number> {
  let client;
  try {
    client = await pool.connect();
    const results = await client.query(
      "SELECT COUNT(user_id) FROM public.users;"
    );
    // console.table(results.rows);
    // console.log(results.rows);
    let output = parseInt(results.rows[0].count);
    return output;
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
  return 0;
}

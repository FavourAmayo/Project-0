import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "workout",
  password: "null",
  port: 5432,
});

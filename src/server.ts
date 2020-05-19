import * as express from "express";
import * as cors from "cors";
import { port } from "./config/";
import { userRouter } from "./router/UsersRouter";
import { orderRouter } from "./router/OrdersRouter";
import { orderItemRouter } from "./router/OrderItemsRouter";
import { purchaseRouter } from "./router/PurchasesRouter";
import * as bodyParser from "body-parser";
import { loggingMiddleware } from "./middleware/logging-middleware";
import { sessionMiddleware } from "./middleware/session-middleware";
import { loginRouter } from "./router/LogInRouter";

export const app = express();
var corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(loggingMiddleware);
app.use(sessionMiddleware);

app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/order-item", orderItemRouter);
app.use("/purchases", purchaseRouter);
app.use("/auth", loginRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

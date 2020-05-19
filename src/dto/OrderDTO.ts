import { Order } from "../model/Order";

export class OrderDTO {
  order_id: number;
  user_id: number;
  order_status: string;
  order_date: string;
  shipped_date: string;
  constructor(
    order_id: number,
    user_id: number,
    order_status: string,
    order_date: string,
    shipped_date: string
  ) {
    this.order_id = order_id;
    this.user_id = user_id;
    this.order_status = order_status;
    this.order_date = order_date;
    this.shipped_date = shipped_date;
  }
}

export function convertToOrderArray(input: OrderDTO): Order {
  const newOrder = new Order(
    input.order_id,
    input.user_id,
    input.order_status,
    input.order_date,
    input.shipped_date
  );
  return newOrder;
}

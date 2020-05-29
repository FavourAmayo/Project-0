import { OrderItem } from "../model/OrderItem";

export class OrderItemDTO {
  item_id: number;
  product_id: number;
  quantity: number;
  list_price: number;
  name: string;
  description: string;
  constructor(
    item_id: number,
    product_id: number,
    quantity: number,
    list_price: number,
    name: string,
    description: string
  ) {
    this.item_id = item_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.list_price = list_price;
    this.name = name;
    this.description = description;
  }
}

export function convertToOrderItemArray(input: OrderItemDTO): OrderItem {
  const newOrderItem = new OrderItem(
    input.item_id,
    input.product_id,
    input.quantity,
    input.list_price,
    input.name,
    input.description
  );
  return newOrderItem;
}

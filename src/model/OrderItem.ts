export class OrderItem {
  item_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  list_price: number;
  name: string;
  description: string;
  constructor(
    item_id: number,
    order_id: number,
    product_id: number,
    quantity: number,
    list_price: number,
    name: string,
    description: string
  ) {
    this.item_id = item_id;
    this.order_id = order_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.list_price = list_price;
    this.name = name;
    this.description = description;
  }
}

export class Order {
  order_id: number;
  user_id: number;
  order_status: string;
  order_date: string;
  shipped_date: string;
  item_id: number;
  constructor(
    order_id: number,
    user_id: number,
    order_status: string,
    order_date: string,
    shipped_date: string,
    item_id: number
  ) {
    this.order_id = order_id;
    this.user_id = user_id;
    this.order_status = order_status;
    this.order_date = order_date;
    this.shipped_date = shipped_date;
    this.item_id = item_id;
  }
}

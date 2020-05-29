import { Purchase } from "../model/Purchase";
export class PurchaseDTO {
  name: string;
  order_id: number;
  order_status: string;
  order_date: string;
  shipped_date: string;
  item_id: number;
  constructor(
    name: string,
    order_id: number,
    order_status: string,
    order_date: string,
    shipped_date: string,
    item_id: number
  ) {
    this.name = name;
    this.order_id = order_id;
    this.order_status = order_status;
    this.order_date = order_date;
    this.shipped_date = shipped_date;
    this.item_id = item_id;
  }
}

export function convertToPurchaseArray(input: PurchaseDTO): Purchase {
  const newPurchase = new Purchase(
    input.name,
    input.order_id,
    input.order_status,
    input.order_date,
    input.shipped_date,
    input.item_id
  );
  return newPurchase;
}

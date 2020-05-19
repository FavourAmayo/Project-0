import * as OrderItemsRepository from "../repository/OrderItemRepository";
import { OrderItem } from "../model/OrderItem";

export async function findAllOrderItems(): Promise<OrderItem[]> {
  return OrderItemsRepository.findAllOrderItems();
}

export async function saveOneOrderItem(input: OrderItem): Promise<OrderItem> {
  return OrderItemsRepository.saveOneOrderItem(input);
}

export async function findOrderItem(input: any): Promise<OrderItem[]> {
  return OrderItemsRepository.findOrderItem(input);
}

export async function findPrice(input: any): Promise<OrderItem[]> {
  return OrderItemsRepository.findPrice(input);
}

export async function filterByPrice(input: any): Promise<OrderItem[]> {
  return OrderItemsRepository.filterByPrice(input);
}

export async function updateOneOrderItem(input: OrderItem): Promise<string> {
  return OrderItemsRepository.updateOneOrderItem(input);
}

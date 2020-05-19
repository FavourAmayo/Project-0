import * as OrdersRepository from "../repository/OrdersRepository";
import { Order } from "../model/Order";

export async function findAllOrders(): Promise<Order[]> {
  return OrdersRepository.findAllOrders();
}

export async function saveOneOrder(input: Order): Promise<Order> {
  return OrdersRepository.saveOneOrder(input);
}

export async function findOrder(input: any): Promise<Order[]> {
  return OrdersRepository.findOrder(input);
}

export async function updateOneOrder(input: any): Promise<string> {
  return OrdersRepository.updateOneOrder(input);
}

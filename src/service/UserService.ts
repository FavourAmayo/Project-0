import * as UsersRepository from "../repository/UsersRepository";
import { User } from "../model/User";
import { Purchase } from "../model/Purchase";

export async function findAllUsers(): Promise<User[]> {
  return UsersRepository.findAllUsers();
}

export async function saveOneUser(input: User): Promise<User> {
  return UsersRepository.saveOneUser(input);
}

export async function findUser(input: any): Promise<User[]> {
  return UsersRepository.findUser(input);
}

export async function updateOneUser(input: User): Promise<string> {
  return UsersRepository.updateOneUser(input);
}

export async function findOrderedItems(): Promise<Purchase[]> {
  return UsersRepository.findOrderedItems();
}

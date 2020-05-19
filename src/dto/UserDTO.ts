import { User } from "../model/User";

export class UserDTO {
  user_id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  constructor(
    user_id: number,
    name: string,
    email: string,
    password: string,
    phone: string
  ) {
    this.user_id = user_id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }
}

export function convertToUserArray(input: UserDTO): User {
  const newUser = new User(
    input.user_id,
    input.name,
    input.email,
    input.password,
    input.phone
  );
  return newUser;
}

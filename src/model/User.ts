export class User {
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

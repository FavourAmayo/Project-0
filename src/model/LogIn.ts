export class LogIn {
  session_id: any;
  username: string;
  password: string;
  session: any;
  admin: boolean;
  constructor(
    session_id: any,
    username: string,
    password: string,
    session: any,
    admin: boolean
  ) {
    this.session_id = session_id;
    this.username = username;
    this.password = password;
    this.session = session;
    this.admin = admin;
  }
}

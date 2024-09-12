export interface IUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
  password: string;
}

export interface IUpdateUser {
  name: string;
  email?: string;
  role: boolean;
  password?: string;
}

export interface ISignUp {
  email: string;
  password: string;
}

export class User implements IUser {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public roles: string[],
    public password: string
  ) {}
}

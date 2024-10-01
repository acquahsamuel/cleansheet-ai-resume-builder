export interface MUser {
    user_id?: string;
    name: string;
    email: string;
    roles: string[];
    password: string;
}


export class MUpdateUser {
    name?: string;
    email?: string;
    password?: string;
}

export class CreateUser implements MUser {
    constructor() { }
    public name: string;
    public email: string;
    public roles: string[];
    public password: string;
}
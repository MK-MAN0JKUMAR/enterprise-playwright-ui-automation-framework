import { LoginData } from "@domain/models/LoginData";

export class LoginDataBuilder {

    private data: LoginData = {
        username: "",
        password: ""
    };

    withUsername(username: string): this {
        this.data.username = username;
        return this;
    }

    withPassword(password: string): this {
        this.data.password = password;
        return this;
    }

    build(): LoginData {
        return { ...this.data };
    }
}
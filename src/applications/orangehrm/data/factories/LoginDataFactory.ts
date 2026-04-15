
import { LoginData } from "@domain/models/LoginData";

export class LoginDataFactory {

    static defaultUser(): LoginData {
        return {
            username: "Admin",
            password: "admin123"
        };
    }
}
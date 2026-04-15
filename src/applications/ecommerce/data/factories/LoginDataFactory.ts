
import { LoginData } from "@domain/models/LoginData";

export class LoginDataFactory {

    static defaultUser(): LoginData {
        return {
            username: "automation.test@example.com",
            password: "Test@123"
        };
    }

}
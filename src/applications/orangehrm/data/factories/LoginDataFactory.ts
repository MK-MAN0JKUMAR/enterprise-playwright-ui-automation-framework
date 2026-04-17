
import { LoginData } from "@domain/models/LoginData";

export class LoginDataFactory {

    static defaultUser(): LoginData {
        return {
            username: "Admin",
            password: "admin123"
        };
    }

    static invalidUser(): LoginData {
        return {
            username: "InvalidUser",
            password: "wrongPassword"
        };
    }

    static lockedUser(): LoginData {
        return {
            username: "LockedUser",
            password: "locked123"
        };
    }

    static randomUser(): LoginData {
        return {
            username: `user_${Date.now()}`,
            password: "Test@123"
        };
    }
}
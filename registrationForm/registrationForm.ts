import * as signs from "../fixtures/requiredValues";
import * as requiredNumbers from "../fixtures/requiredValues";

export class RegistrationForm {
    static loginField(login: string): string | undefined {
        if (login.length > requiredNumbers.minLoginNumber && login.length < requiredNumbers.maxLoginNumber) {
            return login.trim().toLowerCase();
        }
    }

    static passwordField(password: string): string | undefined {
        if (password.length > requiredNumbers.minPasswordNumber && password.length < requiredNumbers.maxPasswordNumber) {
            return password.trim();
        }
    }

    static emailField(email: string): string | undefined {
        if (email.length > requiredNumbers.minEmailNumber && email.length < requiredNumbers.maxEmailNumber && email.includes(signs.dotSign) && email.includes(signs.addSign)) {
            return email.trim().toLowerCase();
        }
    }
}
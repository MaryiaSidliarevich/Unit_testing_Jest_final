import {RegistrationForm} from "../registrationForm/registrationForm";
import {invalidInputValues, emptyInputValues} from "../fixtures/inputValues";
import {expectedValues} from "../fixtures/expectedValues";

describe("Negative tests for checking registration form", () => {

    test("Assert incorrect value for login field is not accepted", () => {
        expect(RegistrationForm.loginField(invalidInputValues.inputLogin)).toBeFalsy();
    });

    test("Assert empty value for login field is not accepted", () => {
        expect(RegistrationForm.loginField(emptyInputValues.inputLogin)).toBeFalsy();
    });

    test("Assert incorrect value for login field is not the same as expected", () => {
        expect(RegistrationForm.loginField(invalidInputValues.inputLogin)).not.toEqual(expectedValues.inputLogin);
    });

    test("Assert empty value for login field is not the same as expected", () => {
        expect(RegistrationForm.loginField(emptyInputValues.inputLogin)).not.toEqual(expectedValues.inputLogin);
    });

    test("Assert incorrect value for password field is not accepted", () => {
        expect(RegistrationForm.passwordField(invalidInputValues.inputPassword)).toBeFalsy();
    });

    test("Assert empty value for password field is not accepted", () => {
        expect(RegistrationForm.passwordField(emptyInputValues.inputPassword)).toBeFalsy();
    });

    test("Assert incorrect value for password field is not the same as expected", () => {
        expect(RegistrationForm.loginField(invalidInputValues.inputPassword)).not.toEqual(expectedValues.inputPassword);
    });

    test("Assert empty value for password field is not the same as expected", () => {
        expect(RegistrationForm.loginField(emptyInputValues.inputPassword)).not.toEqual(expectedValues.inputPassword);
    });

    test("Assert incorrect value for email field is not accepted", () => {
        expect(RegistrationForm.emailField(invalidInputValues.inputEmail)).toBeFalsy();
    });

    test("Assert empty value for email field is not accepted", () => {
        expect(RegistrationForm.emailField(emptyInputValues.inputEmail)).toBeFalsy();
    });

    test("Assert incorrect value for email field is not the same as expected", () => {
        expect(RegistrationForm.loginField(invalidInputValues.inputEmail)).not.toEqual(expectedValues.inputEmail);
    });

    test("Assert empty value for email field is not the same as expected", () => {
        expect(RegistrationForm.loginField(emptyInputValues.inputEmail)).not.toEqual(expectedValues.inputEmail);
    });
});
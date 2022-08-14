import {RegistrationForm} from "../registrationForm/registrationForm";
import {correctInputValues, correctInputValuesInUpperCase} from "../fixtures/inputValues";
import {expectedValues} from "../fixtures/expectedValues";
import {addSign, dotSign} from "../fixtures/requiredValues";

describe("Positive tests for checking registration form", () => {

    test("Assert correct value for login field is accepted", () => {
        expect(RegistrationForm.loginField(correctInputValues.inputLogin)).toBeTruthy();
    });

    test("Assert value for login field is the same as expected", () => {
        expect(RegistrationForm.loginField(correctInputValues.inputLogin)).toEqual(expectedValues.inputLogin);
    });

    test("Assert value for login field in upper case is the same as expected", () => {
        expect(RegistrationForm.loginField(correctInputValuesInUpperCase.inputLogin)).toEqual(expectedValues.inputLogin);
    });

    test("Assert correct value for password field is accepted", () => {
        expect(RegistrationForm.passwordField(correctInputValues.inputPassword)).toBeTruthy();
    });

    test("Assert value for password field is the same as expected", () => {
        expect(RegistrationForm.passwordField(correctInputValues.inputPassword)).toEqual(expectedValues.inputPassword);
    });

    test("Assert correct value for email field is accepted", () => {
        expect(RegistrationForm.emailField(correctInputValues.inputEmail)).toBeTruthy();
    });

    test("Assert correct value for email field contains character '@'", () => {
        expect(RegistrationForm.emailField(correctInputValues.inputEmail)).toContain(addSign);
    });

    test("Assert correct value for email field contains character '.'", () => {
        expect(RegistrationForm.emailField(correctInputValues.inputEmail)).toContain(dotSign);
    });

    test("Assert value for email field is the same as expected", () => {
        expect(RegistrationForm.emailField(correctInputValues.inputEmail)).toEqual(expectedValues.inputEmail);
    });

    test("Assert value for email field in upper case is the same as expected", () => {
        expect(RegistrationForm.emailField(correctInputValuesInUpperCase.inputEmail)).toEqual(expectedValues.inputEmail);
    });
});
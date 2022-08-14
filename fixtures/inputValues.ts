import {Input} from "./interfaces";

export const correctInputValues: Input = {
    inputLogin: "julia",
    inputPassword: "julia1986",
    inputEmail: "julia1986@gmail.com"
}

export const correctInputValuesInUpperCase: Input = {
    inputLogin: "JULIA",
    inputPassword: "julia1986",
    inputEmail: "JULIA1986@gmail.com"
}

export const invalidInputValues: Input = {
    inputLogin: "j",
    inputPassword: "jul12",
    inputEmail: "julia.gmail.com"
}

export const emptyInputValues: Input = {
    inputLogin: "",
    inputPassword: "",
    inputEmail: ""
}
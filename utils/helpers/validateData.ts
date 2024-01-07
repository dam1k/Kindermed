import {isPossibleNumber, isValidPhoneNumber} from "libphonenumber-js";

export function validatePhone(phone:string, locale:string) {
    //@ts-ignore
    return isValidPhoneNumber(phone, locale) && isPossibleNumber(phone, locale);
}

export function validateEmail(email:string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
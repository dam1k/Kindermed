import {isPossibleNumber, isValidPhoneNumber} from "libphonenumber-js";

export function validatePhone(phone:string, locale:string) {
    //@ts-ignore
    return isValidPhoneNumber(phone, locale) && isPossibleNumber(phone, locale);
}
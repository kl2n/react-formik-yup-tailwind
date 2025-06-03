import * as Yup from "yup";
import {firstName, lastName, email, password, confirmPassword} from "@/utils/validationRules";

export const signupSchema = Yup.object({
    firstName,
    lastName,
    email,
    password,
    confirmPassword
})
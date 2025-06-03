import * as Yup from "yup";
import {email, password} from "@/utils/validationRules";

export const loginSchema = Yup.object({
    email,
    password,
})
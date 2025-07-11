import * as Yup from 'yup';

export const firstName = Yup.string().min(2, "Too Short!")
                                     .max(20, "Too Long!")
                                     .required("First Name is required");
export const lastName = Yup.string().min(2, "Too Short!")
                                    .max(20, "Too Long!")
                                    .required("Last Name is required");
export const email = Yup.string().email("Invalid email")
                        .required("Email is required");
export const password = Yup.string().min(8, 'Password is too short - should be at least 8 chars.')
                                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                                    .matches(/[0-9]/, "Password must contain at least one number")
                                    .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
                                    .required("Password is required");
export const confirmPassword = Yup.string().oneOf([Yup.ref("password")], "Password is not match")
                                           .required("Confirm password is required");
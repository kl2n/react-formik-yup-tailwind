import {Formik, Form, Field, ErrorMessage} from "formik";
import {signupSchema} from "../validationSchemas/signupSchema";
import {useRouter} from "next/navigation";

export default function Signup() {
    const router = useRouter();
    return (
        <div>
            <h1 className="block text-3xl mt-4 mb-6 font-semibold">Create an account</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={signupSchema}
                onSubmit={async (values) => {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    router.push('/thankyou');
                }}
            >
                {
                    ({isSubmitting, resetForm}) => (
                        <Form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2">First Name</label>
                                    <Field id="firstName"
                                           name="firstName"
                                           placeholder="Enter your first name"
                                           aria-describedby="firstName-error"
                                           className="w-full block p-2.5 rounded-md
                                           focus:outline-gray-500 focus:----outline-offset-2
                                           bg-gray-100 placeholder:text-gray-400 text-sm leading-6"
                                    />
                                    <ErrorMessage name="firstName"
                                                  component="div"
                                                  id="firstName-error"
                                                  className="text-red-500 text-sm/6"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2">Last Name</label>
                                    <Field id="lastName"
                                           name="lastName"
                                           placeholder="Enter your last name"
                                           aria-describedby="lastName-error"
                                           className="w-full block p-2.5 rounded-md
                                           focus:outline-gray-500 focus:-outline-offset-2
                                           bg-gray-100 placeholder:text-gray-400 text-sm leading-6"
                                    />
                                    <ErrorMessage name="lastName"
                                                  component="div"
                                                  id="lastName-error"
                                                  className="text-red-500 text-sm/6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <Field id="email"
                                       name="email"
                                       placeholder="Enter your email"
                                       autoComplete="email"
                                       aria-describedby="email-error"
                                       className="w-full block p-2.5 rounded-md
                                       focus:outline-gray-500 focus:-outline-offset-2
                                       bg-gray-100 placeholder:text-gray-400 text-sm leading-6"
                                />
                                <ErrorMessage name="email"
                                              component="div"
                                              id="email-error"
                                              className="text-red-500 text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2">Password</label>
                                <Field type="password"
                                       id="password"
                                       name="password"
                                       placeholder="Enter your password"
                                       autoComplete="new-password"
                                       aria-describedby="password-error"
                                       className="w-full block p-2.5 rounded-md
                                       focus:outline-gray-500 focus:-outline-offset-2
                                       bg-gray-100 placeholder:text-gray-400 text-sm leading-6"
                                />
                                <ErrorMessage name="password"
                                              component="div"
                                              id="password-error"
                                              className="text-red-500 text-sm/6"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                                <Field type="password"
                                       id="confirmPassword"
                                       name="confirmPassword"
                                       placeholder="Confirm your password"
                                       autoComplete="new-password"
                                       aria-describedby="confirmPassword-error"
                                       className="w-full block p-2.5 rounded-md
                                       focus:outline-gray-500 focus:-outline-offset-2
                                       bg-gray-100 placeholder:text-gray-400 text-sm leading-6"
                                />
                                <ErrorMessage name="confirmPassword"
                                              component="div"
                                              id="confirmPassword-error"
                                              className="text-red-500 text-sm/6"
                                />
                            </div>

                            <div className="flex gap-4 font-medium text-sm leading-6">
                                <button type="submit"
                                        disabled={isSubmitting}
                                        className="px-4 py-2 rounded-3xl cursor-pointer custom-btn
                                        focus-visible:outline focus-visible:outline-gray-500
                                        focus-visible:-outline-offset-2">
                                    Submit
                                </button>
                                <button type="button"
                                        onClick={() =>resetForm()}
                                        className="px-4 py-2 rounded-3xl cursor-pointer custom-btn
                                        focus-visible:outline focus-visible:outline-gray-500
                                        focus-visible:-outline-offset-2">
                                    Cancel
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}
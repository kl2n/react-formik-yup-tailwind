import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginSchema} from "@/validationSchemas/loginSchema";
import Welcome from "@/components/Welcome";

export default function Login() {
    return (
        <div>
            <h1 className="block text-3xl mt-4 mb-6 font-semibold">Login</h1>
            <Formik
                initialValues={{email: '', password: ''}}
                validationSchema={loginSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                        alert("Form submitted successfully");
                        resetForm();
                        setSubmitting(false);
                    }, 1000)
                }}
            >
                {({ isSubmitting, resetForm }) => (
                    <Form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <Field id="email"
                                   name="email"
                                   placeholder="Enter your email"
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
                )}
            </Formik>
        </div>
    )
}
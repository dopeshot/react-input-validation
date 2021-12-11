import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormWithFormikYup: React.FC = () => {
    const initialValues = {
        email: "",
    }

    const submitForm = (values: typeof initialValues) => {
        console.log(values);
    }

    const EmailSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
    })

    return <>
        <Formik initialValues={initialValues} validationSchema={EmailSchema} onSubmit={submitForm}>
            {(formik) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field
                        type="email"
                        name="email"
                        id="email"
                        style={formik.errors.email && formik.touched.email ? { color: "red" } : {}}
                    />
                    <ErrorMessage name="email" component="span"/>
                    <br />
                    <button
                        type="submit"
                        style={!(formik.dirty && formik.isValid) ? { color: "grey" } : {}}
                        disabled={!(formik.dirty && formik.isValid)}>
                        Sign In
                    </button>

                </Form>
            )}
        </Formik>
    </>
}
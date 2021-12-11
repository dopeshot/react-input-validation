import { Formik } from "formik";

export const FormWithFormik: React.FC = () => {
    const initialValues = {
        email: "",
    }

    const submitForm = (values: typeof initialValues) => {
        console.log(values);
    }

    const validate = (values: typeof initialValues) => {
        let errors: Partial<typeof initialValues> = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid Email";
        }
        return errors;
    };

    return <>
        <Formik initialValues={initialValues} validate={validate} onSubmit={submitForm}>
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={formik.errors.email && formik.touched.email ? { color: "red" } : {}}
                    />
                    {formik.errors && formik.touched.email && (
                        <span style={{ color: "red" }}>{formik.errors.email}</span>
                    )}
                    <button
                        type="submit"
                        style={!(formik.dirty && formik.isValid) ? { color: "grey" } : {}}
                        disabled={!(formik.dirty && formik.isValid)}>
                        Sign In
                    </button>

                </form>
            )}
        </Formik>
    </>
}
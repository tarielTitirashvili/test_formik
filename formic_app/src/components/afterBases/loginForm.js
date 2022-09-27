import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./controls/formikControl";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("incorrect email format"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("submit", values);
  };
  return (
    <div className="formContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="enter your email"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                label="enter your password"
              />
              <button type="submit" disabled={!formik.isValid}>
                submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

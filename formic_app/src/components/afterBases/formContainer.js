import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./formikControl";

export default function FormContainer() {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!!!"),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
}

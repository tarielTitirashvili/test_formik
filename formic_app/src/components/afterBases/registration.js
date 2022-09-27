import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./controls/formikControl";

export default function Registration() {
  const initialValues = {
    email: "",
    password: "",
    conformPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    conformPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephoneMoc",
      then: Yup.string().required("Required"),
    }),
  });

  const options = [
    { id: 0, key: "Email", value: "emailMoc" },
    { id: 1, key: "telephone", value: "telephoneMoc" },
  ];

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
        {(formic) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                name="email"
                label="email"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                label="password"
              />
              <FormikControl
                control="input"
                type="password"
                name="conformPassword"
                label="conform Password"
              />
              <FormikControl
                control="radio"
                name="modeOfContact"
                label="Mode of Contact"
                options={options}
              />
              <button type="submit">submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

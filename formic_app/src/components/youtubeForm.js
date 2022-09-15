import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"

const initialValues = {
  name: "",
  lastName: "",
  email: "",
};
const onSubmit = (values) => console.log("values");

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  lastName: Yup.string().required("Required").min(3) ,
  email: Yup.string().email("pleace enter valid  email address").required("Required"),
})

export default function YoutubeForm() {
  return (
    <div className="formContainer">
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema} 
        className="formContainer"
      >
        <Form className="form">
          <div>
            <label htmlFor="name">name</label>
            <Field name="name" id="name" type={"text"} />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label htmlFor="lastName">lastName</label>
            <Field name="lastName" id="lastName" type={"text"} />
            <ErrorMessage name="lastName" />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <Field name="email" id="email" type={"email"} />
            <ErrorMessage name="email" />
          </div>

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}

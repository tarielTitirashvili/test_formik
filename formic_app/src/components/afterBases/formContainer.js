import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./controls/formikControl";

export default function FormContainer() {
  const initialValues = {
    email: "",
    description: "",
    selectOpt: ''
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!!!"),
    description: Yup.string().required("Required!!!"),
    selectOpt: Yup.string().required("Required!!!"),
});
  const onSubmit = (values) => console.log("Form data", values);

  const dropdownOptions = [
    {key: "select an option", value: ''},
    {key: "option 1", value: 'option1'},
    {key: "option 2", value: 'option2'},
    {key: "option 3", value: 'option3'},
  ]
  return (
    <div className="formContainer">
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
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
             <FormikControl
              control="select"
              label="selectExample"
              name="selectOpt"
              options={dropdownOptions}
            />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

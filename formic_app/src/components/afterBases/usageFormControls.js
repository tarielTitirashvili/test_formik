import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./controls/formikControl";

export default function usageFormControls() {
  const initialValues = {
    email: "",
    description: "",
    selectOpt: "",
    radioOpt: "",
    checkboxOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required!!!"),
    description: Yup.string().required("Required!!!"),
    selectOpt: Yup.string().required("Required!!!"),
    radioOpt: Yup.string().required("Required!!!"),
    checkboxOption: Yup.array().required('Required'),
  });
  const onSubmit = (values) => console.log("Form data", values);

  const dropdownOptions = [
    { id: 0, key: "select an option", value: "" },
    { id: 1, key: "option 1", value: "option1" },
    { id: 2, key: "option 2", value: "option2" },
    { id: 3, key: "option 3", value: "option3" },
  ];
  const radioOptions = [
    { id: 1, key: "option 1", value: "option1" },
    { id: 2, key: "option 2", value: "option2" },
    { id: 3, key: "option 3", value: "option3" },
  ];
  const checkboxOptions = [
    { id: 1, key: "option 1", value: "checkOption1" },
    { id: 2, key: "option 2", value: "checkOption2" },
    { id: 3, key: "option 3", value: "checkOption3" },
  ];
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
              label="TextArea Example"
              name="description"
            />
            <FormikControl
              control="select"
              label="select Example"
              name="selectOpt"
              options={dropdownOptions}
            />
            <FormikControl
              control="radio"
              label="radio Example"
              name="radioOpt"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="checkbox Example"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMessageShow from "../../errorMessage";

export default function TextArea(props) {
  const { label, name, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorMessageShow} />
    </div>
  );
}

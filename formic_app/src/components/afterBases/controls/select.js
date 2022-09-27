import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMessageShow from "../../errorMessage";

export default function Select(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={ErrorMessageShow} />
    </div>
  );
}

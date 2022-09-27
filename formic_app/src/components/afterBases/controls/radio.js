import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorMessageShow from "../../errorMessage";

export default function Radio(props) {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="radio" id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div style={{display: "flex"}} key={option.id}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorMessageShow} />
    </div>
  );
}

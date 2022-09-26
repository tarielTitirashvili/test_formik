import React from "react";
import Input from "./input";

export default function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input": return <Input {...rest}/>
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
  return <div>FormikControl</div>;
}

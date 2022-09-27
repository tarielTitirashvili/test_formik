import React from "react";
import TextArea from "./textArea";
import Input from "./input";
import Select from "./select";
import Radio from "./radio";
import CheckBox from "./checkBox";

export default function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
    default:
      return null;
  }
}

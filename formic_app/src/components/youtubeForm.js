import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
};
const onSubmit = (values) => console.log("values");
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "name is required";
  }
  if (!values.lastName) {
    errors.lastName = "lastName is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  }

  return errors;
};

export default function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const { handleChange, values, handleSubmit, errors, handleBlur, touched } =
    formik;
  console.log(touched);
  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            name="name"
            id="name"
            type={"text"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && touched.name && (
            <div className="inputErrors">{errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="lastName">lastName</label>
          <input
            name="lastName"
            id="lastName"
            type={"text"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && (
            <div className="inputErrors">{errors.lastName}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            name="email"
            id="email"
            type={"email"}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email && (
            <div className="inputErrors">{errors.email}</div>
          )}
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  comment: "",
  address: ""
};
const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  lastName: Yup.string().required("Required").min(3) ,
  email: Yup.string().email("pleace enter valid  email address").required("Required"),
  comment: Yup.string().required("Required")
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
            <Field name="name" placeholder="name" id="name" type="text" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label htmlFor="lastName">lastName</label>
            <Field name="lastName" placeholder="lastName" id="lastName" type="text" />
            <ErrorMessage name="lastName" />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <Field name="email" placeholder="email" id="email" type="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label htmlFor="comment">comment</label>
            <Field as="textarea" name="comment" placeholder="comment" id="comment" type="text" />
            <ErrorMessage name="comment" />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Field name="address" placeholder="address"type="text" >
              {
                (props)=>{
                  const {field, form, meta} = props
                  console.log(props)
                  return <div>
                    <input id="address" {...field} />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                }
              }
            </Field>
            <ErrorMessage name="address" />
          </div>

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}

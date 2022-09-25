import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import ErrorMessageWiev from "./errorMessage";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  comment: "",
  address: "",
  social: {
    facebook: '',
    twiter: ''
  },
};
const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  lastName: Yup.string().required("Required").min(3) ,
  email: Yup.string().email("pleace enter valid  email address").required("Required"),
  comment: Yup.string().required("Required"),
  facebook: Yup.string().required("Required"),
  twiter: Yup.string().required("Required"),
})

export default function YoutubeForm() {
  return (
    <div className="formContainer">
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema} 
      >
        <Form className="form">
          <div>
            <label htmlFor="name">name</label>
            <Field name="name" placeholder="name" id="name" type="text" />
            <ErrorMessage name="name" component={ErrorMessageWiev} />
          </div>

          <div>
            <label htmlFor="lastName">lastName</label>
            <Field name="lastName" placeholder="lastName" id="lastName" type="text" />
            <ErrorMessage name="lastName" component={ErrorMessageWiev} />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <Field name="email" placeholder="email" id="email" type="email" />
            <ErrorMessage name="email"> 
            {
              (message)=>{
                return <span className="error">{message}</span>
              }
            }
            </ErrorMessage>
          </div>

          <div>
            <label htmlFor="comment">comment</label>
            <Field as="textarea" name="comment" placeholder="comment" id="comment" type="text" />
            <ErrorMessage name="comment" component={ErrorMessageWiev} />
          </div>

          <div>
            <label htmlFor="facebook">facebook</label>
            <Field name="social.facebook" placeholder="facebook" id="facebook" type="facebook" />
            <ErrorMessage name="facebook" component={ErrorMessageWiev} />
          </div>

          <div>
            <label htmlFor="twiter">twiter</label>
            <Field name="social.twiter" placeholder="twiter" id="twiter" type="twiter" />
            <ErrorMessage name="twiter" component={ErrorMessageWiev} />
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

import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup"
import ErrorMessageView from "./errorMessage";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  comment: "",
  address: "",
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['',''],
  phNumbers: ['']
};
const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  lastName: Yup.string().required("Required").min(3) ,
  email: Yup.string().email("pleace enter valid  email address").required("Required"),
  comment: Yup.string().required("Required"),
})

export default function YoutubeForm() {
  return (
    <div className="formContainer">
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={onSubmit} 
      >
        <Form className="form">
          <div>
            <label htmlFor="name">name</label>
            <Field name="name" placeholder="name" id="name" type="text" />
            <ErrorMessage name="name" component={ErrorMessageView} />
          </div>

          <div>
            <label htmlFor="lastName">lastName</label>
            <Field name="lastName" placeholder="lastName" id="lastName" type="text" />
            <ErrorMessage name="lastName" component={ErrorMessageView} />
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
            <ErrorMessage name="comment" component={ErrorMessageView} />
          </div>

          <div>
            <label htmlFor="facebook">facebook</label>
            <Field name="social.facebook" placeholder="facebook" id="facebook" type="text" />
            <ErrorMessage name="facebook" component={ErrorMessageView} />
          </div>

          <div>
            <label htmlFor="twitter">twitter</label>
            <Field name="social.twitter" placeholder="twitter" id="twitter" type="text" />
            <ErrorMessage name="twitter" component={ErrorMessageView} />
          </div>

          <div>
            <label htmlFor="mainPhone">mainPhone</label>
            <Field name="phoneNumbers[0]" placeholder="mainPhone" id="mainPhone" type="text" />
            <ErrorMessage name="facebook" component={ErrorMessageView} />
          </div>

          <div>
            <label htmlFor="secondaryPhone">secondaryPhone</label>
            <Field name="phoneNumbers[1]" placeholder="secondaryPhone" id="secondaryPhone" type="text" />
            <ErrorMessage name="secondaryPhone" component={ErrorMessageView} />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Field name="address" placeholder="address"type="text" >
              {
                (props)=>{
                  const {field, form, meta} = props
                  return <div>
                    <input id="address" {...field} />
                    {meta.touched && meta.error && <div>{meta.error}</div>}
                  </div>
                }
              }
            </Field>
            <ErrorMessage name="address" />
          </div>

          <div>
            <label>List of phone numbers</label>
            <FieldArray name="phNumbers">
              {
                (fieldArrayProps)=>{
                  console.log(fieldArrayProps)
                  const {push, remove, form} = fieldArrayProps
                  const { values } = form
                  const { phNumbers } = values
                  return<div>
                    {
                      phNumbers.map((number, i)=>(
                        <div key={i}>
                          <Field name={`phNumbers[${i}]`}/> 
                          {
                            i>0 && <button type="button" onClick={()=>remove(i)}> - </button>
                          }
                          <button type="button" onClick={()=>push(i)}> + </button>
                        </div>
                      ))
                    }
                  </div>
                }
              }
            </FieldArray>
          </div>

          <button style={{width: "100px"}} type="submit">submit</button>
        </Form>
      </Formik>
    </div>
  );
}

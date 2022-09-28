import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./controls/formikControl";

export default function EnrollmentFrom() {
    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseData: null
    }
    const validationSchema =Yup.object({
        email: Yup.string().required('Required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Required'),
        courseData: Yup.string().required('Required').nullable()
    })
    const options = [
        {id:0, key: 'Html', value: 'html'},
        {id:1, key: 'css', value: 'css'},
        {id:2, key: 'javascript', value: 'javascript'},
    ]
  return (
    <div className='formContainer'>
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
            {
                formik=>{
                    return(
                        <Form>
                            <FormikControl 
                                control='input'
                                name='email'
                                label='Email'
                            />
                            <FormikControl 
                                control='textarea'
                                name='bio'
                                label='Bio'
                            />
                            <FormikControl 
                                control='input'
                                name='course'
                                label='Course'
                            />
                            <FormikControl 
                                control='checkbox'
                                name='skills'
                                label='SkillSet'
                                options={options}
                            />
                            <FormikControl 
                                control='date'
                                name='courseData'
                                label='Course Date'
                            />
                            <button type='submit'>submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

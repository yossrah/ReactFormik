import React from 'react'
import { Form,Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
const FormikContainer = () => {
  const formOptions=[
      {label:'Agent 1', value:'1'},
      {label:'Agent 2', value:'2'},
      {label:'Agent 3', value:'3'},
  ]
    const initialValues={
      email:'',
      description:'',
      agents:'',
    }
    const validationSchema=Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      description: Yup.string().required('enter short description'),
      agents: Yup.string().required('agent required'),
    })
    const onSubmit=(values, {resetForm}) => {
      console.log(values)
      resetForm()
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=>{
            return(
              <Form >
                {/* form fields */}
                <FormikControl control="input" type="email" name="email" label="Email"></FormikControl>
                <FormikControl control="textarea" name="description" label="Description"></FormikControl>
                <FormikControl control="select" name="agents" label="Agents" options={formOptions}></FormikControl>
                <button type="submit">Submit</button>
              </Form>
            )

  
        }
      }
    </Formik>
  )
}

export default FormikContainer

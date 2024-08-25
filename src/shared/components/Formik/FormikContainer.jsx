import React from 'react'
import { Form,Formik } from 'formik'
import * as Yup from 'yup'
const FormikContainer = () => {
    const initialValues={}
    const validationSchema=Yup.object({})
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
                <button type="submit">Submit</button>
              </Form>
            )

  
        }
      }
    </Formik>
  )
}

export default FormikContainer

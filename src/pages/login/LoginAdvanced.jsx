import React from 'react'
import { Formik,Form,Field,FastField,ErrorMessage, FieldArray } from 'formik'
import * as yup from 'yup'
import TextError from '../../shared/components/TextError'
const LoginAdvanced = () => {
    const initialValues={
        email: '',
        password: '',
        phNumbers:['']
    }
    const onSubmit=(values, onSubmitProps)=>{
        console.log('loginnnnn',values)
        onSubmitProps.resetForm() //clear form data
    }
    const validationSchema=yup.object({
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().required('Password is required'),
    })
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik=>{
            return(
                <Form>
                <h1>Login</h1>
                <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <FastField type='email' id='email' name='email' placeholder='Email'/> 
                <ErrorMessage name='email' component={TextError}/>
                </div>
                <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <FastField type='password' id='password' name='password'/>
                <ErrorMessage name='password' component={TextError}></ErrorMessage>
                </div>
                <div className='form-control'>
                <label htmlFor='password'>Phone numbers</label>
                <FieldArray name='phNumbers'>
                {
                  fieldArrayProps=>{
                    const {push,remove,form}=fieldArrayProps
                    const {values}=form
                    const {phNumbers}=values
                    return(
                      <div>
                      {
                        phNumbers?.map((phNumber,index)=>{
                          return(
                            <div key={index}>
                            <Field key={index} name={`phNumbers[${index}]`}/>
                            {
                              index>0 && <button onClick={()=>remove(index)}>-</button>
                            }
                            <button onClick={()=>push('')}>+</button>
                            </div>
                          )
                        })                      }
                      </div>
                    )
                  }
                }
              </FieldArray>
                </div>
                <button type='submit' disabled={!formik.isValid}>Login</button>
                <button type='reset'>Reset</button>
                </Form>
            )
        }
      }
    </Formik>
  )
}

export default LoginAdvanced

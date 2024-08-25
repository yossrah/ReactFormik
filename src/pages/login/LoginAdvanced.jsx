import React from 'react'
import { Formik,Form,Field,FastField,ErrorMessage } from 'formik'
import * as yup from 'yup'
import TextError from '../../shared/components/TextError'
const LoginAdvanced = () => {
    const initialValues={
        email: '',
        password: '',
    }
    const onSubmit=(values, onSubmitProps)=>{
        console.log('loginnnnn',values)
        onSubmitProps.resetForm()
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
                <ErrorMessage name='username' component={TextError}/>
                </div>
                <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <FastField type='password' id='password' name='password'/>
                <ErrorMessage name='password' component={TextError}></ErrorMessage>
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

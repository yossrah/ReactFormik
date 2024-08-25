import React from 'react'
import { Formik,Form, Field, ErrorMessage, FieldArray,FastField } from 'formik'
import * as Yup from 'yup'
import TextError from '../../shared/components/TextError'
{/* Form component is a small wrapper around a form component that hooks into the formik handle submit method */ } 
{/* Field component is a small wrapper around a formik input component that hooks into the formik handle change method */ } 
{/*...formik.getFieldProps('username') is used to pass the props to the input element */ }  
{/* errorMessg component behind the scene will render the error messg for the particular field indicated by this name
  if visited or error exists */ }
  {/* as to decide what element to render*/ } 
  {/* Fastfield for performance optimization : the change in form state causing all fields of form to rerender 
    when using field
    fastfield is an optimized version of field to prevents additioanl rerenders of other fields
    use it when a field is independant of other fields*/ }  
    {/* formik runs validation after any change event in form, onblur and submit =>form errors object are populated*/}
const Register = () => {
  const initialValues={
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
      description:'',
      adress:'',
      social:{
        fb:"",
        linkedin:""
      },
      phNumbers:[''] //only one number to begin with
    }
    const validationSchema= Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      social: Yup.object({
        fb: Yup.string().url('Invalid URL format for Facebook'),
        linkedin: Yup.string().url('Invalid URL format for LinkedIn'),
      }),
    })
    const onSubmit= (values,onSubmitProps) => {
      console.log(values)
      onSubmitProps.resetForm()
    }
  return (
    <>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {
      /* formik are props object that control everything we has to do with the form, control both field and form*/
    }
    {formik=>{
      return(
        <Form >
        <h1>Register</h1>
        <div className='form-control'>
        <label>Username</label> 
        <Field type="text" name="username" placeholder="Username" 
        // {...formik.getFieldProps('username')} 
        />
        <ErrorMessage name='username' component={TextError}/>
        {/* {formik.errors.username && <p>{formik.errors.username}</p>}*/}
        </div>
        <div className='form-control'>
        <label>Password</label>
        <FastField type="password" name="password" placeholder="Password"/>
        <ErrorMessage name='password'/>
        </div>
        <div className='form-control'>
        <label>Email</label>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name='email'>
        {
          //render props pattern return the error message as a prop
          (error) => {
            return <TextError>{error}</TextError>
          }
        }
        </ErrorMessage>
        </div>
        <div className='form-control'>
        <label>Confirm Password</label>
        <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
        <ErrorMessage name='confirmPassword'/>
        </div>
        <div className='form-control'>
        <label>Description</label>
        <Field type="text" as='textarea' name="description" placeholder="tell us about you" />
        </div>
        <div className='form-control'>
        <label>Adress</label>
        <Field type="text" name="adress" placeholder="Adress"> 
        {/* the render props pattern way to use custom components into form*/ }
        {
          (props)=>{
            //console.log('rendering', props); //field,form,meta
            const {form,field,meta}=props
            return <div>
            <input id='adress' type='text'  {...field} />  
            {/*field take care of onChange, blur and value name*/}
            {meta.touched && meta.error && <p>{meta.error}</p>}
            </div>
        }
      }
        </Field>
        </div>
        <div className='form-control'>
        <label>Social Media</label>
        <Field type="text" name="social.fb" placeholder="Facebook" />
        <Field type="text" name="social.linkedin" placeholder="Linkedin" />
        </div>
        <div className='form-control'>
        <label>Phone Numbers</label>
        <FieldArray name="phNumbers">
        {
          fieldProps=>{
            //console.log('fieldArrayProps', fieldProps)
            const {push,remove,form}=fieldProps
            const { values } = form;
            const { phNumbers } = values;
            return (
              <div>
              {
                phNumbers?.map((phNumber,index)=>(
                  <div key={index}>
                    <div>
                      <label>Phone Number {index+1} :</label>
                    </div>
                      <Field type="text" name={`phNumbers.${index}`} placeholder="Phone Number"/>
                      { index>0 && <button type='button' onClick={()=>remove(index)}>-</button>}
                      {index<4 && <button onClick={()=>push('')}>+</button>}
                      {phNumbers.length===5 && <p>Only 5 phone numbers allowed</p>}
                    </div>
                ))
              }
              </div>
            )
          }
        }
        </FieldArray>
        </div>
        <button type="submit" disabled={!formik.isValid}>Register</button>
        <button type='reset'>Reset</button>
        </Form>
      )
    }}
   
    </Formik>
    </>
  )
}

export default Register

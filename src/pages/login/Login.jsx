import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const Login = () => {
    //manage form state, the object contains the props and methods to handle the form state
    //keep trck of the visited fields in the form using formik.handleBlur method that we pass in the onBlur property ,stored in an object called touched
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
        channel: ''
      },
      onSubmit:values=>{
        console.log('form submitted', values)
        // You can also send the form data to an API here
        // fetch('/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(values)
        // })
        //.then(response => response.json())
        //.then(data => console.log('login response:', data))
      },
      // validation rules
      // validate:values=>{
      //   const errors = {}
      //   if (!values.username) {
      //     errors.username = 'Username is required'
      //   }
      //   if (!values.password) {
      //     errors.password = 'Password is required'
      //   }
      //   if (!values.channel) {
      //     errors.channel = 'Channel is required'
      //   }
      //   return errors
      // },
    //yup is for object schema validation
      validationSchema: Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        channel: Yup.string().required('Channel is required')
      })
    })
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
      {/* formik constant gives a helper method to handle form submission */}
      {/*formik stores the visited information in the form in object called touched*/}
      <h1>Login</h1>
      <div className='form-control'>
      <label htmlFor='username'>Username</label>
      <input type="text" name="username" placeholder="Username" 
      onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} />
      {formik.touched.username && formik.errors.username? <div>{formik.errors.username}</div>:null}
      </div>
      <div className='form-control'>
      <label>Password</label>
      <input type="password" name="password" placeholder="Password" 
      onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
      {formik.touched.password && formik.errors.password? <div>{formik.errors.password}</div>:null}
      
      </div>
      <div className='form-control'>
      <label>Channel</label>
      <input type="text" name="channel" placeholder="channel" 
      onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/>
      {formik.touched.channel && formik.errors.channel? <div>{formik.errors.channel}</div>:null}
      
      </div>
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
      </form>
    </>
  )
}

export default Login

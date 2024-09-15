import { ErrorMessage, Field } from 'formik'
import React from 'react'

const TextAreaField = (props) => {
    const { label, name, ...rest } = props

  return (
   <div className='form-control'>
      <Field label={label} name={name} {...rest} as="textarea" />
      <ErrorMessage name={name}/>
    </div>
  )
}

export default TextAreaField

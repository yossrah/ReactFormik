import { ErrorMessage, Field } from 'formik'
import React from 'react'

const SelectField = (props) => {
    const {label,name, options, ...rest}=props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as='select'>
      { options.map((option,key)=>{
        return <option key={key} value={option.value}>{option.label}</option>
      })
      }
      </Field>
      <ErrorMessage name={name}></ErrorMessage>

    </div>
  )
}

export default SelectField

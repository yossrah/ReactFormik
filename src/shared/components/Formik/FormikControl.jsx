import React from 'react'
import Input from './Input'
import TextAreaField from './TextAreaField'
import SelectField from './SelectField'
//this component will decide which of the differnet form fields have to be rendred based on the prop
const FormikControl = (props) => {
    const {control,rest}=props
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'select':
            return <SelectField {...rest}></SelectField>
        case 'textarea':
            return <TextAreaField {...rest}/>
        case 'radio':
            return control.children
        case 'checkbox':
            return control.children
        case 'date':
            return <input {...control.input} type='date' />
        default:
            return null;
    }
}

export default FormikControl

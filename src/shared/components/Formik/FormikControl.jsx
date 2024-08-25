import React from 'react'

const FormikControl = (props) => {
    const {control}=props
    switch(control){
        case 'input':
            return <input {...control.input} />
        case 'select':
            return <select {...control.selectProps}>{control.children}</select>
        case 'textarea':
            return <textarea {...control.input} />
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

import React from "react"

import { Field } from "formik"

//Basic Select Componnet
class Select extends React.Component {

    //Simple Form with email and submit button
    render() {
        return (
            <Field {...this.props} as="select">
                <option defaultValue>Please Select...</option>
                {
                    this.props.options.map(option => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })
                }
            </Field>
        )
    }
}

export default Select;
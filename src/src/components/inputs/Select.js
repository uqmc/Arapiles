import React from "react"

import { Field } from "formik"

//Basic Select Component
class Select extends React.Component {

    /*
        Note: Pass options in as array of dictionaries.
        e.g.: const options = [
            {value: "a", label: "Alpha"},
            {value: "b", label: "Beta"}
        ]
        <Select options={options} />
    */

    //Render a Formik Field as a select
    render() {
        return (
            <Field {...this.props} as="select">
                { this.props.placeholder !== false && <option defaultValue>Please Select...</option> }
                {
                    //Map options from props to select options
                    this.props.options.map(option => {
                        return <option key={option.value} value={option.value}>{option.label}</option>
                    })
                }
            </Field>
        )
    }
}

export default Select;
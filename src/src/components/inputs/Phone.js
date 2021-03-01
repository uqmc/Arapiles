import React from "react"

import { Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Select from "./Select"

import { userService } from "../../services/user.js"

//Basic Phone Componnet
class Phone extends React.Component {

    constructor(props) {
        super(props);

        //Construct the name of the number and type fields
        this.numberName = this.props.name + ".number";
        this.typeName = this.props.name + ".type";
    }

    //Render the Phone and Type side by side.
    render() {
        return (
            <>
                <label htmlFor={this.numberName}>Phone Number</label>
                <Field name={this.numberName} disabled={this.props.disabled} className="text-field-short" />
                <ErrorMessage name={this.numberName} />

                <label htmlFor={this.typeName}>Type</label>
                <Select name={this.typeName} options={userService.phoneTypes} disabled={this.props.disabled} />                        
                <ErrorMessage name={this.typeName} />
                <br />
            </>
        )
    }
}

export default Phone;

// Basic phone validation object.
export const phoneValidation = Yup.object()
    .shape({
        number: Yup.string()
            .required("Required"),

        type: Yup.string()
            .ensure()
            .required("Required"),
    });
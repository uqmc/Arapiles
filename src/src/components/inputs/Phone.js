import React from "react"

import { Field, ErrorMessage } from "formik"
import Select from "./Select"

import { userService } from "../../services/user.js"

//Basic Phone Componnet
class Phone extends React.Component {

    constructor(props) {
        super(props);

        this.numberName = this.props.name + ".number";
        this.typeName = this.props.name + ".type";
    }

    render() {
        return (
            <>
            <label htmlFor={this.numberName}>Phone Number</label>
            <Field name={this.numberName} disabled={this.props.disabled} />
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
import React from "react"

import { Field, ErrorMessage } from "formik"
import * as Yup from "yup"

//Basic Address Componnet
class Address extends React.Component {

    constructor(props) {
        super(props);

        //Construct address and postcode names
        this.addressName = this.props.name + ".streetAddress";
        this.postcodeName = this.props.name + ".postcode";
    }

    render() {
        return (
            <>
            {/* TODO: Look into google places API */}
            <label htmlFor={this.addressName}>Address</label>
            <Field name={this.addressName} disabled={this.props.disabled} />
            <ErrorMessage name={this.addressName} />
            <br />

            <label htmlFor={this.postcodeName}>Postcode</label>
            <Field name={this.postcodeName} disabled={this.props.disabled} />
            <ErrorMessage name={this.postcodeName} />
            <br />
            </>
        )
    }
}

export default Address;

//Basic Address Validation Object
export const addressValidation = Yup.object()
    .shape({
        streetAddress: Yup.string()
            .required("Required"),

        postcode: Yup.number()
            .positive("Postcode must be greater than 0")
            .integer("Postcode must be an integer")
            .required("Required")
    });
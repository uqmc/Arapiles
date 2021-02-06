import React from "react"

import { Field, ErrorMessage } from "formik"

//Basic Address Componnet
class Address extends React.Component {

    constructor(props) {
        super(props);

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
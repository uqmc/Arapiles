import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from "@material-ui/core";
import Phone, { phoneValidation } from "../inputs/Phone";
import Address, { addressValidation } from "../inputs/Address";

import ResetPassword from "../ResetPassword";
import { userService } from "../../services/user.js"

//Basic Emergency Contact component
class EmergencyContact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            success: false
        }
    }

    validationSchema = Yup.object().shape({
        emergencyContact: Yup.object().shape({
            name: Yup.string()
                .required("Required"),

            phoneNumber: phoneValidation,

            address: addressValidation
        })
    });


    handleSubmit = async (data, actions) => {
        //Attempt to update user data
        const response = this.props.admin ? await userService.update(this.props.id, data) : await userService.updateMe(data);

        //Check if request was successful
        if (response === true) {
            this.setState({
                success: true,
                edit: false
            });
        } else {
            this.setState({success: false});
            actions.setFieldError('general', response);
        }

        actions.setSubmitting(false);
    }

    render() {
        return (
            <Formik
                initialValues = {this.props.data}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>  
                    <label htmlFor="emergencyContact.name">Contact Name</label>
                    <Field name="emergencyContact.name" disabled={!this.state.edit} />
                    <ErrorMessage name="emergencyContact.name" />
                    <br />
                    
                    <Phone name="emergenctContact.phoneNumber" disabled={!this.state.edit} />

                    <Address name="emergencyContact.address" disabled={!this.state.edit} />
                </Form>
            )}
            </Formik>
        )
    }
}

export default EmergencyContact;
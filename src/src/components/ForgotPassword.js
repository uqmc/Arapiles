import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from '@material-ui/core';

//Authentication services, used to send forgot password request 
import { authenticationService } from "../services/authentication.js"

//Basic Forgot password component
class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false
        }
    }

    validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid Email")
            .required("Please type in your Email")
    });

    //Function to handle forgot password form submission
    handleSubmit = async (data, actions) => {
        //Attempt to send reset password email
        const response = await authenticationService.forgotPassword(data.email);

        //Check if request was successful
        if (response === true) {
            this.setState({success: true});
        } else {
            this.setState({success: false});
            actions.setFieldError('general', response);
        }

        actions.setSubmitting(false);
    }

    //Simple Form with email and submit button
    render() {
        return (
            <Formik
                initialValues = {{}}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                    <br />

                    {
                        this.state.success
                        ? <span style={{color: "green"}}>Please check your email for link to reset your password.</span>
                        : !formProps.isSubmitting && <span style={{color: "red"}}>{formProps.errors.general}</span>
                    }
                    <br/>
                    <button
                        className="btn-lovely"
                        disabled={formProps.isSubmitting}
                        onClick={formProps.handleSubmit}
                    >
                        Reset Password 
                    </button>
                </Form>
            )}
            </Formik>
        )
    }
}

export default ForgotPassword;
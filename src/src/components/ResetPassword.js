import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from '@material-ui/core';

//Authentication services, used to send reset password request
import { authenticationService } from "../services/authentication.js"

//Basic Reset password component
class ResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false
        }
    }

    validationSchema = Yup.object().shape({
        password: Yup.string()
            .required("Required"),

        passwordConfirmation: Yup.string()
            .required("Required")
    });

    //Function to handle reset password form submission
    handleSubmit = async (data, actions) => {
        //Attempt to reset password 
        const response = await authenticationService.resetPassword(this.props.privateCode, data.password, data.passwordConfirmation);

        //Check if login was successful
        if (response === true) {
            //navigate("/");
            this.setState({
                success: true
            })
        } else {
            actions.setFieldError('general', response);
        }

        actions.setSubmitting(false);
    }

    //Simple Form with passwords and submit button
    render() {
        return (
            <Formik
                initialValues = {{}}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                    <br />

                    <label htmlFor="passwordConfirmation">Confirm Password</label>
                    <Field name="passwordConfirmation" type="password" />
                    <ErrorMessage name="passwordConfirmation" />
                    <br />

                    {
                        this.state.success
                        ? <span style={{color: "green"}}>Your password has been reset.</span>
                        : <span style={{color: "red"}}>{formProps.errors.general}</span>
                    }
                    <br />

                    <Button
                        className="btn draw-border"
                        disabled={formProps.isSubmitting || this.state.success}
                        onClick={formProps.handleSubmit}
                    >
                        Reset Password
                    </Button>
                </Form>
            )}
            </Formik>
        )
    }
}

export default ResetPassword;
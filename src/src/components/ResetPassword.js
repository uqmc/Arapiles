import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from '@material-ui/core';

import { Link } from "gatsby"

//Authentication services, used to send reset password request
import { authenticationService } from "../services/authentication.js"

//User serivces, used to update password
import { userService } from "../services/user.js"

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
            .equals([Yup.ref("password"), null], "Passwords don't match")
            .required("Required")
    });

    //Function to handle reset password form submission
    handleSubmit = async (data, actions) => {
        //Attempt to reset password 
        const response = this.props.privateCode
            ? await authenticationService.resetPassword(this.props.privateCode, data.password, data.passwordConfirmation)
            : await userService.updateMe({
                password: data.password
            });

        //Check if reset was successful
        if (response === true) {
            this.setState({
                success: true
            });

            if (this.props.onSuccess) {
                this.props.onSuccess();
            }

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
                        disabled={formProps.isSubmitting || (this.state.success && this.props.privateCode)}
                        onClick={formProps.handleSubmit}
                    >
                        Reset Password
                    </Button>

                    {/*If successful password reset (and not logged in)*/}
                    { this.state.success && this.props.privateCode && 
                        <Link to="/login"><Button className="btn draw-border">Login</Button></Link>
                    }
                </Form>
            )}
            </Formik>
        )
    }
}

export default ResetPassword;
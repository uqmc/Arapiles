import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from '@material-ui/core';

//navigate used to redirect
import { navigate } from "gatsby"

//Authentication services for logging in
import { authenticationService } from "../services/authentication.js"

//Basic Login componnent
//For now just used for testing purposes.
//Based off of: https://www.gatsbyjs.com/tutorial/authentication-tutorial/
class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    validationSchema = Yup.object().shape({
        identifier: Yup.string()
            .required("Required"),

        password: Yup.string()
            .required("Required")
    }); 

    //Function to handle login form submission
    handleSubmit = async (data, actions) => {
        //Attempt to log in with identifier and password provided
        const response = await authenticationService.login(data.identifier, data.password);

        //Check if login was successful
        if (response === true) {
            //TODO: redirect to user profile
            navigate("/profile");
        } else {
            actions.setFieldError('general', response);
        }

        actions.setSubmitting(false);
    }

    //Basic Component Renderer
    render() {
        return (
            <Formik
                initialValues = {{}}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>
                    <label htmlFor="identifier">Username</label>
                    <Field name="identifier" />
                    <ErrorMessage name="identifier" />
                    <br />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />
                    <br />

                    {
                        formProps.isSubmitting
                        ? <LinearProgress />
                        : <div style={{color: "red"}}>{formProps.errors.general}</div>
                    }
                    <Button
                        className="btn draw-border"
                        disabled={formProps.isSubmitting}
                        onClick={formProps.handleSubmit}
                    >
                        Login!
                    </Button>
                        <Button
                            className="btn draw-border"
                            disabled={formProps.isSubmitting}
                            onClick={() => {
                                navigate("/sign-up")
                            }}
                        >
                            Sign Up!
                        </Button>
                </Form>
            )}
            </Formik>
        )
    }
}

export default Login;
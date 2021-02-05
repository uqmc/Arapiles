import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from '@material-ui/core';

//Authentication services, used to send forgot password request 
import { authenticationService } from "../services/authentication.js"

//Basic Tapes component
class Tapes extends React.Component {

    constructor(props) {
        super(props);

        this.tapes = [
            "blackTape",
            "blueTape",
            "greenTape",
            "orangeTape",
            "redTape",
            "whiteTape",
            "yellowTape"
        ];

        this.state = {
            edit: false
        }
    }

    //Function to handle forgot password form submission
    handleSubmit = async (data, actions) => {
        console.log(data);
        return;
        //Attempt to send reset password email
        const response = await authenticationService.update(this.props.id, data);

        //Check if request was successful
        if (response === true) {
            this.setState({edit: false});
        } else {
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
                        {
                            this.tapes.map((tape) => {
                                //Convert camelCase to Sentence Case
                                const label = tape.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {return str.toUpperCase()});
                                return (
                                    <>
                                        <label htmlFor={tape}>{label}</label>
                                        <Field name={tape} type="checkbox" />
                                    </>
                                );
                            })

                            this.state.success
                            ? <span style={{color: "green"}}>Please check your email for link to reset your password.</span>
                            : !formProps.isSubmitting && <span style={{color: "red"}}>{formProps.errors.general}</span>
                        }
                        <br/>
                        <Button
                            className="btn draw-border"
                            disabled={formProps.isSubmitting}
                            onClick={formProps.handleSubmit}
                        >
                            Submit 
                        </Button>
                    </Form>
                )
            }
        )
    }
}

export default Tapes;
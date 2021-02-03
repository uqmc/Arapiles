import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from '@material-ui/core';

import { userService } from "../services/user.js"

//Basic User profile component
class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false,
            edit: false
        }
    }

    validationSchema = Yup.object().shape({
    });

    //Function to handle forgot password form submission
    handleSubmit = async (data, actions) => {
        //Attempt to send reset password email
        const response = this.props.id ? await userService.update(this.props.id, data) : await userService.updateMe(data);

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

    //Simple Form with email and submit button
    render() {
        return (
            <Formik
                initialValues = {this.props.data}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>
                    {
                        this.state.success
                        ? <span style={{color: "green"}}>Your details have been updated.</span>
                        : !formProps.isSubmitting && <span style={{color: "red"}}>{formProps.errors.general}</span>
                    }
                    <br/>
                    { this.state.edit &&
                        <Button
                            className="btn draw-border"
                            disabled={formProps.isSubmitting}
                            onClick={formProps.handleSubmit}
                        >
                            Update   
                        </Button>
                    }
                </Form>
            )}
            </Formik>
        )
    }
}

export default Profile;
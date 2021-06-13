import React from "react"

import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { Button } from '@material-ui/core';

import { userService } from "../../services/user.js"

//Basic Tests component
class Tests extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            edit: false,
        }
    }
    
    validationSchema = Yup.object().shape({
        swimTestCompleted: Yup.boolean()
    });

    handleSubmit = async (data, actions) => {
        const response = await userService.update(this.props.id, data);
        actions.setSubmitting(false);

        //Check if request was successful
        if (response === true) {
            this.setState({ edit: false });
        } else {
            actions.setFieldError('general', response);
        }

    }

    render() {
        return (
            <>
                {this.props.admin &&
                    <button
                        className="btn"
                        onClick={() => {this.setState({edit: !this.state.edit})}}
                    >
                        {this.state.edit ? "Cancel" : "Edit Tests"}
                    </button>
                }
                <Formik
                    key="testsFormik"
                    initialValues={{
                        swimTestCompleted: this.props.data.swimTestCompleted
                    }}
                    validationSchema={this.validationSchema}
                    onSubmit={this.handleSubmit}
                >
                {(formProps) => (
                    <Form>
                        <label htmlFor="swimTestCompleted">Swim Test Completed?</label>
                        <Field name="swimTestCompleted" type="checkbox" disabled={!this.state.edit} />
                        { !formProps.isSubmitting && <span style={{color: "red"}}>{formProps.errors.general}</span> }
                        <br/>
                        { this.state.edit &&
                            <button
                                className="btn"
                                disabled={formProps.isSubmitting}
                                onClick={() => {
                                    formProps.handleSubmit();
                                }}
                            >
                                Submit 
                            </button>
                        }
                    </Form>
                    )
                }
                </Formik>
            </>
        )
    }
}

export default Tests;
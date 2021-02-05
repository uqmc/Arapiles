import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from '@material-ui/core';

import { userService } from "../services/user.js"

//Basic Tapes component
class Tapes extends React.Component {

    constructor(props) {
        super(props);

        this.userTapes = this.props.tapes ?? {};

        this.tapes = [
            "blackTape",
            "blueTape",
            "greenTape",
            "orangeTape",
            "redTape",
            "whiteTape",
            "yellowTape"
        ];

        this.tapeValidation = {};
        for (const tape of this.tapes) {
            this.tapeValidation[tape] = Yup.boolean()
        }


        this.state = {
            edit: false
        }
    }
    
    validationSchema = Yup.object().shape(this.tapeValidation);

    //Function to handle forgot password form submission
    handleSubmit = async (data, actions) => {
        //Attempt to send reset password email
        const response = await userService.update(this.props.id, {tapes: data});

        //Check if request was successful
        if (response === true) {
            this.userTapes = data;
            this.setState({edit: false});
        } else {
            actions.setFieldError('general', response);
        }

        actions.setSubmitting(false);
    }

    camelToSentence(text) {
        return text.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {return str.toUpperCase()})
    }

    renderForm() {
        return (
            <Formik
                initialValues={this.userTapes}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>
                    {
                        this.tapes.map((tape) => {
                            //Convert camelCase to Sentence Case
                            return (
                                <>
                                    <label htmlFor={tape}>{this.camelToSentence(tape)}</label>
                                    <Field name={tape} type="checkbox" />
                                </>
                            );
                        })
                    }
                    { !formProps.isSubmitting && <span style={{color: "red"}}>{formProps.errors.general}</span> }
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
            </Formik>
        )
    }

    renderList() {
        const tapeList = 
            this.tapes.map((tape) => {
                if (this.userTapes[tape]) {
                    return <li>{this.camelToSentence(tape)}</li>
                }
            }).filter(x => x);

        return (<>
            {
                tapeList.length > 0
                ? <ul>{tapeList}</ul>
                : <p>No Tapes</p>
            }
        </>)
    }

    render() {
        return (
            <>
                <Button
                    className="btn draw-border"
                    onClick={() => {this.setState({edit: !this.state.edit})}}
                >
                    {this.state.edit ? "Cancel" : "Edit Tapes"}
                </Button>
                {this.state.edit ? this.renderForm() : this.renderList()}
            </>
        )
    }
}

export default Tapes;
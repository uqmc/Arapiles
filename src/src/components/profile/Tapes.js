import React from "react"

import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { Button } from '@material-ui/core';

import { userService } from "../../services/user.js"

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

        this.tapeValidation = {};
        for (const tape of this.tapes) {
            this.tapeValidation[tape] = Yup.boolean()
        }

        this.state = {
            edit: false,
            userTapes: this.props.tapes ?? {}
        }
    }
    
    validationSchema = Yup.object().shape(this.tapeValidation);

    handleSubmit = async (data, actions) => {
        const response = await userService.update(this.props.id, {tapes: data});
        actions.setSubmitting(false);

        //Check if request was successful
        if (response === true) {
            this.setState({
                edit: false,
                userTapes: data
            });
        } else {
            actions.setFieldError('general', response);
        }

    }

    camelToSentence(text) {
        return text.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => {return str.toUpperCase()})
    }

    renderForm() {
        return (
            <Formik
                key="tapesFormik"
                initialValues={this.state.userTapes}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>
                    {
                        this.tapes.map((tape) => {
                            //I have to put the elements in a React.Fragment with a key otherwise react stops working properly
                            return (
                                <React.Fragment key={tape}>
                                    <label htmlFor={tape}>{this.camelToSentence(tape)}</label>
                                    <Field name={tape} type="checkbox" />
                                </React.Fragment>
                            );
                        })
                    }
                    { !formProps.isSubmitting && <span style={{color: "red"}}>{formProps.errors.general}</span> }
                    <br/>
                    <button
                        className="btn"
                        disabled={formProps.isSubmitting}
                        onClick={() => {
                            formProps.handleSubmit();
                        }}
                    >
                        Submit 
                    </button>
                </Form>
                )
            }
            </Formik>
        )
    }

    renderList() {
        const tapeList = 
            this.tapes.map((tape) => {
                if (this.state.userTapes[tape]) {
                    return <li key={tape}>{this.camelToSentence(tape)}</li>
                }
                return null;
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
                {this.props.admin &&
                    <button
                        className="btn"
                        onClick={() => {this.setState({edit: !this.state.edit})}}
                    >
                        {this.state.edit ? "Cancel" : "Edit Tapes"}
                    </button>
                }
                {this.state.edit ? this.renderForm() : this.renderList()}
            </>
        )
    }
}

export default Tapes;
import React from "react"

import { navigate } from "gatsby";

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button, LinearProgress } from '@material-ui/core';
import Select from "./inputs/Select";

import { membershipService } from "../services/membership.js"
import { CardElement } from "@stripe/react-stripe-js";

//Basic Login componnent
class Payment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            memberships: [],
            validationSchema: Yup.object().shape({}),
            success: false,
            membershipError: false
        }
    }

    async componentDidMount() {
        const memberships = await membershipService.memberships();
        if (memberships) {
            this.setState({
                memberships: memberships.data.map((membership) => {
                    return {
                        label: membership.name,
                        value: membership.id   
                    }
                }),
                validationSchema: Yup.object().shape({
                    membership: Yup.number()
                        .typeError("Please select a membership")
                        //.oneOf(memberships.data.map((membership) => { return membership.id }), "Please select a valid membership") 
                })
            });
        } else {
            this.setState({ membershipError: true });
        }
    }

    handleSubmit = async (data, actions) => {
        const {stripe, elements} = this.props;

        const token = await stripe.createToken(elements.getElement(CardElement));

        const res = await membershipService.pay(data.membership, token.token.id);

        if (res === true) {
            this.setState({ success: true });
        } else {
            actions.setFieldError('general', res);
        }

        actions.setSubmitting(false);
    }

    //Basic Component Renderer
    render() {
        if (this.state.success) {
            setTimeout(() => {
                navigate("/profile");
            }, 1000);
            return (
                <div>
                    <p>Your membership payment was successful. You will be redirected to your profile.</p>
                </div>
            )
        } else {
            return (
                <Formik
                    initialValues={{}}
                    validationSchema={this.state.validationSchema}
                    onSubmit={this.handleSubmit}
                >
                {(formProps) => (
                    <Form>
                        { this.state.membershipError && 
                            <div style={{color: "red"}}>An error has occured. Please try refreshing or contact a system administrator.</div> 
                        }
                        <label htmlFor="membership">Membership</label>
                        <Select name="membership" options={this.state.memberships} disabled={formProps.isSubmitting} />
                        <ErrorMessage name="membership" />
                        <br />

                        <div style={{width: "25%"}}>
                            <CardElement
                                id="card"
                                options={{
                                    iconStyle: 'solid',
                                    style: {
                                        base: {
                                            iconColor: '#c4f0ff',
                                            color: '#fff',
                                            fontWeight: 500,
                                            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                                            fontSize: '16px',
                                            fontSmoothing: 'antialiased',
                                            ':-webkit-autofill': {color: '#fce883'},
                                            '::placeholder': {color: '#87bbfd'},
                                        },
                                        invalid: {
                                          iconColor: '#ffc7ee',
                                          color: '#ffc7ee',
                                        },
                                    },
                                    hidePostalCode: true
                                }}
                            />
                        </div>
                        {
                            formProps.isSubmitting
                            ? <LinearProgress />
                            : <div style={{color: "red"}}>{formProps.errors.general}</div>
                        }
                        <Button
                            className="btn draw-border"
                            disabled={!this.props.stripe || formProps.isSubmitting}
                            onClick={formProps.handleSubmit}
                        >
                            Submit
                        </Button>
                    </Form>
                )}
                </Formik>
            )
        }
    }
}

export default Payment;
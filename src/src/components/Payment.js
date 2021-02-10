import React from "react"

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
                })
            }) 
        }
    }

    validationSchema = Yup.object().shape({
        membership: Yup.number()
            .required("Requried")
    });

    handleSubmit = async (data, actions) => {
        const {stripe, elements} = this.props;

        const token = await stripe.createToken(elements.getElement(CardElement));

        const res = await membershipService.pay(data.membership, token.token.id);
        console.log(res);
        actions.setSubmitting(false);
    }

    //Basic Component Renderer
    render() {
        return (
            <Formik
                initialValues={{}}
                validationSchema={this.validationSchema}
                onSubmit={this.handleSubmit}
            >
            {(formProps) => (
                <Form>
                    <label htmlFor="membership">Membership</label>
                    <Select name="membership" options={this.state.memberships} disabled={formProps.isSubmitting} />
                    <ErrorMessage name="membership" />
                    <br />

                    <CardElement
                        id="card"
                        options={{
                            iconStyle: 'solid',
                            style: {
                              base: {
                                iconColor: '#c4f0ff',
                                color: '#fff',
                                fontSize: '16px',
                              },
                              invalid: {
                                iconColor: '#FFC7EE',
                                color: '#FFC7EE',
                              },
                            },
                            hidePostalCode: true
                        }}
                    />
                    <button type="submit" disabled={!this.props.stripe}>Submit</button>
                </Form>
            )}
            </Formik>
        )
    }
}

export default Payment;
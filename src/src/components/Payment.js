import React from "react"

//Authentication services for logging in
import { membershipService } from "../services/membership.js"
import { CardElement } from "@stripe/react-stripe-js";

//Basic Login componnent
class Payment extends React.Component {

    handleSubmit = async (data, actions) => {
        console.log(this.props.stripe.createToken());

        actions.setSubmitting(false);
    }

    //Basic Component Renderer
    render() {
        return (
            <CardElement />
        )
    }
}

export default Payment;
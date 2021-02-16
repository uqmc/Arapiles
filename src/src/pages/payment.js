import React from "react";

import { loadStripe } from '@stripe/stripe-js';
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import Payment from "../components/Payment";
import Restrict from "../components/Restrict";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY);

const PAYMENT = () => {
    return(
        <Restrict>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({stripe, elements}) => (
                        <Payment stripe={stripe} elements={elements} />
                    )}
                </ElementsConsumer>
            </Elements>
        </Restrict>
    )
};

export default PAYMENT;

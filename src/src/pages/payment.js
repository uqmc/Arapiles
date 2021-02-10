import React, {useEffect, useState} from "react";
import PrimaryLayout from "../layouts/primaryLayout";

import { loadStripe } from '@stripe/stripe-js';
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import Payment from "../components/Payment";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY);

const PAYMENT = () => {
    localStorage.setItem("pg-open", "payment");

    return(
        <PrimaryLayout> 
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({stripe, elements}) => (
                        <Payment stripe={stripe} elements={elements} />
                    )}
                </ElementsConsumer>
            </Elements>
        </PrimaryLayout>
    )
};

export default PAYMENT;

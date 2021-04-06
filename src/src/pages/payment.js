import React, { useEffect, useContext } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";

import Payment from "../components/Payment";
import Restrict from "../components/Restrict";
import ContextConsumer from "../components/Context";

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY);

const PAYMENT = () => {

    const context = useContext(ContextConsumer);

    useEffect(() => {
        context.set({sideNavOpen: false});
    }, []);

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

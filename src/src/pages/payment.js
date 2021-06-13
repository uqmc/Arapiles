import React, { useState, useEffect }  from "react";
import { Helmet } from "react-helmet"
import { loadStripe } from '@stripe/stripe-js';
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";

import Payment from "../components/Payment";
import Restrict from "../components/Restrict";

import { userService } from "../services/user.js"
import { membershipService } from "../services/membership.js"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_KEY);

const PAYMENT = () => {
    const [user, setUser] = useState(null);

    async function getUserData() {
        const res = await userService.me();
        setUser(res.data);
    }

    useEffect( () => {
        getUserData();
    }, []);

    function getDaysLeft() {
        const daysLeft = user == null ? "" : membershipService.daysLeft(user);
        if (daysLeft < 1) {
            return "EXPIRED";
        }
        return daysLeft;
    }

    return(
        <Restrict>
            <Helmet title="UQMC | Membership" />

            <main className="content-container">
                <div className="content-full-width">
                    <h1>Membership</h1>

                    <h2>Current Membership</h2>
                    {
                        getDaysLeft() === "EXPIRED"
                            ? <span className="expired">Your membership has expired. Please renew it before participating in club activities.</span>
                            : <p>Days left on current membership: {getDaysLeft()}</p>

                    }

                    <h2>Purchase Membership</h2>
                    <p>The below card details form uses Stripe in order to receive and process your payment. 
                        The 'membership type' you select indicates how much money will be charged to the card details you enter.
                        Your UQMC account will be issued the length of membership corresponding to this membership type.</p>
                    <Elements stripe={stripePromise}>
                        <ElementsConsumer>
                            {({stripe, elements}) => (
                                <Payment stripe={stripe} elements={elements} />
                            )}
                        </ElementsConsumer>
                    </Elements>
                    <p>If you do not wish to use our online form to make the payment, you may make a bank transfer to the following details:
                        <p className="mono">
                            Holder...: UQ Mountain Club<br />
                            BSB......: 064 158<br />
                            Account #: 1006 6081 <br />
                        </p>
                        After sending your payment to these details, email <a href="mailto:uqmountainclub@gmail.com">uqmountainclub@gmail.com</a> with a screenshot of your receipt and we will
                        manually add membership to your UQMC account.
                    </p>
                </div>
            </main>
        </Restrict>
    )
};

export default PAYMENT;

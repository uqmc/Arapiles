import React, { useState, useEffect } from "react"

import { Redirect } from "@reach/router";

import Spinner from "../components/Spinner"
import { userService } from "../services/user.js"
import { authenticationService } from "../services/authentication.js"
import { membershipService } from "../services/membership.js"

const Restrict = ({ children, membership }) =>  {
    const [user, setUser] = useState(null);
    const [doLoginRedirect, setDoLoginRedirect] = useState(false);
    const [doPaymentRedirect, setDoPaymentRedirect] = useState(false);

    async function getUserData() {
        const res = await userService.me();
        setUser(res.data);
    }

    useEffect(() => { getUserData() }, []);

    if(doLoginRedirect) {
        return(
            <Redirect noThrow to="/login" />
        );
    }

    if(doPaymentRedirect) {
        return(
            <Redirect noThrow to="/payment" />
        );
    }

    if (authenticationService.isLoggedIn()) {
        if (!user && membership) {
            return <Spinner />
        } else {
            if (!membership || membershipService.isValid(user)) {
                return children;
            } else {
                setTimeout(() => {
                    setDoPaymentRedirect(true);
                }, 1000);
                return (
                    <p>Invalid membership. Redirecting</p>
                );
            }
        }
    } else {
        setTimeout(() => {
            setDoLoginRedirect(true);
        }, 1000);
        return (
            <p>Not logged in. Redirecting</p>
        )
    }

};

export default Restrict;
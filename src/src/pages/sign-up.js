import React from "react";

import { Redirect } from "@reach/router";

import SignUp from "../components/SignUp";

import { authenticationService } from "../services/authentication.js"

//Basic Sign Up page
const SIGN_UP = () => {        
    if (authenticationService.isLoggedIn()) {
        return(
            <Redirect noThrow to="/profile" />
        )
    }

    return (
        <>
        	<h1>Sign Up</h1>
            <SignUp />
        </>
    );
};

export default SIGN_UP;

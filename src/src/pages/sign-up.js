import React from "react";

import { navigate } from "gatsby"

import SignUp from "../components/SignUp";

import { authenticationService } from "../services/authentication.js"

//Basic Sign Up page
const SIGN_UP = () => {        
    if (authenticationService.isLoggedIn()) {
        navigate("/profile");   
    }

    return (
        <>
        	<h1>Sign Up</h1>
            <SignUp />
        </>
    );
};

export default SIGN_UP;

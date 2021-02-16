import React from "react";

import { navigate } from "gatsby"

import ForgotPassword from "../components/ForgotPassword";

import { authenticationService } from "../services/authentication.js"

//Basic Forgot Password page
const FORGOT_PASSWORD = () => {
    if (authenticationService.isLoggedIn()) {
        navigate("/profile");   
    }

    return (
        <>
        	<h1>Forgot Password</h1>
        	<ForgotPassword />
        </>
    );
};

export default FORGOT_PASSWORD;

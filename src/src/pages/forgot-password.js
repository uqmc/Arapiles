import React from "react";

import { navigate } from "gatsby"

import PrimaryLayout from "../layouts/primaryLayout";
import ForgotPassword from "../components/ForgotPassword";

import { authenticationService } from "../services/authentication.js"

//Basic Forgot Password page
const FORGOT_PASSWORD = () => {
    if (authenticationService.isLoggedIn()) {
        navigate("/profile");   
    }

    return (
        <PrimaryLayout>
        	<h1>Forgot Password</h1>
        	<ForgotPassword />
        </PrimaryLayout>
    );
};

export default FORGOT_PASSWORD;

import React from "react";

import { navigate } from "gatsby"

import PrimaryLayout from "../layouts/primaryLayout";
import SignUp from "../components/SignUp";

import { authenticationService } from "../services/authentication.js"

//Basic Sign Up page
const SIGN_UP = () => {
    if (authenticationService.isLoggedIn()) {
        navigate("/profile");   
    }

    return (
        <PrimaryLayout>
            <SignUp />
        </PrimaryLayout>
    );
};

export default SIGN_UP;

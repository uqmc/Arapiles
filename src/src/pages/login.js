import React from "react";

import { Redirect } from "@reach/router";

import Login from "../components/login";

import { authenticationService } from "../services/authentication.js"

//Simple Login page
const LOGIN = () => {
    if (authenticationService.isLoggedIn()) {
        return(
            <Redirect noThrow to="/profile" />
        );
    }

    return ( 
        <>
            <h1>Login</h1>
            <Login />
        </>
    );
};

export default LOGIN;

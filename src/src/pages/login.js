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
        <main className="content-container">
            <h1>Login</h1>
            <Login />
        </main>
    );
};

export default LOGIN;

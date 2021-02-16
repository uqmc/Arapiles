import React from "react";

import { navigate } from "gatsby"

import Login from "../components/Login";

import { authenticationService } from "../services/authentication.js"

//Simple Login page
const LOGIN = () => {
    if (authenticationService.isLoggedIn()) {
        navigate("/profile");   
    }

    return ( 
        <>
            <h1>Login</h1>
            <Login />
        </>
    );
};

export default LOGIN;

import React from "react";

import { navigate } from "gatsby"

import PrimaryLayout from "../layouts/primaryLayout";
import Restrict from "../components/Restrict";
import Users from "../components/Users";

//Simple Users page
const USERS = () => {
    localStorage.setItem("pg-open", "users");

    return ( 
        <PrimaryLayout>
            <Restrict>
            	<h1>Users</h1>
                <Users />
            </Restrict>
        </PrimaryLayout>
    );
};

export default USERS;

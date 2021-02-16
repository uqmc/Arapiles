import React from "react";

import Restrict from "../components/Restrict";
import Users from "../components/Users";

//Simple Users page
const USERS = () => {
    return ( 
        <Restrict>
            <h1>Users</h1>
            <Users />
        </Restrict>
    );
};

export default USERS;
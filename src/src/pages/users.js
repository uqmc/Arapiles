import React, { useEffect, useContext } from "react";

import Restrict from "../components/Restrict";
import Users from "../components/Users";
import ContextConsumer from "../components/Context";

//Simple Users page
const USERS = () => {

    const context = useContext(ContextConsumer);

    useEffect(() => {
        context.set({sideNavOpen: false});
    }, []);

    return ( 
        <Restrict>
            <h1>Users</h1>
            <Users />
        </Restrict>
    );
};

export default USERS;

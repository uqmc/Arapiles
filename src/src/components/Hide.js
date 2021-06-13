import React, { useState, useEffect }  from "react";

import Spinner from "../components/Spinner"

import { userService } from "../services/user.js"
import { authenticationService } from "../services/authentication.js"
import { membershipService } from "../services/membership.js"

const Hide = ({ children }) => {
    const [user, setUser] = useState(null);

    async function getUserData() {
        const res = await userService.me();
        setUser(res.data);
    }

    useEffect(() => { getUserData() }, []);

    if(!user) {
        return <></>;
    }
    return <></>;

    /*async function doRender() {
        if(await userService.isAdminMe()) {
            return true;
        }
    }

    return(
        <>
            { doRender() ? <>{children}</> : <></> }
        </>
    );*/
}

export default Hide;

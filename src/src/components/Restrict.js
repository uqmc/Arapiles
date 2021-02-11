import React, { useState, useEffect } from "react"

import { navigate } from "gatsby";

import { userService } from "../services/user.js"
import { authenticationService } from "../services/authentication.js"
import { membershipService } from "../services/membership.js"

const Restrict = ({ children, membership }) =>  {
    const [user, setUser] = useState(null);

    async function getUserData() {
        const res = await userService.me();
        setUser(res.data);
    }

    useEffect(() => { getUserData() }, []);

    if (authenticationService.isLoggedIn()) {
        if (!user && membership) {
            return <p>Loading...</p>
        } else {
            if (!membership || membershipService.isValid(user)) {
                return children;
            } else {
                setTimeout(() => {
                    navigate("/payment");
                }, 1000);
                return (
                    <p>Invalid membership. Redirecting</p>
                );
            }
        }
    } else {
        setTimeout(() => {
            navigate("/login");
        }, 1000);
        return (
            <p>Not logged in. Redirecting</p>
        )
    }

};

export default Restrict;
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"
import { userService } from "../services/user";

import Profile from "../components/Profile";
import Spinner from "../components/Spinner";
import Restrict from "../components/Restrict";

//Basic profile page
const PROFILE = ({ id }) => {

    const [data, setData] = useState(null);
    
    async function getProfileData() {
        const response = id ? await userService.findOne(id) : await userService.me();

        if (response) {
            if (response.data) {
                setData(response.data);
            } else {
                setData({
                    error: "No user found."
                })
            }
        } else {
            setData({
                error: "You do not have permissions to access this profile."
            });
        }
    }

    function render() {
        if (data) {
            if (data.error) {
                return <p style={{color: "red"}}>{data.error}</p>;
            } else {
                return <Profile data={data} id={id} />
            }
        } else {
            return <Spinner />;
        }
    }

    useEffect(() => {
        getProfileData();
    }, []);

    return (
        <Restrict>
            <Helmet title="UQMC | Profile" />
            <main className="content-container">
                { render() }
            </main>
        </Restrict>
    );
};

export default PROFILE;

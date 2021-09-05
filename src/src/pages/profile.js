import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"
import { userService } from "../services/user";

import Profile from "../components/Profile";
import Spinner from "../components/Spinner";
import Restrict from "../components/Restrict";

//Basic profile page
const PROFILE = () => {
    const [data, setData] = useState(null);
    
    async function getProfileData() {
        const response = await userService.me();

        if (response.data) {
            setData(response.data);
        } else {
            setData({
                error: "Something went wrong fetching your user data. This is likely a KNOWN bug that's affecting some users (who knows why, hey, websites suck?). If you're seeing this, please send a screenshot of this page to uqmountainclub@gmail.com and we'll get it fixed for you ASAP."
            })
        }
    }

    function render() {
        if (data) {
            if (data.error) {
                return <p style={{color: "red"}}>{data.error}</p>;
            } else {
                return <Profile data={data} />
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

import React, {useEffect, useState} from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { userService } from "../services/user";

import Profile from "../components/Profile";
import Spinner from "../components/Spinner";
import Restrict from "../components/Restrict";

//Basic profile page
const PROFILE = () => {
    const [data, setData] = useState(null);
    const [id] = useQueryParam("id", StringParam); 
    
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
        localStorage.setItem("pg-open", "profile");
        getProfileData();
    }, []);

    localStorage.setItem("pg-open", "profile");

    return (
        <Restrict>
            { render() }
        </Restrict>
    );
};

export default PROFILE;

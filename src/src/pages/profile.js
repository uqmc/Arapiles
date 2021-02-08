import React, {useEffect, useState} from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { userService } from "../services/user";

import Profile from "../components/Profile";
import Spinner from "../components/Spinner";

//Basic profile page
const PROFILE = () => {
    const [data, setData] = useState(null);
    const [id] = useQueryParam("id", StringParam); 
    
    async function getProfileData() {
        const response = id ? await userService.find(id) : await userService.me();

        if (response) {
            setData(response["data"]);
        } else {
            setData({
                error: "Error"
            });
        }
    }

    useEffect(() => {
        localStorage.setItem("pg-open", "profile");
        getProfileData();
    }, []);

    if (data) {
        if (data.error) {
            return <span style={{color: "red"}}>{data.error}</span>;
        } else {
            return <Profile data={data} id={id} />;
        }
    } else {
        return <Spinner></Spinner>;
    }
};

export default PROFILE;

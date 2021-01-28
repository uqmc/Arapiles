import React, {useEffect, useState} from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { userService } from "../services/user";

import PrimaryLayout from "../layouts/primaryLayout";

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

    function render() {
        if (data) {
            if (data.error) {
                return <span style={{color: "red"}}>{data.error}</span>;
            } else {
                //TODO: Create Profile component and render relevant details
                return <p>{data.email}</p> 
            }
        } else {
            return <p>Loading...</p>;
        }
    }

    useEffect(() => {
        getProfileData();
    }, []);

    return (
        <PrimaryLayout>
            { render() }
        </PrimaryLayout>
    );
};

export default PROFILE;

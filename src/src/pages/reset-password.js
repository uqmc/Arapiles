import React, { useEffect } from "react";

import { useQueryParam, StringParam } from "use-query-params";

import ResetPassword from "../components/ResetPassword";

//Basic Reset Password page
const RESET_PASSWORD = () => {
	//Get Private Code provided by Strapi and to pass on to component.
    const [privateCode] = useQueryParam("code", StringParam);
    
    useEffect(() => {
        localStorage.setItem("pg-open", "reset-password");
    }, []);

    return (
        <>
            <h1>Reset Password</h1>
        	<ResetPassword privateCode={privateCode} />
        </>
    );
};

export default RESET_PASSWORD;

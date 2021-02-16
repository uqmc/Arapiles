import React, { useEffect } from "react";

import { navigate } from "gatsby";

import { useQueryParam, StringParam } from "use-query-params";

import ResetPassword from "../components/ResetPassword";

//Basic Reset Password page
const RESET_PASSWORD = () => {
	//Get Private Code provided by Strapi and to pass on to component.
    const [privateCode] = useQueryParam("code", StringParam);

    localStorage.setItem("pg-open", "reset-password");

	if (!privateCode) {
    	navigate("/");
    	return (<></>)
    } else {
	    return (
	        <PrimaryLayout>
	            <h1>Reset Password</h1>
	        	<ResetPassword privateCode={privateCode} />
	        </PrimaryLayout>
	    );
    }
};

export default RESET_PASSWORD;

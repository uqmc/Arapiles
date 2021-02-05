import React from "react";

import { useQueryParam, StringParam } from "use-query-params";

import PrimaryLayout from "../layouts/primaryLayout";
import ResetPassword from "../components/ResetPassword";

//Basic Reset Password page
const RESET_PASSWORD = () => {
	//Get Private Code provided by Strapi and to pass on to component.
    const [privateCode] = useQueryParam("code", StringParam);
    
    localStorage.setItem("pg-open", "reset-password");

    return (
        <PrimaryLayout>
            <h1>Reset Password</h1>
        	<ResetPassword privateCode={privateCode} />
        </PrimaryLayout>
    );
};

export default RESET_PASSWORD;

import React from "react";

import PrimaryLayout from "../layouts/primaryLayout";
import ForgotPassword from "../components/ForgotPassword";

//Basic Forgot Password page
const FORGOT_PASSWORD = () => {
    return (
        <PrimaryLayout>
        	<h1>Forgot Password</h1>
        	<ForgotPassword />
        </PrimaryLayout>
    );
};

export default FORGOT_PASSWORD;

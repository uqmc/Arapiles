import React from "react";
import PrimaryLayout from "../../layouts/primaryLayout";

const StartHere = () => {
    localStorage.setItem("dd-one", "true")
    localStorage.setItem("pg-open", "skills-home");

    return (
        <PrimaryLayout> 
            Skills book home
        </PrimaryLayout>
    );
};

export default StartHere;

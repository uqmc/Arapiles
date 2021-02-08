import React, { useEffect } from "react";

const StartHere = () => {
    useEffect(() => {
        localStorage.setItem("dd-one", "true")
        localStorage.setItem("pg-open", "skills-home");
    }, []);

    return (
        <p> 
            Skills book home
        </p>
    );
};

export default StartHere;

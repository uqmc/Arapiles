import React, { useEffect } from "react";

const StartHere = () => {
    useEffect(() => {
        localStorage.setItem("dd-one", "true")
        localStorage.setItem("pg-open", "skills-home");
    }, []);

    return (
        <> 
            <h1>The Skills Book</h1>
            <div className="head-divider"></div>
        </>
    );
};

export default StartHere;

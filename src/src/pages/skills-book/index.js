import React, { useEffect, useContext } from "react";

import ContextConsumer from "../../components/Context";

const StartHere = () => {

    const context = useContext(ContextConsumer);

    useEffect(() => {
        context.set({sideNavOpen: false});
    }, []);

    return (
        <> 
            <h1>The Skills Book</h1>
            <div className="head-divider"></div>
        </>
    );
};

export default StartHere;

import React from "react";

import ContextConsumer from "../components/Context";

const Hamburger = () => {

    return( 
        <ContextConsumer>
            {({ data, set }) => (
                <div className={data.sideNavOpen ? "hamburger-container side-nav-open" : "hamburger-container side-nav-closed"}>
                    <a href="javascript:void(0);" onClick={() => set({ sideNavOpen: !data.sideNavOpen })}>
                        <i className="fa fa-bars hamburger" aria-hidden="true"></i>
                    </a>
                </div>
            )}
        </ContextConsumer>
    );
}

/*

https://youtu.be/0lBjcaMokvo

*/

export default Hamburger;
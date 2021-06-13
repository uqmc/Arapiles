import React from "react";

import SubNav from "../components/SubNav";

const TapePage = (props) => {
    let navOptions = [
        {
            label: "Yellow Tape",
            to: "/skills-book/yellow"
        },
        {
            label: "Blue Tape",
            to: "/skills-book/blue"
        },
        {
            label: "Green Tape",
            to: "/skills-book/green"
        },
        {
            label: "Red Tape",
            to: "/skills-book/red"
        },
        {
            label: "Orange Tape",
            to: "/skills-book/orange"
        },
        {
            label: "Black Tape",
            to: "/skills-book/black"
        },
        {
            label: "White Tape",
            to: "/skills-book/white"
        },
    ]

    return(
        <>
            <SubNav navOptions={navOptions} />
            <main className="content-container">
                <div className="content-full-width">
                    { props.children }
                </div>
            </main>
        </>
    );
};

export default TapePage;
import React from "react";
import { Link } from "gatsby";

import Hide from "../components/Hide";

const TopNav = () => {
    let navLinks = [
        <ul className="topnav-links">
            {/* <Link to="/dashboard"><li>Dashboard</li></Link> */}
            <Link to="/skills-book"><li>Skills Book</li></Link>
            <Link to="/events"><li>Events</li></Link>
            <Link to="/the-team"><li>The Team</li></Link>
            <Link to="/faq"><li>FAQ</li></Link>
            <Link to="/payment"><li>Membership</li></Link>
            <Link to="/profile"><li>Profile</li></Link>
        </ul>
    ];

    return(
        <>
            <div className="topnav-container content-full-width">
                <div className="topnav-logo-container">
                    <Link className="topnav-logo" to="/">
                        <img src="logo.png"></img>
                        <p>University of Queensland<br /><span className="highlight">Mountain Club</span></p>
                    </Link>
                </div>
                {navLinks}
            </div>
        </>
    );
}

export default TopNav;
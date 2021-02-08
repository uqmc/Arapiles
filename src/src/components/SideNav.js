import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

const SideNav = () => {
    //TODO: Find a better way to handle dropdown state that's DRY when multiple dropdowns
    //      are present. Preferably one that stores state in a more Reacty way than
    //      localStorage. Furthermore, the dropdown should be open when you go to one of the
    //      pages that are a member of the dropdown menu by default - not just when it is 
    //      navigated to from the dropdown directly. This will do for now.
    const [dropdownOne, setDropdownOne] = useState(localStorage.getItem("dd-one") === "true");
    
    useEffect(() => {
        localStorage.setItem("dd-one", dropdownOne);
    }, [dropdownOne]);

    const toggleDropdownOne = () => {
        setDropdownOne(!dropdownOne);
    };
    
    const dropMenuOne = <>
        <ul className="sidenav-buttons" id="drop-1">
            <li className="sidenav-button"><Link to="/skills-book" className={localStorage.getItem("pg-open") === "skills-home" ? "nav-item-open" : ""}>Start Here</Link></li>
            <li className="sidenav-button"><Link to="/skills-book/yellow" className={localStorage.getItem("pg-open") === "yellow-tape" ? "nav-item-open" : ""}>Yellow</Link></li>
            <li className="sidenav-button"><Link to="/skills-book/blue" className={localStorage.getItem("pg-open") === "blue-tape" ? "nav-item-open" : ""}>Blue</Link></li>
            <li className="sidenav-button"><Link to="/skills-book/green" className={localStorage.getItem("pg-open") === "green-tape" ? "nav-item-open" : ""}>Green</Link></li>
            <li className="sidenav-button"><Link to="/skills-book/red" className={localStorage.getItem("pg-open") === "red-tape" ? "nav-item-open" : ""}>Red</Link></li>
            <li className="sidenav-button"><Link to="/skills-book/orange" className={localStorage.getItem("pg-open") === "orange-tape" ? "nav-item-open" : ""}>Orange</Link></li>
            <li className="sidenav-button"><Link to="/skills-book/black" className={localStorage.getItem("pg-open") === "black-tape" ? "nav-item-open" : ""}>Black</Link></li>
            <li className="sidenav-button"><Link to="/skills-book/white" className={localStorage.getItem("pg-open") === "white-tape" ? "nav-item-open" : ""}>White</Link></li>
        </ul>
    </>

    return(
        <div className="side-nav">
            <div className="brand-container">
                <img alt="UQMC Logo" className="brand-image" src="https://uqmc-assets.s3.nl-ams.scw.cloud/uqmc_fully_transparent_white.png"></img>
            </div>
            <ul className="sidenav-buttons">
                <li className="sidenav-button"><Link to="/home" className={localStorage.getItem("pg-open") === "home" ? "nav-item-open" : ""}>Home</Link></li>
                <li className="sidenav-button"><Link to="/the-team" className={localStorage.getItem("pg-open") === "the-team" ? "nav-item-open" : ""}>The Team</Link></li>
                <li className="sidenav-button"><Link to="/faq" className={localStorage.getItem("pg-open") === "faq" ? "nav-item-open" : ""}>FAQ</Link></li>
                <li className="sidenav-button" onClick={toggleDropdownOne}><a href="#!">Skills Book {dropdownOne ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>}</a></li>
                {dropdownOne ? dropMenuOne : null}
                <li className="sidenav-button"><Link to="/">Landing Page</Link></li>
            </ul>
            <div className="dots"></div>
        </div>
    )
}

export default SideNav;
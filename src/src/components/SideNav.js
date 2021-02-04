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
        <ul id="drop-1">
            <li><Link to="/skills-book">Start Here</Link></li>
            <li><Link to="/skills-book/yellow">Yellow</Link></li>
            <li><Link to="/skills-book/blue">Blue</Link></li>
            <li><Link to="/skills-book/green">Green</Link></li>
            <li><Link to="/skills-book/red">Red</Link></li>
            <li><Link to="/skills-book/orange">Orange</Link></li>
            <li><Link to="/skills-book/black">Black</Link></li>
            <li><Link to="/skills-book/white">White</Link></li>
        </ul>
    </>

    return(
        <div className="side-nav">
            <header>UQMC</header>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/the-team">The Team</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li onClick={toggleDropdownOne}><a href="#!">Skills Book {dropdownOne ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>}</a></li>
                {dropdownOne ? dropMenuOne : null}
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/">Landing Page</Link></li>
            </ul>
        </div>
    )
}

export default SideNav;
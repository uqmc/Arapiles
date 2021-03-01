import React from "react";
import { Link } from "gatsby";

import ContextConsumer from "../components/Context";

const SideNav = () => {

    const dropMenuOne = <>
        <ContextConsumer>
                {({ data, set }) => (
                    <ul className="sidenav-buttons" id="drop-1">
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "skills-home" })}><Link to="/skills-book" className={data.pgOpen === "skills-home" ? "nav-item-open" : ""}>Start Here</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "yellow-tape" })}><Link to="/skills-book/yellow" className={data.pgOpen === "yellow-tape" ? "nav-item-open" : ""}>Yellow</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "blue-tape" })}><Link to="/skills-book/blue" className={data.pgOpen === "blue-tape" ? "nav-item-open" : ""}>Blue</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "green-tape" })}><Link to="/skills-book/green" className={data.pgOpen === "green-tape" ? "nav-item-open" : ""}>Green</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "red-tape" })}><Link to="/skills-book/red" className={data.pgOpen === "red-tape" ? "nav-item-open" : ""}>Red</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "orange-tape" })}><Link to="/skills-book/orange" className={data.pgOpen === "orange-tape" ? "nav-item-open" : ""}>Orange</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "black-tape" })}><Link to="/skills-book/black" className={data.pgOpen === "black-tape" ? "nav-item-open" : ""}>Black</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "white-tape" })}><Link to="/skills-book/white" className={data.pgOpen === "white-tape" ? "nav-item-open" : ""}>White</Link></li>
                    </ul>
                )}
        </ContextConsumer>
    </>

    return(
        <ContextConsumer>
            {({ data, set }) => (
                <div className="side-nav">
                    <div className="brand-container">
                        <Link to="/"><img alt="UQMC Logo" className="brand-image" src="https://uqmc-assets.s3.nl-ams.scw.cloud/uqmc_fully_transparent_white.png"></img></Link>
                    </div>
                    <ul className="sidenav-buttons">
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "faq" })}><Link to="/faq" className={data.pgOpen === "faq" ? "nav-item-open" : ""}>FAQ</Link></li>

                        <li className="sidenav-button" onClick={() => set({ ddOneOpen: !data.ddOneOpen })}><a href="#!">Skills Book {data.ddOneOpen ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>}</a></li>
                        {dropMenuOne}

                    </ul>
                    <div className="dots"></div>
                </div>
            )}
        </ContextConsumer>
    )
}

export default SideNav;
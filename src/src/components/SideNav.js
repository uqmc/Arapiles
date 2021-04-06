import React from "react";
import { Link } from "gatsby";

import ContextConsumer from "../components/Context";

import { authenticationService } from '../services/authentication.js'

const SideNav = () => {

    function handleLogout (event) {
        authenticationService.logout();
    }

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
                <div className={data.sideNavOpen ? "side-nav side-nav-open" : "side-nav side-nav-closed"}>
                    <div className="brand-container">
                        <Link to="/">
                            <img alt="UQMC Logo" className="brand-image" src="https://uqmc-assets.s3.nl-ams.scw.cloud/uqmc_fully_transparent_white.png"></img>
                        </Link>
                    </div>
                    <ul className="sidenav-buttons">
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "dashboard" })}><Link to="/dashboard" className={data.pgOpen === "dashboard" ? "nav-item-open" : ""}>Dashboard</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "the-team" })}><Link to="/the-team" className={data.pgOpen === "the-team" ? "nav-item-open" : ""}>The Team</Link></li>
                        <li className="sidenav-button" onClick={() => set({ pgOpen: "faq" })}><Link to="/faq" className={data.pgOpen === "faq" ? "nav-item-open" : ""}>FAQ</Link></li>

                        <li className="sidenav-button" onClick={() => set({ ddOneOpen: !data.ddOneOpen })}><a href="#!">Skills Book {data.ddOneOpen ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-right"></i>}</a></li>
                        {data.ddOneOpen ? dropMenuOne : null}
                    </ul>
                    <ul className="sidenav-buttons">
                        { authenticationService.isLoggedIn()
                            ? <li className="sidenav-button" onClick={() => set({ pgOpen: "profile" })}><Link to="/profile" className={data.pgOpen === "profile" ? "nav-item-open" : ""}>Profile</Link></li>
                            : <></>
                        }

                        { authenticationService.isLoggedIn()
                           ? <li className="sidenav-button" onClick={() => set({ pgOpen: "payment" })}><Link to="/payment" className={data.pgOpen === "payment" ? "nav-item-open" : ""}>Membership</Link></li>
                           : <></>
                        }

                        { authenticationService.isLoggedIn()
                            ? <li className="sidenav-button" onClick={() => set({ pgOpen: "users" })}><Link to="/users">Users Directory</Link></li>
                            : <></>
                        }

                        { authenticationService.isLoggedIn()
                            ? <li className="sidenav-button" onClick={handleLogout}><Link to="/">Logout</Link></li>
                            : <li className="sidenav-button" onClick={() => set({ pgOpen: "login" })}><Link to="/login" className={data.pgOpen === "login" ? "nav-item-open" : ""}>Login / Signup</Link></li>
                        }
                    </ul>
                    <div className="dots"></div>
                </div>
            )}
        </ContextConsumer>
    )
}

export default SideNav;
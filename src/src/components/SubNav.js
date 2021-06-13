import React from "react";
import { Link } from "gatsby";

import ContextConsumer from "../components/Context";

const SubNav = ({ navOptions }) => {
    return(
        <>
            <div className="subnav-container content-full-width">
                <ul className="subnav-links">
                    { navOptions.map((option) => {
                        return(
                            <Link to={option.to}><li>{option.label}</li></Link>
                        )
                    })
                    }
                </ul>
            </div>
        </>
        /*{ <ContextConsumer>
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
                            ? <li className="sidenav-button" onClick={handleLogout}><Link to="/">Logout</Link></li>
                            : <li className="sidenav-button" onClick={() => set({ pgOpen: "login" })}><Link to="/login" className={data.pgOpen === "login" ? "nav-item-open" : ""}>Login / Signup</Link></li>
                        }
                    </ul>
                    <div className="dots"></div>
                </div>
            )}
        </ContextConsumer> }*/
    )
}

export default SubNav;
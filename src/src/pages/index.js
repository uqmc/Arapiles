import React from "react";
import { Helmet } from "react-helmet"
import { Link } from "gatsby";

import Footer from "../components/Footer";

import { authenticationService } from '../services/authentication.js'

const Index = () => {
    // But... I don't wanna go back to the Man-Village!
    // I wanna stay in the Jungle.

    function handleLogout (event) {
        authenticationService.logout();
    }

    return (
        <>
            <Helmet title="UQMC" />
            <div id="landing-nav-container">
                <nav id="landing-nav">
                    <Link id="landing-nav-logo">
                        <img src="logo.png"></img>
                    </Link>
                    <ul id="landing-nav-items">
                        <Link to="/skills-book"><li>Skills</li></Link>
                        <Link to="/events"><li>Events</li></Link>
                        { authenticationService.isLoggedIn()
                            ? <Link to="/" onClick={handleLogout}><li id="landing-nav-login">Logout</li></Link>
                            : <Link to="/login"><li id="landing-nav-login">Login</li></Link>
                        }
                    </ul>
                </nav>
            </div>
            <div className="hero-section">
                <div className="hero-container">
                    <h1>
                        Welcome to the<br /><span className="highlight">UQ Mountain Club</span>
                    </h1>
                </div>
            </div>
            <div className="content-container text-center">
                <div className="content-full-width">
                    <h1><span className="highlight">Who</span> are we?</h1>
                    <p>The UQ Mountain Club (UQMC) is a volunteer led outdoor adventure club based in Brisbane, QLD, Australia. We are a UQ Sports affiliated club that
provides a haven for climbers, hikers, and adventure-seekers of all ability levels. For 
over half a century, the club has offered a community for people looking to push 
their personal limits, plan epic adventures, make lasting friendships, and get outside 
to escape the monotone of a city life and experience the sublime.</p>
                </div>

                <div className="media-container">
                    <img src="https://cms.uqmc.org/uploads/kp_df99609ad7.jpg"></img>
                </div>
                <div className="text-center vertical-center-self">
                    <p>Two nights a week we climb at the iconic Kangaroo Point Cliffs, with routes setup for both newbies and experienced climbers. Come along, learn how to climb, and meet the club’s welcoming members.</p>
                </div>
                <div className="media-container">
                    <img src="https://cms.uqmc.org/uploads/brooyar1_cafa34ac83.jpg"></img>
                </div>
                <div className="text-center vertical-center-self">
                    <p>Every weekend, we host a climbing and a hiking trip outside of Brisbane. We will take you to some of the most gorgeous mountains and trails in South-East Queensland. These trips are at no extra cost besides being a member! Is this real life?</p>
                </div>
                <div className="media-container">
                    <img src="https://cms.uqmc.org/uploads/carousel2_39ee4b5c18.jpg"></img>
                </div>
                <div className="text-center vertical-center-self">
                    <p>After a two week free trial, joining is only $90/year and covers everything you could need to get involved. No gear or knowledge required. We will pass on generations of climbing knowledge and provide all the equipment you need to get started.</p>
                </div>

                <div className="content-full-width">
                    <h1><span className="highlight">Who</span> can join?</h1>
                    <p>UQMC is a student orientated club with most of our trips planned around the UQ undergraduate academic year. However, you don’t need to be a student to join. As long as you are friendly and psyched to explore the outdoors you will fit right in. As a volunteer led organisation we encourage all members to follow the tradition of helping spread climbing knowledge and stoke the engine of the Send Train.</p>
                </div>

                <div className="content-full-width">
                    <h1><span className="highlight">Getting</span> started.</h1>
                    <p>To start, sign up through this website and start your two week free trial. Join our Facebook page for live updates and our event calendar. Then, you can rock up to any event we have planned.</p>
                    <h2>Kangaroo point nights</h2>
                    <p>For COVID-safe reasons, you must first register yourself on the Google Sheet which will be linked on the night’s Facebook event page. Our KP nights are regular - on Tuesdays and Thursdays from 6pm to 8:30pm. We gather somewhere at the bottom of the cliff where the ropes have been setup to climb. We're hard to miss, look out for friendly faces in UQMC Exec shirts who will tell you more.</p>
                    <h2>More events</h2>
                    <p>Events are planned by the Exec Team and then added as an event to the Facebook page. Further information can be found in the description of the event such as signup sheet URLs, when, where, carpooling, and what you will need to bring. To learn about new events as they arrive, follow the Facebook page. If you have any questions, post on the group, event page, or contact one of the activity leaders.</p>
                </div>

                <div className="content-full-width">
                    <h1><span className="highlight">Developing</span> skills.</h1>
                    <p>A system of coloured tapes is used to represent competency in different areas of climbing, and members are able to progress through the tapes as their knowledge and confidence grows. New members start out by getting their Yellow Tape, which means they can top-rope belay someone without supervision (if you don’t know what this means, don’t worry!).</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;
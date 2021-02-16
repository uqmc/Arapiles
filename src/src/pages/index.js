import React, { useEffect } from "react";
import { Link } from "gatsby";

import "../styles/index.scss"
import "../styles/tooltip.scss";
import "../styles/special-button.scss";

import { authenticationService } from '../services/authentication.js'

const Home = () => {
  // But... I don't wanna go back to the Man-Village!
  // I wanna stay in the Jungle.
  useEffect(() => {
      localStorage.setItem("pg-open", "landing-page");
  }, []);

  function handleLogout (event) {
      authenticationService.logout();
  }

  return(
    <>
      <nav className="navbar">
        <div className="navbar-buttons">
          <Link to="/home"><button className="btn draw-border">Home</button></Link>
          <Link to="/skills-book"><button className="btn draw-border">Skills Book</button></Link>
          { authenticationService.isLoggedIn()
            ? <Link to="/"><button onClick={handleLogout} className="btn draw-border">Logout</button></Link>
            : <Link to="/login"><button className="btn draw-border">Login / Signup</button></Link>
          }
        </div>
      </nav>

      {/* Top-most section area - hero */}
      <div className="section bg-top">

        <div className="hero">
          <h1 className="hero-text">UQMC</h1>
        </div>

        <div className="section-content">
          <p className="intro">The UQ Mountain Club (UQMC) is a volunteer led, UQ sports affiliated club that provides a haven  for climbers, hikers, and adventure-seekers of all ability levels. For over half a century, the club has offered a community for people looking to push their personal limits, plan epic adventures, make lasting friendships, and get outside to escape the monotone of a city life and experience the sublime.</p>
        </div>
      </div>

      {/* Second section */}
      <div className="section bg-one">
        <div className="section-content">
          <h2 className="section-heading">1. What we do</h2>
          <p>
          Two nights a week we climb at the iconic Kangaroo Point Cliffs, with routes setup for both newbies and experienced climbers. Come along, learn how to climb, and meet the club’s welcoming members.<br /><br />
          Every weekend, we host a climbing and a hiking trip outside of Brisbane. We will take you to some of the most gorgeous mountains and trails in South-East Queensland. These trips are at no extra cost besides being a member! Is this real life?<br /><br />
          After a two week free trial, joining is only $90/year and covers everything you could need to get involved. No gear or knowledge required. We will pass on  generations of climbing knowledge and provide all the equipment you need to get started. 
          </p>
        </div>
      </div>

      {/* Third section - who can jooin */}
      <div className="section bg-two">
        <div className="section-content">
          <h2 className="section-heading">2. Who can join</h2>
          <p>UQMC is a student orientated club with most of our trips planned around the UQ undergraduate academic year. However, you don’t need to be a student to join. As long as you are friendly and psyched to explore the outdoors you will fit right in. As a volunteer led organisation we encourage all members to follow the tradition of helping spread climbing knowledge and stoke the engine of the <a href="#!" data-tooltip="Choo choo!">Send Train</a>.</p>
        </div>
      </div>

      {/* Fourth section */}
      <div className="section bg-three">
        <div className="section-content">
          <h2 className="section-heading">3. Getting started</h2>
          <p>To start, sign up through our <a href="https://members.uqmc.org/">membership portal</a> and start your two week free trial. Join our Facebook page for live updates and our event calendar. Then you can rock up to any event we have planned.</p>
          <h3>Kangaroo Point nights</h3>
          <p>For COVID-safe reasons, you must first register yourself on the Google Sheet which will be linked on the night’s Facebook event page. Our KP nights are regular - on Tuesdays and Fridays from 6pm to 8:30pm. To the right is a map of KP with where you can find us on your first night. Look out for friendly faces in UQMC Exec shirts who will tell you more.</p>
          <h3>More events</h3>
          <p>Events are planned by the Exec Team and then added as an event to the Facebook page. Further information can be found in the description of the event such as signup sheet URLs, when, where, carpooling, and what you will need to bring. To learn about new events as they arrive, follow the Facebook page. If you have any questions, post on the group, event page, or contact one of the activity leaders.</p>
        </div>
      </div>

      {/* Fifth section */}
      <div className="section bg-one">
        <div className="section-content">
          <h2 className="section-heading">4. 'Tapes' and competency</h2>
          <p>A system of coloured tapes is used to represent competency in different areas of climbing, and members are able to progress through the tapes as their knowledge and confidence grows. New members start out by getting their Yellow Tape, which means they can top-rope belay someone without supervision (if you don’t know what this means, don’t worry!).</p>
        </div>
      </div>

      {/* Sixth section */}
      <div className="section bg-two">
        <div className="section-content">
          <h2 className="section-heading">4. Our rich history</h2>
          <p>Content coming soon!</p>
        </div>
      </div>
    </>
  );
};

// CSS surely isn't the way.

export default Home;

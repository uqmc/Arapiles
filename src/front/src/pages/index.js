import React from "react";

import "./index.scss";
import "./special-button.css";

const Home = () => {
  // But... I don't wanna go back to the Man-Village!
  // I wanna stay in the Jungle.

  return(
    /*
    Links to:
      About Us -> About us page
      Skill guides -> Skill book page
      Events button -> fb event calendar
      Join Us button -> members portal
    */
    <>
      <nav className="navbar">
        <div className="nav-buttons">
          <button class="btn draw-border">About Us</button>
          <button class="btn draw-border">Skills Book</button>
          <button class="btn draw-border">Join Us</button>
        </div>
      </nav>

      {/* Top-most section area */}
      <div className="section bg-top">

        <div className="hero">
          <h1 className="hero-text">UQMC</h1>
        </div>

        <div className="section-content">
          <p className="intro">The UQ Mountain Club (UQMC) is a haven for climbers, hikers, and adventure-seekers of all ability levels. For over half a century, the club has offered a hub and community for people looking to push their personal limits, plan epic adventures, make lasting friendships, and get outside to escape the monotone of a city life and experience the sublime.</p>
        </div>
      </div>

      {/* Second section */}
      <div className="section bg-one">
        <div className="section-content">
          <h2>1. What we do</h2>
          <p>
            Two nights a week we climb at the iconic Kangaroo Point Cliffs, with routes setup for both newbies and the most experienced climber. Come by, learn how to climb, and meet the club’s beautiful members.<br /><br />
            Every weekend, we host a climbing and a hiking trip outside of Brisbane. We will take you to some of the most gorgeous mountains and trails in South-East Queensland. These trips are at no extra cost besides being a member! Is this real life?<br /><br />
            After a two week free trial, joining is only $45/semester and covers everything you could need to get involved. No gear or knowledge required. We will teach you new climbing and best-practise safety techniques, provide you with all the gear you need (including shoes and a harness), fully insure you when participating in club activities, and organise all of the adventure-logistics. 
          </p>
        </div>
      </div>

      {/* Third section */}
      <div className="section bg-two">
        <div className="section-content">
          <h2>2. Getting started</h2>
          <p>To start, sign up to our membership portal and start your two week free trial. Join our Facebook page for live updates and our event calendar. Then you can rock up to any event we have planned.</p>
          <h3>Kangaroo Point nights</h3>
          <p>For COVID-safe reasons, you must first register yourself on the Google Sheet which has been linked on the night’s Facebook event page. Our KP nights are regular - on Tuesdays and Thursdays from 6pm to 8:30pm. To the right is a map of KP with where you can find us on your first night. Look out for friendly faces in UQMC Exec shirts who will tell you more.</p>
          <h3>More events</h3>
          <p>Events are planned by the Exec Team and then added as an event to the Facebook page. Further information can be found in the description of the event such as signup sheet URLs, when, where, carpooling, and what you will need to bring. To learn about new events as they arrive, follow the Facebook page. If you have any questions, post on the group, event page, or contact one of the activity leaders.</p>
        </div>
      </div>

      {/* Fourth section */}
      <div className="section bg-three">
        <div className="section-content">
          <h2>3. 'Tapes' and competency</h2>
          <p>In order to do more complicated and technical climbing, members must first obtain colourful tapes. Each tape represents your knowledge in an area of climbing. Newbies start out by getting their Yellow Tape, which means they can top-rope belay someone without supervision (if you don’t know what this means, don’t worry!). Tapes are given by members who have a valid Vertical Rescue Certification.</p>
        </div>
      </div>

      {/* Fifth section */}
      <div className="section bg-one">
        <div className="section-content">
          <h2>4. Our rich history</h2>
          <p>Content coming soon!</p>
        </div>
      </div>
    </>
  );
};

// There is SURELY a better way of styling the web that
// doesn't require using the most side-effecting, frustrating
// piece of shit that is CSS.

export default Home;

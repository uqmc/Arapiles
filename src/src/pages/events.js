import React from "react";
import { Link } from "gatsby";

const Events = () => {

  return(
      <>
        <p>Events are currently managed on our <Link to="https://facebook.com/groups/uqmountainclub/">Facebook group</Link> (uqmountainclub). There you will find an events calendar,
            announcements, signup sheets, and details on how to get engaged with the club.</p>
        <p>You will eventually be able to do all of that on this website. Stay tuned.</p>
        <p><Link to="https://facebook.com/groups/uqmountainclub/">Click here to go to the Facebook Group.</Link></p>
      </>
  );
};

export default Events;

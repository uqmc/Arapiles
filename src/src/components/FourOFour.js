import React from "react";
import { Link } from "gatsby";

const FourOFour = () => {

  return (
    <div className="content-container">
      <div>
        <h1>Page not found!</h1>
        <Link to="/dashboard">Back to homepage.</Link>
      </div>
    </div>
  );
};

export default FourOFour;

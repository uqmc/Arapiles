import React, { useEffect, useContext } from "react";
import { Link } from "gatsby";

import ContextConsumer from "../components/Context";

const FOF = () => {

  const context = useContext(ContextConsumer);

  useEffect(() => {
    context.set({sideNavOpen: false});
  }, []);

  return(
    <>
      <h1>Page not found!</h1>
      <Link to="/dashboard">Back To Dashboard</Link>
    </>
  );
};

export default FOF;

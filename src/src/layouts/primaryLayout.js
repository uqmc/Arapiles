import React from "react";

import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { ContextProvider } from "../components/Context";

import "../styles/staging.scss";

const PrimaryLayout = (props) =>  {
  if(props.location.pathname === "/") {
    return (
      <>{ props.children }</>
    )
  } else {
    return (
      <ContextProvider>
        <div className="app">
            <TopNav />
            { props.children }
            <Footer />
        </div>
      </ContextProvider>
    )
  }
};

export default PrimaryLayout;

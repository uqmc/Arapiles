import React from "react";

import SideNav from "../components/SideNav";
import { ContextProvider } from "../components/Context";

import "../styles/primaryLayout.scss";
import "../styles/nav-button.scss"

const PrimaryLayout = (props) =>  {
  if(props.location.pathname === "/") {
    return (
      <>{ props.children }</>
    )
  } else {
    return (
      <ContextProvider>
        <div className="App">
          <div className="bg">
            <SideNav />
    
            <main className="page-content">
              { props.children }
            </main>
          </div>
        </div>
      </ContextProvider>
    )
  }
};

export default PrimaryLayout;

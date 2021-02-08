import React from "react"

import SideNav from "../components/SideNav"

import "../styles/primaryLayout.scss";
import "../styles/nav-button.scss"

const PrimaryLayout = (props) =>  {
  if(props.location.pathname === "/") {
    return (
      <>{ props.children }</>
    )
  } else {
    return (
      <div className="App">
        <div className="bg">
          <SideNav />
  
          <main className="page-content">
            { props.children }
          </main>
        </div>
      </div>
    )
  }
};

export default PrimaryLayout;

import React from "react"

import SideNav from "../components/SideNav"

import "../styles/primaryLayout.scss";
import "../styles/nav-button.scss"

const PrimaryLayout = ({ children }) =>  {

  return (
    <div className="App">
      <div className="bg">
        <SideNav />

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  )
};

export default PrimaryLayout;

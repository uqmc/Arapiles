import React from "react"

import SideNav from "../components/SideNav"

import "./primaryLayout.scss";
import "../pages/nav-button.scss"

const PrimaryLayout = ({ children }) =>  {
  return (
    <div className="App">
      <SideNav />

      <main>
        {children}
      </main>
    </div>
  )
};

export default PrimaryLayout;

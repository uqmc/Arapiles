import React from "react"
import { Link } from "gatsby";

import "./primaryLayout.scss";

const PrimaryLayout = ({ children }) =>  {
  return (
    <div className="App">
      <div className="side-nav">
        <header>UQMC</header>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/the-team">The Team</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li>Skills Book</li>
          <ul>
            <li><Link to="/skills-book">Start Here</Link></li>
            <li><Link to="/skills-book/yellow">Yellow</Link></li>
            <li><Link to="/skills-book/blue">Blue</Link></li>
            <li><Link to="/skills-book/green">Green</Link></li>
            <li><Link to="/skills-book/red">Red</Link></li>
            <li><Link to="/skills-book/orange">Orange</Link></li>
            <li><Link to="/skills-book/black">Black</Link></li>
            <li><Link to="/skills-book/white">White</Link></li>
          </ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/">Landing Page</Link></li>
        </ul>
      </div>

      <main>
        {children}
      </main>
    </div>
  )
};

export default PrimaryLayout;

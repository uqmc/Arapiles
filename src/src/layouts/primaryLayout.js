import React from "react"
import { Link } from "gatsby";
//import Img from "gatsby-image"

import "./primaryLayout.scss";

const PrimaryLayout = ({ children }) =>  {
  /*
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "brand.png" }) {
        childImageSharp {
          fixed(width: 179, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);*/

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
    /*<div className="App">
      <header>
        <div id="header-container">
          <Link to="/"><Img alt="UQMC Logo" fixed={data.file.childImageSharp.fixed} /></Link>
          <ul className="nav-items">
            <Space size="middle">
              <Dropdown overlay={aboutUsDropDownItems} className="nav-item">
                <Button>About Us <DownOutlined/></Button>
              </Dropdown>
              <Dropdown overlay={tapesDropDownItems} className="nav-item">
                <Button>Tape Guides <DownOutlined /></Button>
              </Dropdown>
              <li className="nav-item">
                <Link to="/events">
                  <Button>Events</Button>
                </Link>
              </li>
              <li className="nav-item">
                <a target="_blank" rel="noopener noreferrer" href="https://members.uqmc.org/join">
                  <Button>Join Us</Button>
                </a>
              </li>
            </Space>
          </ul>
        </div>
      </header>

      <main>
        {children}
      </main>
    </div>*/
  )
};

export default PrimaryLayout;

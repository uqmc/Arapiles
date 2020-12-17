import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby";
import Img from "gatsby-image"

import "./primaryLayout.css"
import {Button, Dropdown, Menu, Space} from "antd";
import { DownOutlined } from "@ant-design/icons";

const PrimaryLayout = ({ children }) =>  {
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
  `);

  const tapesDropDownItems = (
    <Menu>
      <Menu.Item key="Yellow Tape">
        <Link to="/tapes/yellow">Yellow (Top-Rope)</Link>
      </Menu.Item>
      <Menu.Item key="Blue Tape">
        <Link to="/tapes/blue">Blue (Top-Rope Setup)</Link>
      </Menu.Item>
      <Menu.Item key="Green Tape">
        <Link to="/tapes/green">Green (Lead Climbing)</Link>
      </Menu.Item>
      <Menu.Item key="Red Tape">
        <Link to="/tapes/red">Red (Advanced Lead Climbing)</Link>
      </Menu.Item>
      <Menu.Item key="Black Tape">
        <Link to="/tapes/black">Black (Multi-Pitching)</Link>
      </Menu.Item>
      <Menu.Item key="Orange Tape">
        <Link to="/tapes/orange">Orange (Bouldering)</Link>
      </Menu.Item>
      <Menu.Item key="White Tape">
        <Link to="/tapes/white">White (Trad Climbing)</Link>
      </Menu.Item>
    </Menu>
  );

  const aboutUsDropDownItems = (
    <Menu>
      <Menu.Item key="faq">
        <Link to="/faq">
          FAQ
        </Link>
      </Menu.Item>
      <Menu.Item key="faq">
        <Link to="/the-team">
          The Team
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="App">
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
                <Link to="/test">
                  <Button>Test Page</Button>
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
    </div>
  )
};

export default PrimaryLayout;

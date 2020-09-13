import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby";
import "./primaryLayout.css"

const PrimaryLayout = ({ children }) =>  {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  return (
    <div id="layout-master">
      <header>
        <div id="header-container">
          <p>UQMC Website</p>
          <ul>
            { data.allMarkdownRemark.edges.map((edge) => {
              return(
                <li>{edge.node.frontmatter.title} <Link to={edge.node.frontmatter.path}>Click here</Link></li>
              )
            })}
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

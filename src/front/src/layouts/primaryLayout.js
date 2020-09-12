import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby";

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
    <div className="layout-master"
         style={{
           display: `flex`,
           minHeight: `100vh`,
           flexDirection: `column`
         }}>

      <header>
        <p>UQMC Website</p>
        <ul>
          { data.allMarkdownRemark.edges.map((edge) => {
            return(
              <li>{edge.node.frontmatter.title} <Link to={edge.node.frontmatter.path}>Click here</Link></li>
            )
          })}
        </ul>
      </header>

      <div className="layout-body"
           style={{
             display: `flex`,
             flex: 1
           }}>

        <main className="layout-content" style={{flex: 1}}>
          {children}
        </main>

        <div className="spacing-left" style={{flex: `0 0 12em`, order: -1}}></div>
        <div className="spacing-right" style={{flex: `0 0 12em`}}></div>
      </div>
    </div>
  )
};

export default PrimaryLayout;

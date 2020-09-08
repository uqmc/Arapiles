import React from "react";
import {graphql, Link} from "gatsby";

export const query = graphql`
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
  `;

const Home = ({ data }) => {
  return(
    <>
      <div>Hello world!</div>
      <ul>
        { data.allMarkdownRemark.edges.map((edge) => {
          return(
            <li>{edge.node.frontmatter.title} <Link to={edge.node.frontmatter.path}>Click here</Link></li>
          )
        })}
      </ul>
    </>
  );
};

export default Home;

/* API file reference: https://www.gatsbyjs.com/docs/api-files-gatsby-node/
   This file is configuration passed to the Gatsby library in order to provide
   further functionality and customisation to this website.
*/

const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve("src/templates/tape.js"),
    })
  })
};

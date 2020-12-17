/* API file reference: https://www.gatsbyjs.com/docs/api-files-gatsby-config/
   This file is configuration passed to the Gatsby library in order to provide
   further functionality and customisation to this website.
*/

module.exports = {
  plugins: [

    /* Ant.Design UI library
     */
    'gatsby-plugin-antd',

    /* Image processing
    */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /* File system object for data sourcing
       from files with GraphQL.
       Image content
       1) https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }
  ]
};

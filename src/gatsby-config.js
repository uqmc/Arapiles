/* API file reference: https://www.gatsbyjs.com/docs/api-files-gatsby-config/
   This file is configuration passed to the Gatsby library in order to provide
   further functionality and customisation to this website.
*/

module.exports = {
  plugins: [
    /* SCSS transpiler and integration
    */
    `gatsby-plugin-sass`,

    /* Image processing
    */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    /* Get and Set Query Param
    */
    `gatsby-plugin-use-query-params`,

    /* Support for React Helmet, which lets you
       edit the head element for a given page with a
       Helmet component.
    */
    `gatsby-plugin-react-helmet`,

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

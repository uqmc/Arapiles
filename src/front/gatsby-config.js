module.exports = {
  plugins: [

    // Markdown parser
    `gatsby-transformer-remark`,

    /* File system object for data sourcing
       from files with GraphQL.
    */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
  ]
};

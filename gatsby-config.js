module.exports = {
  siteMetadata: {
    title: 'The Travel Shelf',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `bookstores`,
          path: `${__dirname}/src/bookstores`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `team`,
          path: `${__dirname}/src/components/Team`,
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [
                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          // It's important to specify the maxWidth (in pixels) of
                          // the content container as this plugin uses this as the
                          // base for generating different widths of each image.
                          maxWidth: 1140,
                      },
                  },
              ],
          },
      },
  ]
};

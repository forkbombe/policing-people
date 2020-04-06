module.exports = {
  siteMetadata: {
    title: `Policing People`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "variables.scss";`,
        includePaths: [
          `${__dirname}/src/scss`,
          `${__dirname}/node_modules`
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `policing-people`,
        short_name: `policing-people`,
        start_url: `/`,
        background_color: `#133069`,
        theme_color: `#133069`,
        display: `minimal-ui`,
        icon: `src/images/100x100.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "policing-people-site",
        protocol: "https",
        hostname: "www.policingpeople.com"
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

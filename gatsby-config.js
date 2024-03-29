const dotenv = require("dotenv");
dotenv.config();



module.exports = {
   siteMetadata: {
      title: "Amazing GATSBYJS Site",
      author: "MUHAMMAD ALI SARWAR"
   },
   plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-plugin-material-ui`,
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'src',
            path: `${__dirname}/src`
         }
      },
      'gatsby-plugin-sharp',
      {
         resolve: 'gatsby-transformer-remark',
         options: {
            plugins: [
               'gatsby-remark-relative-images',
               {
                  resolve: 'gatsby-remark-images',
                  options: {
                     maxWidth: 750,
                     linkImagesToOrginal: false
                  }
               }
            ]
         }
      },
      {
         resolve: 'gatsby-source-contentful',
         options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
         }
      }
  ]
}
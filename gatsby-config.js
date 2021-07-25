require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-mailgo`,
      options: {
        mailgoConfig: {
          dark: true,
          showFooter: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Funk With El Monk`,
        short_name: `El Monk`,
        start_url: `/`,
        background_color: `#2b6cb0`,
        theme_color: `#2b6cb0`,
        display: `minimal-ui`,
        icon: 'src/images/el-monk-pow-ep.jpeg'
      },
    },
  ]
};


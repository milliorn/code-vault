module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind Tea Cozy`,
    siteUrl: `https://gatsbytailwindteacozy.gatsbyjs.io/`,
    description: "Gatsby Tailwind UI Tea Cozy template."
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `GatsbyJS Tailwind-UI Tea Cozy`,
        short_name: `Tea Cozy`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
      },
    },
  ],
};

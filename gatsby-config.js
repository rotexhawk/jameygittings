module.exports = {
  siteMetadata: {
    title: "jameygittings",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123123",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Libre+Baskerville",
              variants: ["400"],
            },
            {
              family: "Open+Sans",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          includePaths: ["./src/styles"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
  ],
};

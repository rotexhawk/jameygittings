module.exports = {
  siteMetadata: {
    title: "jameygittings",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123123",
      },
    },
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
            {
              family: "Bodoni+Moda",
              variants: ["400", "500", "600"],
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
      resolve: "gatsby-source-wordpress",
      options: {
        verbose: true,
        url: "https://backend.jameygittings.com/graphql",
        type: {
          Plugin: {
            exclude: true,
          },
        },
        debug: {
          disableCompatibilityCheck: true,
          graphql: {
            panicOnError: false,
          },
        },
      },
    },
  ],
};

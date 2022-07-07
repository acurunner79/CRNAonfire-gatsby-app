module.exports = {
  siteMetadata: {
    title: `CRNAonFire`,
    siteUrl: `https://www.yourdomain.tld`
  },
  
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat`,
          `Play`,
          `Gruppo`,
          `Roboto`,
          `Raleway`,
          `Ubuntu`,
          `Poppins`,
          `cursive\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet"
  ]
};
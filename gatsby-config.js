module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Evencorp',
    author: 'Andres Navarro',
    description: 'Eventos corporativos',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        cl: '',
      },
      {
        name: 'Nosotros',
        link: '/evencorp',
      },
      {
        name: 'Servicios',
        link: '/servicios',
      },
      {
        name: 'Eventos',
        link: '/eventos',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'es',
      },
    },
    'gatsby-plugin-offline',
  ],
}

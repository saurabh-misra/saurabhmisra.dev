require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Saurabh Misra`,
    // Default title of the page
    siteTitleAlt: `Saurabh Misra - Full-Stack Software Developer`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Saurabh Misra - Full-Stack Software Developer`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://saurabhmisra.dev`,
    // Used for SEO
    siteDescription: `Full-Stack Software Developer. This website is my corner of the internet where I document and showcase my learnings and adventures in software development.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/me.jpg`,
    // Twitter Handle
    author: `@saurabh__misra`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/saurabh__misra`,
      },
      {
        name: `Email`,
        url: `mailto:hello@saurabhmisra.dev`,
      },
      {
        name: `Github`,
        url: `https://github.com/saurabh-misra`,
      }
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `Privacy Policy-How Much Do I Spend`,
        slug: `/pages/privacy-policy/how-much-do-i-spend`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/saurabh__misra`,
          },
          {
            name: `Email`,
            url: `mailto:hello@saurabhmisra.dev`,
          },
          {
            name: `Github`,
            url: `https://github.com/saurabh-misra`,
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `saurabhmisra-dev-blog - Saurabh Misra`,
        short_name: `saurabhmisra-dev-blog`,
        description: `Full-Stack Software Developer. This website is my corner of the internet where I document and showcase my learnings and adventures in software development.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons'
        ],
      },
    },
  ].filter(Boolean),
}

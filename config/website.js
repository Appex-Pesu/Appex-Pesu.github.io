module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `APPEX`, // Navigation and Site Title
  siteTitleAlt: `Appex pesu `, // Alternative Site title for SEO
  siteTitleShort: `Appex`, // short_name for manifest
  siteHeadline: `App development club`, // Headline for schema.org JSONLD
  siteUrl: `https://brettstevenson.io`, // Domain of your site. No trailing slash!
  siteKeywords: [`appex`, `brett`, `stevenson`, `fullstack`, `software`, `engineer`, `developer`, `design`, `portfolio`, `blog`, `python`, `javascript`, `react`],
  siteLanguage: `en`, // Language Tag on <html> element
  siteLogo: `C:\Users\Atheek\Desktop\Appex\src\images\logo.png`, // Used for SEO and manifest
  siteDescription: `Appex`,
  author: {
    name: `Appex`,
    bio: ``,
    github: `https://github.com/Appex-Pesu`,
    linkedIn: `https://www.linkedin.com/company/appex-pesu/about/`,
    instagram:'https://www.instagram.com/appex.pesu/',
  },
  menuLinks: [
    {
      name: `Home`,
      link: `/`,
      external: false,
    },
    {
      name: `Events`,
      link: `/events`,
      external: true,
    },
    {
      name: `Team`,
      link: `/`,
      external: false,
    },
    {
      name: `Register`,
      link: `/contact/`,
      external: false,
    },
  ],
  disqusShortname: `tterb-gatsby`,
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  twitterUsername: `@bstevensondev`, // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: `UA-82760104-1`, // Google Analytics ID
  googleOptimizeID: `GTM-P9NNBQ3`, // Google Optimize container ID
  // Manifest and Progress color
  backgroundColor: `#23262B`,
}

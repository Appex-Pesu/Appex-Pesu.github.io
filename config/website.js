module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: `APPEX`, // Navigation and Site Title
  siteTitleAlt: `Appex pesu `, // Alternative Site title for SEO
  siteTitleShort: `Appex`, // short_name for manifest
  siteHeadline: `App development club`, // Headline for schema.org JSONLD
  siteUrl: `https://brettstevenson.io`, // Domain of your site. No trailing slash!
  siteKeywords: [`Appex`, `pesu`, `pesuniversity`, `Appexpesu`, `appex`, `appexpesu`, `appdevelopment` ],
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
  disqusShortname: ``,
  
  twitterUsername: ``,
  
  googleAnalyticsID: ``, 
  googleOptimizeID: ``, // Google Optimize container ID
  // Manifest and Progress color
  backgroundColor: ``,
}

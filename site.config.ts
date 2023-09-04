import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7ba9bc5217d846a7b61416ac1ed43ad9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  // rootNotionSpaceId: "da57b624-e9dd-4239-8c27-3bbc520efe4c",

  // basic site info (required)
  name: 'Altruismo Eficaz Chile',
  author: 'Altruismo Eficaz Chile',
  domain: 'altruismoeficaz.cl',
  language: "es",

  // open graph metadata (optional)
  description: 'El altruismo eficaz es un campo de investigación y una comunidad práctica enfocada en maximizar el bien que puedes hacer a través de tu carrera, projectos y donaciones.',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'altruismo-eficaz-cl',
  linkedin: 'altruismoeficazuc',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX

  instagram: 'altruismoeficazuc',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: "💡",
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,
  isSearchEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/uc': '539ea9da108d488ca6af155f172143af',
    '/links': 'e20f0b37f9b941c7a91d848ac491d0c2',
    '/digest': 'aca14f4bad8b4398b33df160ca74f494',
    '/thinkathon': '3b7c4b1d55bd44d384b1a1d5dce54b74',e3r
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',

  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Inicio',
      pageId: '7ba9bc5217d846a7b61416ac1ed43ad9'
    },
    {
      title: 'UC',
      pageId: '539ea9da108d488ca6af155f172143af'
    }
  ]
})

import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c954c28ed7ca41619a52996a19b3a5b3',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  // rootNotionSpaceId: "da57b624-e9dd-4239-8c27-3bbc520efe4c",

  // basic site info (required)
  name: 'Altruismo Eficaz Chile',
  domain: 'altruismoeficaz.cl',
  author: 'Altruismo Eficaz Chile',

  // open graph metadata (optional)
  description: 'El altruismo eficaz es un campo de investigación y una comunidad práctica enfocada en maximizar el bien que puedes hacer a través de tu carrera, projectos y donaciones.',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'altruismo-eficaz-cl',
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

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/uc': 'f026b19400474d46b18888465754f3cf',
    '/links': 'de811774ffb74a1ea013716754b1cb98',
    '/digest': '971194ed8e254c4dbf8bf9f35b7f8eab'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})

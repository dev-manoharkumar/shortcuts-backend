module.exports = ({env}) => ([
  'strapi::errors',
  env === 'development'? 'strapi::security' : {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ['self', 'https:'],
          'img-src': ['self', 'data:', 'blob:', 'https://strapi.io', `${env('CDN_BASE_URL')}`, 'https://dl.airtable.com'],
          'media-src': ['self', 'data:', 'blob:', 'https://strapi.io', `${env('CDN_BASE_URL')}`, 'https://dl.airtable.com'],
          upgradeInsecureRequests: null,
        },
      }
    }
  } ,
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]);

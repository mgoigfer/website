const DEFAULT_SEO = {
  title: 'Mikel Goig - Desarrollador web full-stack',

  description: 'Mikel Goig - Desarrollador web full-stack',

  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://mikelgoig.com',
    title: 'Mikel Goig - Desarrollador web full-stack',
    description: 'Mikel Goig - Desarrollador web full-stack',
    image: 'https://mikelgoig.com/static/images/og-image-mikel-goig-website.png',
    site_name: 'MikelGoig.com',
    imageWidth: 1200,
    imageHeight: 1200,
  },

  twitter: {
    handle: '@mgoigfer',
    cardType: 'summary_large_image',
  },
};

const PRISMIC_API_URL = 'https://mikelgoig-website.prismic.io/api/v2';

export {
  DEFAULT_SEO,
  PRISMIC_API_URL,
};

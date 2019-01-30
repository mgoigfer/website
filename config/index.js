const DEFAULT_SEO = {
  title: 'Mikel Goig - Desarrollador web full-stack',
  description: 'Mikel Goig - Desarrollador web full-stack',

  twitter: {
    cardType: 'summary_large_image',
    handle: '@mgoigfer',
  },

  openGraph: {
    url: 'https://mikelgoig.com',
    type: 'website',
    title: 'Mikel Goig - Desarrollador web full-stack',
    description: 'Mikel Goig - Desarrollador web full-stack',
    images: [
      {
        url: 'https://mikelgoig.com/static/images/og-image-mikel-goig-website.png',
        width: 1200,
        height: 1200,
        alt: 'Mikel Goig - Desarrollador web full-stack',
      },
    ],
    defaultImageHeight: 1200,
    defaultImageWidth: 1200,
    locale: 'es_ES',
    site_name: 'MikelGoig.com',
  },
};

const PRISMIC_API_URL = 'https://mikelgoig-website.prismic.io/api/v2';

export {
  DEFAULT_SEO,
  PRISMIC_API_URL,
};

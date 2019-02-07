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

const THEME = {
  // Colors.
  white: '#fff',
  black: '#000',
  grey: '#111',
  pink: 'rgba(255,113,176,1)',
  blue: 'rgba(0,255,255,1)',
  green: 'rgba(65,250,112,1)',
  yellow: 'rgba(255,243,109,1)',

  // Measures.
  padding: 'calc(5px + 2vw)',
  headerHeight: 'calc(40px + 2vw)',

  // Animations.
  animationDuration: 400,
  animationDurationL: 800,
};

export {
  DEFAULT_SEO,
  PRISMIC_API_URL,
  THEME,
};

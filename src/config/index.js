export const DEFAULT_SEO = {
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

// Device sizes (in px).
export const DEVICES = {
  phone: {
    min: 0,
    max: 599,
  },
  tabletPortrait: {
    min: 600,
    max: 899,
  },
  tabletLandscape: {
    min: 900,
    max: 1199,
  },
  laptop: {
    min: 1200,
    max: 1799,
  },
  desktop: {
    min: 1800,
    max: 9999,
  },
};

export const PRISMIC_API_URL = 'https://mikelgoig-website.prismic.io/api/v2';

export const THEME = {
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

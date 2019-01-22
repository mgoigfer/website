/* Vendor */
import Prismic from 'prismic-javascript';

/* Config */
import { PRISMIC_API_URL } from '../config';

const getProjectAPI = async slug => {
  try {
    // We initialise the API with Prismic's kit.
    const API = await Prismic.api(PRISMIC_API_URL);

    // We pass up the slug to request the correct project.
    const response = await API.query(
      Prismic.Predicates.at('my.project.uid', slug)
    );

    return response.results[0];
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProjectsAPI = async params => {
  try {
    // We initialise the API with Prismic's kit.
    const API = await Prismic.api(PRISMIC_API_URL);

    // Here we just query the documents with a filter of only returning
    // the type of project and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'project'),
      {
        orderings: '[my.project.date desc]',
        ...params
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );

    return response;
  } catch (error) {
    return error;
  }
};

export {
  getProjectAPI,
  getProjectsAPI,
};

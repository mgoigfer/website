/**
 * Getting a random integer between two values, inclusive.
 *
 * @param {Integer} min
 * @param {Integer} max
 */
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generate the correct path based on the document type.
 *
 * @param {Object} doc
 */
const linkResolver = doc => {
  if (doc.type === 'project') {
    return `/project/${doc.uid}`;
  }

  return '/';
};

module.exports = {
  getRandomIntInclusive,
  linkResolver,
};

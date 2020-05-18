/**
 * Get the position of an element in the window.
 *
 * @param {DOMHTMLElement} element
 */
const getElementPosition = element => {
  let xPosition = 0;
  let yPosition = 0;

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
    element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
};

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

export {
  getElementPosition,
  getRandomIntInclusive,
  linkResolver,
};

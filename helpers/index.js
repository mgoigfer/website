/**
 * Getting a random integer between two values, inclusive.
 *
 * @param {Integer} min
 * @param {Integer} max
 */
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

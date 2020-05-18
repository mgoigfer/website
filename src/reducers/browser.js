/* Vendor */
import { createResponsiveStateReducer } from 'redux-responsive';
import { transform } from 'lodash';

/* Helpers */
import { DEVICES } from 'config';

const breakpoints = Object.keys(DEVICES).reduce((result, key) => {
  result[key] = DEVICES[key].max;
  return result;
}, {});

export default createResponsiveStateReducer(breakpoints, {
  infinity: 'desktop',
  initialMediaType: 'phone',
  extraFields: ({ greaterThan, is }) => ({
    greaterThanOrEqual: transform(greaterThan, (result, value, mediaType) => {
      result[mediaType] = value || is[mediaType];
    }, {}),
  }),
});

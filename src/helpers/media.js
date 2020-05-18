/* Vendor */
import { css } from 'styled-components';

/* Config */
import { DEVICES } from 'config';

// CSS media template.
export default Object.keys(DEVICES).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${DEVICES[label].min}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

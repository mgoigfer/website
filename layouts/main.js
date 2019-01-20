/* Components */
import { createGlobalStyle } from 'styled-components';

export default ({ children }) => (
  <div>
    <GlobalStyle/>
    { children }
  </div>
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #fff;
    background-color: rgba(0,0,0,1);
  }
`;

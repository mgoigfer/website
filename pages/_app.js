/* Vendor */

// React and Redux.
import React from 'react';
import { Provider } from 'react-redux';

// Next.
import App, { Container } from 'next/app';
import NextSeo from 'next-seo';
import withRedux from 'next-redux-wrapper';

// Styled-components
import { ThemeProvider } from 'styled-components';

/* Config */
import { DEFAULT_SEO, THEME } from 'config';

/* Redux Store */
import makeStore from 'store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <NextSeo config={DEFAULT_SEO}/>

        <ThemeProvider theme={THEME}>
          <Provider store={store}>
            <Component {...pageProps}/>
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);

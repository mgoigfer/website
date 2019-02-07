/* Vendor */
import React from 'react';
import App, { Container } from 'next/app';
import NextSeo from 'next-seo';
import { ThemeProvider } from 'styled-components';

/* Config */
import { DEFAULT_SEO, THEME } from '../config';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <NextSeo config={DEFAULT_SEO}/>

        <ThemeProvider theme={THEME}>
          <Component {...pageProps}/>
        </ThemeProvider>
      </Container>
    );
  }
}

/* Vendor */
import React from 'react';
import App, { Container } from 'next/app';
import NextSeo from 'next-seo';

/* Config */
import { DEFAULT_SEO } from '../config';

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
        <Component {...pageProps}/>
      </Container>
    );
  }
}

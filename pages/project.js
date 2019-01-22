/* Vendor */
import React, { Component } from 'react';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';

/* Helpers */
import { linkResolver } from '../helpers';

/* API */
import { getProjectAPI } from '../api';

/* Layouts */
import MainLayout from '../layouts/main';

export default class extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;

    const response = await getProjectAPI(slug);

    return {
      project: response,
    };
  }

  addJSONLD(project, info, url) {
    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${project.og_title[0].text}",
        "image": [
          "${project.og_image.url}"
        ],
        "datePublished": "${info.first_publication_date}",
        "dateModified": "${info.first_publication_date}",
        "author": {
          "@type": "Person",
          "name": "Mikel Goig"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Mikel Goig",
          "logo": {
            "@type": "ImageObject",
            "url": "https://mikelgoig.com/static/images/logo-mikel-goig.png"
          }
        },
        "description": "${project.og_description[0].text}"
      }`,
    };
  }

  render() {
    const { project: info } = this.props;
    const project = info.data;
    const url = `https://mikelgoig.com/project/${info.uid}`;

    return (
      <MainLayout>
        <Head>
          <title key="title">
            { project.title[0].text }
          </title>

          <meta
            key="description"
            name="description"
            content={project.og_description[0].text}
          />
          <meta
            key="og:url"
            property="og:url"
            content={url}
          />
          <meta
            key="og:type"
            property="og:type"
            content="article"
          />
          <meta
            key="og:title"
            property="og:title"
            content={project.og_title[0].text}
          />
          <meta
            key="og:description"
            property="og:description"
            content={project.og_description[0].text}
          />
          <meta key="og:image"
            property="og:image"
            content={project.og_image.url}
          />
        </Head>

        <article>
          <h1>
            { project.title.length ? project.title[0].text : '' }
          </h1>

          { RichText.render(project.body, linkResolver) }
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={this.addJSONLD(project, info, url)}
        />
      </MainLayout>
    );
  }
}

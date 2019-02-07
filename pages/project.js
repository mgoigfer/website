/* Vendor */
import React, { Component } from 'react';
import NextSeo, { BlogJsonLd } from 'next-seo';

/* API */
import { getProjectAPI } from '../api';

/* Layouts */
import MainLayout from '../layouts/main';

/* Components */
import Header from '../components/header';
import Project from '../components/project/project';

export default class extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;

    const response = await getProjectAPI(slug);

    return {
      project: response,
    };
  }

  render() {
    const { project: info } = this.props;
    const project = info.data;
    const url = `https://mikelgoig.com/project/${info.uid}`;

    return (
      <MainLayout>
        <NextSeo config={{
          title: project.title[0].text,
          description: project.og_description[0].text,
          openGraph: {
            url,
            type: 'article',
            title: project.og_title[0].text,
            description: project.og_description[0].text,
            images: [
              {
                url: project.og_image.url,
                width: 1200,
                height: 1200,
                alt: project.og_title[0].text,
              },
            ],
          },
        }}/>

        <BlogJsonLd
          url={url}
          title={project.og_title[0].text}
          images={[
            project.og_image.url,
          ]}
          datePublished={info.first_publication_date}
          dateModified={info.first_publication_date}
          authorName="Mikel Goig"
          description={project.og_description[0].text}
        />

        <Header isFixed={true}/>
        <Project project={project}/>
      </MainLayout>
    );
  }
}

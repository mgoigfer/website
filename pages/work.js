/* Vendor */
import React, { Component } from 'react';

/* API */
import { getProjectsAPI } from '../api';

/* Layouts */
import MainLayout from '../layouts/main';

/* Components */
import Header from '../components/header';
import Projects from '../components/projects';

export default class extends Component {
  static async getInitialProps() {
    const response = await getProjectsAPI();

    return {
      projects: response.results,
    };
  }

  componentDidMount() {
    document.body.classList.remove('is-loading');
  }

  render() {
    const { projects } = this.props;

    return (
      <MainLayout>
        <Header isFixed={true}/>
        <Projects projects={projects}/>
      </MainLayout>
    );
  }
}

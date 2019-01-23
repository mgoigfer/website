/* Vendor */
import React, { Component } from 'react';

/* API */
import { getProjectsAPI } from '../api';

/* Layouts */
import MainLayout from '../layouts/main';

/* Components */
import Header from '../components/header';
import Hello from '../components/hello';
import Projects from '../components/projects';

export default class extends Component {
  static async getInitialProps() {
    const response = await getProjectsAPI();

    return {
      projects: response.results,
    };
  }

  render() {
    const { projects } = this.props;

    return (
      <MainLayout>
        <Hello/>
        <Header/>
        <Projects projects={ projects }/>
      </MainLayout>
    );
  }
}

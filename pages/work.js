/* Vendor */
import React, { Component } from 'react';
import styled from 'styled-components';

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

        <ProjectsWrapper>
          <Projects projects={projects}/>
        </ProjectsWrapper>
      </MainLayout>
    );
  }
}

const ProjectsWrapper = styled.div`
  margin-top: ${props => props.theme.headerHeight};
  padding: 0 calc(5px + 2vw) calc(5px + 2vw);
`;

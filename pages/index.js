/* Vendor */
import React, { Component } from 'react';
import Router from 'next/router';

/* Helpers */
import { getElementPosition } from '../helpers';

/* API */
import { getProjectsAPI } from '../api';

/* Layouts */
import MainLayout from '../layouts/main';

/* Components */
import Hello from '../components/hello';
import Header from '../components/header';
import Projects from '../components/projects';

export default class extends Component {
  static async getInitialProps() {
    const response = await getProjectsAPI();

    return {
      projects: response.results,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      isHeaderFixed: false,
    }

    /* Bind event handlers */
    this.handleClickWorkLink = this.handleClickWorkLink.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    /* Add event listeners */
    window.addEventListener('scroll', this.handleScroll);
    document.querySelector('.js-link-work').addEventListener('click', this.handleClickWorkLink);
  }

  componentWillUnmount() {
    /* Remove event listeners */
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('.js-link-work').removeEventListener('click', this.handleClickWorkLink);
  }

  handleClickWorkLink(event) {
    event.preventDefault();

    document.body.classList.add('is-loading');

    const scrollTop = document.documentElement.scrollTop;

    // Header HTMLElement.
    const headerElement = document.querySelector('.js-header');
    const headerOffsetTop = getElementPosition(headerElement).y;
    const headerDistanceTop = headerOffsetTop - scrollTop;
    headerElement.style.transform = `translate(0px, -${headerDistanceTop}px)`;

    setTimeout(() => {
      Router.push('/work');
    }, 1000);
  }

  handleScroll() {
    const scrollTop = document.documentElement.scrollTop;

    // Header HTMLElement.
    const headerElement = document.querySelector('.js-header');
    const headerOffsetHeight = headerElement.offsetHeight;

    this.setState({
      isHeaderFixed: scrollTop > window.innerHeight - headerOffsetHeight,
    });
  }

  render() {
    const { projects } = this.props;

    return (
      <MainLayout>
        <Hello/>
        <Header isFixed={this.state.isHeaderFixed}/>
        <Projects projects={projects}/>
      </MainLayout>
    );
  }
}

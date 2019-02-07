/* Vendor */
import React, { Component } from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';

/* Helpers */
import { linkResolver } from '../../helpers';

/* Components */
import VideoVimeo from './videoVimeo';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // DOM.
      headersOffsetHeight: 0,

      // Status.
      isShownInfo: false,
    };

    /* Bind event handlers */
    this.handleClickMoreInfo = this.handleClickMoreInfo.bind(this);
  }

  componentDidMount() {
    this.setState({
      headersOffsetHeight: document.querySelector('.js-header').offsetHeight + document.querySelector('.Project__header').offsetHeight,
    });

    /* Add event listeners */
    document.querySelector('.js-project-more-info-button').addEventListener('click', this.handleClickMoreInfo);
  }

  componentWillUnmount() {
    /* Remove event listeners */
    document.querySelector('.js-project-more-info-button').removeEventListener('click', this.handleClickMoreInfo);
  }

  handleClickMoreInfo() {
    this.setState(state => {
      return {
        isShownInfo: !state.isShownInfo,
      };
    });
  }

  render() {
    const { project } = this.props;
    const title = project.title[0].text;
    const vimeo = project.body1[0].items[0].vimeo_url;

    return (
      <Project paddingTop={this.state.headersOffsetHeight}>
        <ProjectHeader>
          <Header
            className="Project__header"
            isShownInfo={this.state.isShownInfo}
          >
            <h2>
              {title}
            </h2>

            <span className="js-project-more-info-button">
              Información del proyecto
            </span>
          </Header>

          <Info isShown={this.state.isShownInfo}>
            {RichText.render(project.body, linkResolver)}
          </Info>
        </ProjectHeader>

        <ProjectBody>
          <VideoVimeo vimeoId={vimeo.video_id}/>
        </ProjectBody>
      </Project>
    );
  }
}

const Project = styled.article`
  position: relative;
  min-height: 100vh;
  padding: ${props => props.paddingTop}px ${props => props.theme.padding} ${props => props.theme.padding};
`;

const ProjectHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: ${props => props.theme.headerHeight};
  left: ${props => props.theme.padding};
  right: ${props => props.theme.padding};
  padding-bottom: ${props => props.theme.padding};
  overflow: hidden;
  background-color: ${props => props.theme.black};
  transition: height ${props => props.theme.animationDuration}ms;
`;

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    &:after {
      content: ${props => props.isShownInfo ? '\'x\'' : '\'+\''};
      padding-left: 5px;
      font-size: ${props => props.isShownInfo ? '.8em' : '.9em'};
    }
  }
`;

const Info = styled.div`
  position: relative;
  display: ${props => props.isShown ? 'block' : 'none'};
  padding-top: ${props => props.theme.padding};
`;

const ProjectBody = styled.div`
  position: relative;
  margin-top: 30px;
  overflow: hidden;
`;

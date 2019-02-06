/* Vendor */
import React, { Component as ReactComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* Helpers */
import { linkResolver } from '../helpers';
import media from '../helpers/media';

export default class extends ReactComponent {
  render() {
    const { projects } = this.props;

    return (
      <Component>
        <Projects>
          {projects.map((project, index) => (
            <Link
              key={index}
              as={linkResolver(project)}
              href={`/project?slug=${project.uid}`}
              passHref
            >
              <Project image={project.data.image.url}>
                <Title>
                  {project.data.title[0].text}
                </Title>
              </Project>
            </Link>
          ))}
        </Projects>
      </Component>
    );
  }
}

const nColumnsTablet = 2;
const nColumnsLaptopL = 3;
const nColumnsDesktop = 4;

const Component = styled.section`
  position: relative;
  color: #fff;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: linear-gradient(
    to right,
    rgba(255,113,177,1) 0%,
    rgba(0,255,255,1) 33%,
    rgba(66,250,121,1) 66%,
    rgba(255,243,109,1) 100%
  );

  ${media.tablet`
    grid-template-columns: repeat(${nColumnsTablet}, 1fr);
  `};

  ${media.laptopL`
    grid-template-columns: repeat(${nColumnsLaptopL}, 1fr);
  `};

  ${media.desktop`
    grid-template-columns: repeat(${nColumnsDesktop}, 1fr);
  `};
`;

const Project = styled.div`
  position: relative;
  display: block;
  height: calc(100vw * 0.8);
  max-width: 100%;
  background: url(${props => props.image}) no-repeat;
  background-size: cover;
  background-position: top;
  cursor: url(/static/images/cursor-plus.png) 40 40, auto;
  transition: opacity .35s ease-in-out;

  &:hover {
    background: transparent;
  }

  ${media.tablet`
    height: calc(100vw / ${nColumnsTablet} * 0.8);
  `};

  ${media.laptopL`
    height: calc(100vw / ${nColumnsLaptopL} * 0.8);
  `};

  ${media.desktop`
    height: calc(100vw / ${nColumnsDesktop} * 0.8);
  `};
`;

const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: block;
  margin: 0 auto;
  font-size: 4em;
  font-weight: 600;
  text-align: center;
  opacity: 0;
  transform: translateY(-50%);

  ${Project}:hover & {
    opacity: 1;
  }
`;

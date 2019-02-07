/* Vendor */
import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

export default function({ isFixed = false }) {
  return (
    <Header className="js-header" isFixed={isFixed}>
      <Nav>
        <ul>
          <li>
            <Link href={'/work'} prefetch>
              <a className="js-link-work">Work</a>
            </Link>
          </li>

          <li>
            <Link href={'/about'}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </Nav>

      <a href="/">
        <H1 isShown={isFixed}>Mikel</H1>
      </a>
    </Header>
  );
}

const Header = styled.header`
  display: block;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${props => props.theme.headerHeight};
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  transition: transform ${props => props.theme.animationDurationL}ms;

  ${props => props.isFixed && css`
    position: fixed;
    top: 0;
    bottom: auto;
  `}
`;

const Nav = styled.nav`
  position: relative;
  width: 100%;
  letter-spacing: 1px;
  font-size: calc(12px + 1vw);
  line-height: 1.5em;

  ul {
    position: relative;
    padding: 0 ${props => props.theme.padding};

    li {
      display: inline-block;
      line-height: ${props => props.theme.headerHeight};

      a {
        line-height: 1;
        padding: 0 3vw;
        margin-left: -3vw;
        display: inline-block;
        color: ${props => props.theme.white};
      }
    }
  }
`;

const H1 = styled.h1`
  line-height: 1em;
  height: 1em;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10.32px;
  font-size: calc(12px + 1vw);
  font-weight: 400;
  text-transform: uppercase;
  color: ${props => props.theme.white};
  opacity: 0;
  transform: translateX(-10vw);
  transition: all ${props => props.theme.animationDurationL}ms;

  ${props => props.isShown && css`
    opacity: 1;
    transform: translateX(0);
  `}
`;

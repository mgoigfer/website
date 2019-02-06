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

const headerHeight = 'calc(40px + 2vw)';

const Header = styled.header`
  display: block;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${headerHeight};
  box-sizing: border-box;
  border-color: #000;
  border-style: solid;
  background: #000;
  color: #fff;
  transition: transform 1s;

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
    transition: color .2s, background-color .2s;
    padding-left: 10.32px;
    padding-right: 10.32px;

    li {
      display: inline-block;
      line-height: ${headerHeight};

      a {
        line-height: 1;
        padding: 0 3vw;
        margin-left: -3vw;
        display: inline-block;
        opacity: 1;
        color: #fff;
        transition: opacity .2s;
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
  color: #fff;
  opacity: 0;
  transition: all 1s ease-in-out;
  transform: translateX(-10vw);

  ${props => props.isShown && css`
    opacity: 1;
    transform: translateX(0);
  `}
`;

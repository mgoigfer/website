/* Vendor */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.headerRef = React.createRef();
  }

  render() {
    return (
      <Header ref={this.headerRef}>
        <Nav id="topnav">
          <ul>
            <li>
              <a href="/work/">Work</a>
            </li>

            <li>
              <a href="/about/">About</a>
            </li>
          </ul>
        </Nav>

        <a href="/">
          <H1 shown={this.props.isShownLogo}>Mikel</H1>
        </a>
      </Header>
    );
  }
}

const headerHeight = 'calc(40px + 2vw)';

const Header = styled.header`
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
  transition: color .2s, background-color .2s;
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

  ${props => props.shown && css`
    opacity: 1;
    transform: translateX(0);
  `}
`;

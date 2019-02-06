/* Vendor */
import React, { Component } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

/* Helpers */
import { getElementPosition } from '../helpers';
import media from '../helpers/media';

/* Components */
import Header from './header';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Typed text.
      currentColor: '#fff',
      colors: [
        'rgba(255,113,176,1)', // pink
        'rgba(0,255,255,1)', // blue
        'rgba(65,250,112,1)', // green
        'rgba(255,243,109,1)', // yellow
      ],
    };

    this.helloRef = React.createRef();
    this.helloH1Ref = React.createRef();
    this.helloH2Ref = React.createRef();
    this.headerRef = React.createRef();

    this.handlePreStringTyped = this.handlePreStringTyped.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.typed = new Typed('#typed', {
      strings: [
        'Frontend',
        'Backend',
        'DevOps',
      ],
      typeSpeed: 50,
      startDelay: 500,
      backSpeed: 50,
      smartBackspace: false,
      shuffle: false,
      backDelay: 1500,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '.',
      autoInsertCss: true,
      attr: null,
      bindInputFocusEvents: false,
      contentType: 'html',
      preStringTyped: this.handlePreStringTyped,
    });

    this.setState({
      helloH1OffsetTop: getElementPosition(this.helloH1Ref.current).y,
      helloH2OffsetTop: getElementPosition(this.helloH2Ref.current).y,
    });

    /* Add event listeners */
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.typed.destroy();

    /* Remove event listeners */
    window.removeEventListener('scroll', this.handleScroll);
  }

  handlePreStringTyped(arrayPos) {
    this.setState(state => {
      return {
        currentColor: state.colors[arrayPos],
      };
    });
  }

  handleScroll() {
    const scrollTop = document.documentElement.scrollTop;

    // Header HTMLElement.
    const headerElement = this.headerRef.current.headerRef.current;
    const headerOffsetHeight = headerElement.offsetHeight;
    const headerOffsetTop = getElementPosition(headerElement).y;
    const headerDistanceTop = headerOffsetTop - scrollTop;

    this.setState({
      isHeaderFixed: headerOffsetHeight + scrollTop > window.innerHeight,
      isHelloH1Hidden: headerDistanceTop < this.state.helloH1OffsetTop,
      isHelloH2Hidden: headerDistanceTop < this.state.helloH2OffsetTop,
    });
  }

  render() {
    return (
      <Wrapper>
        <Hello ref={this.helloRef}>
          <Card>
            <H1 ref={this.helloH1Ref}>
              <span>Hola!Soy</span>
              <strong>Mikel</strong>
            </H1>

            <H2 ref={this.helloH2Ref}>
              Desarrollador Web
              <TypedText
                id="typed"
                color={this.state.currentColor}
              />
            </H2>
          </Card>
        </Hello>

        <Header
          ref={this.headerRef}
          isFixed={this.state.isHeaderFixed}
          isShownLogo={this.state.isHelloH1Hidden}
        />
      </Wrapper>
    );
  }
}

const h1FontSize = '35px';
const h2FontSize = '14px';
const h1FontSizeTablet = '70px';
const h2FontSizeTablet = '29px';
const h1FontSizeLaptop = '88px';
const h2FontSizeLaptop = '37px';

const borderSize = '10px';
const borderSizeTablet = '14px';
const borderSizeLaptop = '18px';
const borderSizeLaptopL = '24px';
const borderSizeDesktop = '28px';

const Wrapper = styled.section`
  width: calc(100% - 2 * ${borderSize});
  height: calc(100vh - 2 * ${borderSize});
  border: ${borderSize} solid #000;

  ${media.tablet`
    width: calc(100% - 2 * ${borderSizeTablet});
    height: calc(100vh - 2 * ${borderSizeTablet});
    border: ${borderSizeTablet} solid #000;
  `}

  ${media.laptop`
    width: calc(100% - 2 * ${borderSizeLaptop});
    height: calc(100vh - 2 * ${borderSizeLaptop});
    border: ${borderSizeLaptop} solid #000;
  `}

  ${media.laptopL`
    width: calc(100% - 2 * ${borderSizeLaptopL});
    height: calc(100vh - 2 * ${borderSizeLaptopL});
    border: ${borderSizeLaptopL} solid #000;
  `}

  ${media.desktop`
    width: calc(100% - 2 * ${borderSizeDesktop});
    height: calc(100vh - 2 * ${borderSizeDesktop});
    border: ${borderSizeDesktop} solid #000;
  `}
`;

const Hello = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  display: block;
  width: initial;
  height: calc(${h1FontSize} + ${h2FontSize});
  max-width: 265px;
  margin: 0 auto;
  overflow: hidden;
  color: #fff;
  transform: translateY(-50%);

  ${media.tablet`
    height: calc(${h1FontSizeTablet} + ${h2FontSizeTablet});
    max-width: 530px;
  `}

  ${media.laptop`
    height: calc(${h1FontSizeLaptop} + ${h2FontSizeLaptop});
    max-width: 650px;
  `}
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  text-align: left;
  border-radius: 2px;
`;

const H1 = styled.h1`
  display: block;
  margin: 0;
  font-size: ${h1FontSize};
  line-height: ${h1FontSize};
  font-weight: 200;
  text-transform: uppercase;
  opacity: 1;
  transition: opacity .2s ease;

  ${media.tablet`
    font-size: ${h1FontSizeTablet};
    line-height: ${h1FontSizeTablet};
  `}

  ${media.laptop`
    font-size: ${h1FontSizeLaptop};
    line-height: ${h1FontSizeLaptop};
  `}

  strong {
    font-weight: 500;
  }
`;

const H2 = styled.h2`
  display: block;
  margin: 0;
  font-size: ${h2FontSize};
  line-height: ${h2FontSize};
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(235, 235, 235, 0.8);
  opacity: 1;
  transition: opacity .2s ease;

  ${media.tablet`
    font-size: ${h2FontSizeTablet};
    line-height: ${h2FontSizeTablet};
  `}

  ${media.laptop`
    font-size: ${h2FontSizeLaptop};
    line-height: ${h2FontSizeLaptop};
  `}
`;

const TypedText = styled.span`
  display: inline-block;
  margin-left: 7px;
  font-weight: 600;
  color: ${props => props.color || 'black'};

  ${media.tablet`
    margin-left: 11px;
  `}

  ${media.laptop`
    margin-left: 8px;
  `}
`;

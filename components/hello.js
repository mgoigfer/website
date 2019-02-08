/* Vendor */
import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import Typed from 'typed.js';

/* Helpers */
import media from '../helpers/media';

export default withTheme(class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Typed text.
      currentColor: props.theme.white,
      colors: [
        props.theme.pink,
        props.theme.blue,
        props.theme.green,
        props.theme.yellow,
      ],
    };

    /* Bind event handlers */
    this.handlePreStringTyped = this.handlePreStringTyped.bind(this);
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
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  handlePreStringTyped(arrayPos) {
    this.setState(state => {
      return {
        currentColor: state.colors[arrayPos],
      };
    });
  }

  render() {
    return (
      <Hello>
        <CardWrapper>
          <Card>
            <H1>
              <span>Hola!Soy</span>
              <strong>Mikel</strong>
            </H1>

            <H2>
              Desarrollador Web
              <TypedText
                id="typed"
                color={this.state.currentColor}
              />
            </H2>
          </Card>
        </CardWrapper>

        <Loader/>
      </Hello>
    );
  }
});

const h1FontSize = '35px';
const h2FontSize = '14px';
const h1FontSizeTablet = '70px';
const h2FontSizeTablet = '29px';
const h1FontSizeLaptop = '88px';
const h2FontSizeLaptop = '37px';

const Hello = styled.section`
  position: fixed;
  border: ${props => props.theme.padding} solid ${props => props.theme.black};
  width: calc(100vw - calc(2 * ${props => props.theme.padding}));
  height: calc(100vh - calc(2 * ${props => props.theme.padding}));
  background-color: ${props => props.theme.grey};
`;

const CardWrapper = styled.div`
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

const Loader = styled.div`
  transition: background ${props => props.theme.animationDurationL}ms;

  body.is-loading & {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.black};
  }
`;

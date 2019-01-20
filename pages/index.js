/* Vendor */
import styled, { keyframes } from 'styled-components';
import Typed from 'typed.js';

/* Layouts */
import Page from '../layouts/main';

export default class extends React.Component {
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

    this.handleStringTyped = this.handleStringTyped.bind(this);
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
      preStringTyped: this.handleStringTyped,
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  handleStringTyped(arrayPos) {
    this.setState(state => {
      return {
        currentColor: state.colors[arrayPos],
      };
    });
  }

  render() {
    return (
      <Page>
        <Hello>
          <Card>
            <H1>
              Hola!Soy<strong>Mikel</strong>
            </H1>
            <H2>
              Desarrollador Web
              <TypedText
                id="typed"
                color={this.state.currentColor}
              />
            </H2>
          </Card>
        </Hello>
      </Page>
    );
  }
}

const h1FontSize = '62px';
const h2FontSize = '28px';

const Hello = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  display: block;
  width: initial;
  height: calc(${h1FontSize} + ${h2FontSize});
  max-width: 470px;
  margin: 0 auto;
  overflow: hidden;
  color: #fff;
  transform: translateY(-50%);
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
  transition: all .8s cubic-bezier(.23, 1, .32, 1);
`;

const H1 = styled.h1`
  margin: 0;
  font-size: ${h1FontSize};
  font-weight: 200;
  line-height: ${h1FontSize};
  text-transform: uppercase;

  strong {
    font-weight: 500;
  }
`;

const H2 = styled.h2`
  margin: 0;
  font-size: ${h2FontSize};
  font-weight: 500;
  line-height: ${h2FontSize};
  text-transform: uppercase;
  color: rgba(235, 235, 235, 0.8);
`;

const TypedText = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-weight: 600;
  color: ${props => props.color || 'black'};
`;

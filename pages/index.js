/* Layouts */
import Page from '../layouts/main';

/* Components */
import Hello from '../components/hello';
import Projects from '../components/projects';

export default class extends React.Component {
  static async getInitialProps() {
    return {
      projects: [
        {
          id: 1,
          title: 'Proyecto 1',
          url: 'http://placekitten.com/300/300',
        },
        {
          id: 2,
          title: 'Proyecto 2',
          url: 'http://placekitten.com/300/300',
        },
        {
          id: 3,
          title: 'Proyecto 3',
          url: 'http://placekitten.com/300/300',
        },
        {
          id: 4,
          title: 'Proyecto 4',
          url: 'http://placekitten.com/300/300',
        },
      ],
    };
  }

  render() {
    return (
      <Page>
        <Hello/>
        <Projects projects={this.props.projects}/>
      </Page>
    );
  }
}

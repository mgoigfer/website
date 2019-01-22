/* API */
import { getProjectsAPI } from '../api';

/* Layouts */
import MainLayout from '../layouts/main';

/* Components */
import Hello from '../components/hello';
import Projects from '../components/projects';

export default class extends React.Component {
  static async getInitialProps() {
    const response = await getProjectsAPI();

    return {
      projects: response.results,
    };
  }

  render() {
    const { projects } = this.props;

    return (
      <MainLayout>
        <Hello/>
        <Projects projects={ projects }/>
      </MainLayout>
    );
  }
}

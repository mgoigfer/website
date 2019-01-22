/* Vendor */
import styled from 'styled-components';

/* Helpers */
import media from '../helpers/media';

/* Layouts */
import MainLayout from '../layouts/main';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return {
      project: {
        id: query.id,
        title: 'Título del proyecto',
      },
    };
  }

  render() {
    const { project } = this.props;

    return (
      <MainLayout>
        <h1>{ project.title }</h1>
      </MainLayout>
    );
  }
}

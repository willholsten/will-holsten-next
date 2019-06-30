import Head from 'next/head';
import Header from '../Header';

import '../../styles/main.scss';

export default class Layout extends React.Component {
  render() {
    const {
      children,
      title = 'Will Holsten | Creative Front End Developer'
    } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Playfair+Display:400,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Header />
        {children}

        <footer>{'I`m here to stay'}</footer>
      </div>
    );
  }
}

import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

export default class Layout extends React.Component {
  render(props) {
    const { children, metaTitle } = this.props;
    return (
      <div>
        <Head>
          <title key='MetaTitle'>{metaTitle}</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta
            key='MetaTitle.opengraph'
            property='og:title'
            content='Will Holsten'
          />
          <meta
            key='MetaDescription'
            name='description'
            content='London-based Front End Developer specialising in React'
          />
          <meta
            key='MetaKeywords'
            name='keywords'
            content='Will Holsten, London, Front End Development, React, Web Development, NW3'
          />
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='/static/favicon.ico'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Playfair+Display:400,700|Lora&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Header />
        {children}
        <Footer />
        <script src='https://kit.fontawesome.com/d54483515e.js' />
      </div>
    );
  }
}

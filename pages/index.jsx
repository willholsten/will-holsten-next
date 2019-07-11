import React from 'react';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';
import TechStack from '../components/TechStack';

export default class Index extends React.Component {
  render() {
    return (
      <Layout metaTitle='Will Holsten | Creative Front End Developer'>
        <Landing />
        <About />
        <Work />
        <TechStack />
      </Layout>
    );
  }
}

import React from 'react';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';
import TechStack from '../components/TechStack';
import CorePrinciples from '../components/CorePrinciples';
import { configureAnchors } from 'react-scrollable-anchor';

export default class Index extends React.Component {
  render() {
    configureAnchors({ offset: -50 });
    return (
      <Layout metaTitle='Will Holsten | Creative Front End Developer'>
        <Landing />
        <About />
        <CorePrinciples />
        <Work />
        <TechStack />
      </Layout>
    );
  }
}

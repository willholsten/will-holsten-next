import React from 'react';
import Layout from '../components/Layout';
import PortfolioLayout from '../components/PortfolioLayout';
import data from '../data/caseStudies/the-ideal-sunday.json';

export default class Index extends React.Component {
  render() {
    return (
      <Layout metaTitle="Will Holsten | The Ideal Sunday">
        <PortfolioLayout
          title={data.title}
          brief={data.brief}
          work={data.work}
          background={data.background}
          link={data.url}
          technology={data.technology}
          devices={data.imageDevices}
        />
      </Layout>
    );
  }
}

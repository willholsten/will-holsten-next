import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Landing />
        <About />
        <Work />
      </Layout>
    );
  }
}

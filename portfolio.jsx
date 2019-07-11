// import Layout from '../components/Layout';
// import { getPosts } from '../data/portfolio';

// const PortfolioPage = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.show.image.medium} />
//   </Layout>
// );

// PortfolioPage.getInitialProps = async ({ req }) => {
//   const res = await getPosts();
//   const json = await res.json();
//   return { posts: json };
// };

// export default PortfolioPage;

import Layout from './components/Layout';
import fetch from 'isomorphic-unfetch';
import caseStudies from '../data/portfolio';

const Portfolio = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Portfolio.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch('data/portfolio.json');
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Portfolio;

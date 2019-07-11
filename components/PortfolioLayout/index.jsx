import PortfolioLanding from '../PortfolioLanding';
import PortfolioBrief from '../PortfolioBrief';
import PortfolioTechnology from '../PortfolioTechnology';
import PortfolioWork from '../PortfolioWork';
import PortfolioDevices from '../PortfolioDevices';
import style from './styles.scss';

export default class PortfolioLayout extends React.Component {
  render() {
    const {
      title,
      background,
      link,
      brief,
      work,
      technology,
      devices
    } = this.props;
    return (
      <div>
        <PortfolioLanding
          title={title}
          background={background}
          link={link}
          buttonText='Visit Site'
        />
        <PortfolioBrief brief={brief} />
        <PortfolioDevices devices={devices} />
        <PortfolioWork work={work} />
        <PortfolioTechnology technology={technology} />
      </div>
    );
  }
}

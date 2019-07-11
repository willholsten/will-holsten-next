import Button from '../Button/';
import style from './styles.scss';

export default class PortfolioLanding extends React.Component {
  render() {
    const { title, background, link, buttonText } = this.props;
    return (
      <div className={style.Landing}>
        <div className={style.gradientOverlay} />
        <div className={style.imageOverlay} />
        <div className={`${style.portfolioBackground} ${background}`} />
        <div className={style.landing_content}>
          <h1 className={style.title}>{title}</h1>
          <Button style='Button landing-button' link={link} text={buttonText} />
        </div>
      </div>
    );
  }
}

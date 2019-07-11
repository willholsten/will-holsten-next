import Button from '../Button/';
import style from './styles.scss';

const Landing = () => (
  <div className={style.Landing}>
    <div className={style.gradientOverlay} />
    <div className={style.imageOverlay} />
    <div className={style.landingContent}>
      <h1 className={style.title}>Will Holsten</h1>
      <p className={style.subTitle}>Creative Front End Developer</p>
      <Button
        classes='landingButton white-bg'
        link='#latest-work'
        text='Latest Work'
      />
    </div>
  </div>
);

export default Landing;

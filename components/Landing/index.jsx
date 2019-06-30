import Button from '../Button/';
import style from './styles.scss';

const Landing = () => (
  <div className={style.Landing}>
    <div className={style.gradient_overlay} />
    <div className={style.image_overlay} />
    <div className={style.landing_content}>
      <h1 className={style.title}>Will Holsten</h1>
      <p className={style.sub_title}>Creative Front End Developer</p>
      <Button style='Button landing-button' text='Latest Work' />
      <Button style='Button landing-button' text='CV' />
    </div>
  </div>
);

export default Landing;

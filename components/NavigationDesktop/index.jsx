import Link from 'next/link';
import Logo from '../Logo';

import style from './styles.scss';

const NavigationDesktop = () => (
  <div className={style.NavigationDesktop}>
    <a href='/work'>About</a>
    <a href='/work'>Work</a>
    <a href='/work'>Tech Stack</a>
    <a href='/work'>Contact</a>
  </div>
);

export default NavigationDesktop;

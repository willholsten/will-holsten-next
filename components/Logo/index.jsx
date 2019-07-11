import React from 'react';
import Icon from '../../static/vectors/logo.svg';

import style from './styles.scss';

const Logo = () => (
  <a href='/' className={style.Logo}>
    <Icon />
  </a>
);

export default Logo;

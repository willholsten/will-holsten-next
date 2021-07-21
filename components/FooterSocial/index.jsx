import React from 'react';
import style from './styles.scss';

export default class FooterSocial extends React.Component {
  render() {
    return (
      <div className={style.connect}>
        <a href='https://github.com/willholsten' target='_blank'>
          <i className='fab fa-github-square' />
        </a>
        <a href='https://www.linkedin.com/in/willholsten/' target='_blank'>
        <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    );
  }
}

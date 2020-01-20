import React from 'react';
import style from './styles.scss';

export default class FooterAvailability extends React.Component {
  render() {
    return (
      <span className={style.availability}>
        <span className={style.pulse} />
        Now available for contract positions
      </span>
    );
  }
}

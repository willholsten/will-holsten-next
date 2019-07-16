import React from 'react';
import style from './styles.scss';

export default class FooterAvailability extends React.Component {
  render() {
    return (
      <span className={style.availability}>
        <span className={style.pulse} />
        Not currently available for contract positions.
        <span className={style.date}>(Available early September)</span>
      </span>
    );
  }
}

import React from 'react';
import style from './styles.scss';

export default class Button extends React.Component {
  render(props) {
    const { classes, text, link } = this.props;
    return (
      <a href={link}>
        <button className={`${style.Button} ${classes}`}>{text}</button>
      </a>
    );
  }
}

import React from 'react';
import style from './styles.scss';

export default class Button extends React.Component {
  render() {
    return (
      <button className={`${style.Button} ${this.props.classes}`}>
        {this.props.text}
      </button>
    );
  }
}

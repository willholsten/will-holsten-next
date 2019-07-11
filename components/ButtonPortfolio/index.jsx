import React from 'react';
import Link from 'next/link';
import Button from '../Button';

export default class ButtonPortfolio extends React.Component {
  render() {
    const { link, title } = this.props;
    return (
      <Link as={`/${link}`} href={`/${title}`}>
        <a>
          <button className={`${style.Button} ${classes}`}>{text}</button>
        </a>
      </Link>
    );
  }
}

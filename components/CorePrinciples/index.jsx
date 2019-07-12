import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import corePrinciples from '../../data/corePrinciples';
import style from './styles.scss';

export default function CorePrinciples() {
  return (
    <ScrollableAnchor id={'corePrinciples'}>
      <div className={style.CorePrinciples}>
        <h2 className={style.title}>Core Principles</h2>
        <ul className={style.principleContainer}>
          {corePrinciples.map((principle, key) => (
            <li className={style.principle} key={principle.title}>
              <div className={style.imageContainer}>
                <img src={principle.icon} />
              </div>
              <div>
                <h4 className={style.principleTitle}>{principle.title}</h4>
                <p className={style.text}>{principle.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ScrollableAnchor>
  );
}

import React from 'react';
import WorkBrick from '../WorkBrick';
import style from './styles.scss';

export default function Work() {
  return (
    <div className={style.Work}>
      <h2>Latest Work</h2>
      <WorkBrick />
    </div>
  );
}

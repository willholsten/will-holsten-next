import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import WorkTile from '../WorkTile';
import style from './styles.scss';

export default function Work() {
  return (
    <ScrollableAnchor id={'latest-work'}>
      <div className={style.Work}>
        <h2>Latest Work</h2>
        <WorkTile />
      </div>
    </ScrollableAnchor>
  );
}

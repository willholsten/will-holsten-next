import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import style from './styles.scss';

export default function About() {
  return (
    <ScrollableAnchor id={'about'}>
      <div className={style.About}>
        <h2 className={style.title}>About Me</h2>
        <div className={style.text}>
          <img
            className={style.Profile}
            src='../../static/images/profile.png'
          />
          <p className={style.intro}>
            Hey! I'm Will, a London-based front end developer.
          </p>
          <p>
            Originally from South Australia, I graduated from The University of
            Adelaide with a Bachelor of Design Studies and have since grown an
            interest in both UX design and front end development. Having now
            worked in both of these fields for a number of years, I have
            extensive experience working in multi-functional, agile team
            environments with a primary focus on eCommerce solutions.
          </p>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

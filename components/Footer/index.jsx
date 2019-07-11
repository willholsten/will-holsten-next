import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from '../Button';
import style from './styles.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
        <footer className={style.Footer}>
          <div className={style.imageOverlay} />
          <h2 className={style.title}>Let's Work Together</h2>
          <Button
            classes='emailLink tomato-bg whiteText'
            link='mailto:mail@willholsten.com'
            text="Let's Talk!"
          />
          <div className={style.connect}>
            <a href='https://github.com/willholsten' target='_blank'>
              <i className='fab fa-github-square' />
            </a>
            <a href='https://www.linkedin.com/in/willholsten/' target='_blank'>
              <i className='fab fa-linkedin' />
            </a>
          </div>
          <div className={style.copyright}>
            Will Holsten Ltd. &copy; All Rights Reserved.
          </div>
        </footer>
      </ScrollableAnchor>
    );
  }
}

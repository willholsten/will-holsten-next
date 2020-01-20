import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from '../Button';
import FooterSocial from '../FooterSocial';
import FooterAvailability from '../FooterAvailability';
import style from './styles.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
        <footer className={style.Footer}>
          <div className={style.imageOverlay} />
          <h2 className={style.title}>Let's Work Together</h2>
          <FooterAvailability />
          <Button
            classes='emailLink tomato-bg whiteText'
            link='mailto:mail@willholsten.com'
            text="Let's Talk!"
          />
          <FooterSocial />
          <div className={style.copyright}>
            Will Holsten Ltd. &copy; {new Date().getFullYear()} All Rights Reserved.
          </div>
        </footer>
      </ScrollableAnchor>
    );
  }
}

import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import style from './styles.scss';

export default function Companies() {
  return (
    <ScrollableAnchor id={'about'}>
      <div className={style.Companies}>
        <h2 className={style.title}>Companies I've worked with</h2>
        <div className={style.images}>
          <img
            className={style.Profile}
            src='../../static/images/logo-samsung.png'
          />
          <img
            className={style.Profile}
            src='../../static/images/logo-idmobile.png'
          />
          <img
            className={style.Profile}
            src='../../static/images/logo-surfdome.png'
          />
          <img
            className={style.Profile}
            src='../../static/images/logo-iris.png'
          />
        </div>
      </div>
    </ScrollableAnchor>
  );
}

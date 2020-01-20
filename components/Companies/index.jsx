import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import style from './styles.scss';

export default function Companies() {
  return (
    <ScrollableAnchor id={'about'}>
      <div className={style.Companies}>
        <h2 className={style.title}>Companies I've worked with</h2>
        <div className={style.images}>
          <div className={style.imageContainer}>
            <img
              className={style.Profile}
              src='../../static/images/logo-samsung.png'
            />
          </div>
          <div className={style.imageContainer}>
            <img
              className={style.Profile}
              src='../../static/images/logo-idmobile.png'
            />
          </div>
          <div className={style.imageContainer}>
            <img
              className={style.Profile}
              src='../../static/images/logo-surfdome.png'
            />
          </div>
          <div className={style.imageContainer}>
            <img
              className={style.Profile}
              src='../../static/images/logo-iris.png'
            />
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

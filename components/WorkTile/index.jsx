import React from 'react';
import Button from '../Button/';
import * as caseStudies from './../../data/caseStudies';
import style from './styles.scss';

export default class WorkTile extends React.Component {
  render() {
    let Portfolio = Object.values(caseStudies);
    return (
      <div>
        <ul className={style.WorkBrickContainer}>
          {Portfolio.map((item, key) => (
            <li className={style.WorkBrick} key={item.slug}>
              <div className={`${style.imageContainer} ${item.background}`}>
                <img className={style.image} src={item.image} alt={item.name} />
              </div>
              <div className={style.text}>
                <h3 className={style.title}>{item.title}</h3>
                <p>{item.summary}</p>
                <ul className={style.technology}>
                  {item.technology.map((tech, key) => (
                    <li className={style.tech} key={tech.id}>
                      <img src={tech.icon} alt={tech.name} title={tech.name} />
                    </li>
                  ))}
                </ul>
                <Button
                  link={item.slug}
                  title={item.title}
                  classes={item.background}
                  background={item.background}
                  text='View Project'
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

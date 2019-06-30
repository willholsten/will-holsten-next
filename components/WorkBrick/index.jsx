import React from 'react';
import Portfolio from './../../data/Portfolio';
import Button from '../Button/';
import style from './styles.scss';

export default class Workbrick extends React.Component {
  render() {
    return (
      <div>
        <ul className={style.WorkBrickContainer}>
          {Portfolio.map((item, key) => (
            <li className={style.WorkBrick} key={item.id}>
              <div className={`${style.imageContainer} ${item.background}`}>
                <img className={style.image} src={item.image} alt={item.name} />
              </div>
              <div className={style.text}>
                <h3 className={style.title}>{item.title}</h3>
                <p>{item.summary}</p>
                <ul className={style.technology}>
                  {item.technology.map((tech, key) => (
                    <li className={style.tech} key={tech.name}>
                      <img src={tech.image} alt={tech.name} title={tech.name} />
                    </li>
                  ))}
                </ul>
                <Button classes={`${item.background}`} text='View Project' />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

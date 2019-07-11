import ScrollableAnchor from 'react-scrollable-anchor';
import Technologies from '../../data/technologies.json';
import style from './styles.scss';

export default function TechStack() {
  return (
    <ScrollableAnchor id={'tech-stack'}>
      <div className={style.TechStack}>
        <h2 className={style.title}>Tech Stack</h2>
        <ul className={style.technologyContainer}>
          {Technologies.map((tech, key) => (
            <li className={style.task} key={tech.name}>
              <ul className={style.technology}>
                <li>
                  <div className={style.iconContainer}>
                    <img className={style.icon} src={tech.icon} />
                  </div>
                  {tech.name}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </ScrollableAnchor>
  );
}

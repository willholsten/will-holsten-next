import style from './styles.scss';

export default class PortfolioTechnology extends React.Component {
  render() {
    const { technology } = this.props;
    return (
      <div className={style.PortfolioTechnology}>
        <h2>Key Technologies</h2>
        <div className={style.tasks}>
          <ul className={style.technologyContainer}>
            {technology.map((tech, key) => (
              <li className={style.task} key={tech.id}>
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
      </div>
    );
  }
}

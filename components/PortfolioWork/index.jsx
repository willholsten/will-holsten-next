import style from './styles.scss';

export default class PortfolioTechnology extends React.Component {
  render() {
    const { work } = this.props;
    return (
      <div className={style.PortfolioWork}>
        <h2>What Was Involved</h2>
        <div className={style.tasks}>
          <ul className={style.taskContainer}>
            {work.map((task, key) => (
              <li className={style.task} key={task.name}>
                <i className='fas fa-check-circle' />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

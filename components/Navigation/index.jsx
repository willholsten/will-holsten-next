import style from './styles.scss';

export default class Navigation extends React.Component {
  render() {
    const { classes, handleCloseMenu } = this.props;
    return (
      <div className={`${style.Navigation} ${classes}`}>
        <div className={style.NavigationContainer}>
          <a href='/#about' onClick={handleCloseMenu}>
            About
          </a>
          <a href='/#latest-work' onClick={handleCloseMenu}>
            Latest Work
          </a>
          <a href='/#tech-stack' onClick={handleCloseMenu}>
            Tech Stack
          </a>
          <a href='/#contact' onClick={handleCloseMenu}>
            Contact
          </a>
        </div>
      </div>
    );
  }
}

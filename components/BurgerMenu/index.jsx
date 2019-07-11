import style from './styles.scss';

export default class BurgerMenu extends React.Component {
  render(props) {
    const { classes } = this.props;
    return (
      <div
        className={`${style.BurgerMenu} ${classes}`}
        onClick={this.props.handleToggleMenu}>
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

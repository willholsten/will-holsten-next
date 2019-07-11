import BurgerMenu from '../BurgerMenu';
import Navigation from '../Navigation';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleToggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  handleCloseMenu = () => {
    this.setState({
      menuOpen: false
    });
  };

  render() {
    return (
      <nav>
        <Navigation
          handleCloseMenu={() => this.handleCloseMenu()}
          classes={this.state.menuOpen ? 'open' : ''}
        />
        <BurgerMenu
          classes={this.state.menuOpen ? 'invert' : ''}
          handleToggleMenu={() => this.handleToggleMenu()}
        />
      </nav>
    );
  }
}

import React from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import Container from '@material-ui/core/Container';

import style from './styles.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: true
    };
    this.listenScrollEvent = e => {
      if (window.scrollY > 40) {
        this.setState({ scrollTop: false });
      } else {
        this.setState({ scrollTop: true });
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <header
        className={`
      ${style.Header}
      ${this.state.scrollTop ? '' : style.scroll}
      `}
      >
        <Container>
          <Logo />
          <Menu />
        </Container>
      </header>
    );
  }
}

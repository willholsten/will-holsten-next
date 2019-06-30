import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import Container from '@material-ui/core/Container';

import style from './styles.scss';

export default class Header extends React.Component {
  state = {
    headerTop: true
  };

  listenScrollEvent = e => {
    if (window.scrollY > 40) {
      this.setState({ headerTop: false });
    } else {
      this.setState({ headerTop: true });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    // const { headerTop } = this.state;
    return (
      <header
        className={`
      ${style.Header}
      ${this.state.headerTop ? style.Top : style.scroll}
      `}>
        <Container maxWidth='lg'>
          <Logo className='Logo' />
          <Navigation />
        </Container>
      </header>
    );
  }
}

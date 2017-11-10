import React, { Component } from 'react';
import Logo from '../../containers/Logo';
import User from '../../components/User';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <User />
      </div>
    );
  }
}

export default Header;
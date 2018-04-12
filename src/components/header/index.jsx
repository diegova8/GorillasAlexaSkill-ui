import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/gl-logo.png';
import Login from '../../containers/login'

import '../../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-wrapper">
          <Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
          <Login />
        </div>
      </header>
    );
  }
}

export default Header;

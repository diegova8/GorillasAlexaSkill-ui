import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/footer.css';

import logo from '../../images/gl-logo.png';

const Footer = () => (
  <footer>
    <Link to="/"><img src={logo} className="footer-logo" alt="img" /></Link>
  </footer>
)

export default Footer

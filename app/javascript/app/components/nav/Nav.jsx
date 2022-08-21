import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';


const Nav = () => (
  <div>
    <div className="navbar flex-between primary-blue">
      <div className="navlogo">
        CODE-SOPHIE
      </div>
      <div className="flex navigation">
        <div className="navitem">
          <Link to="/" element={<Home />}>Home</Link>
        </div>
        <div className="navitem">
          <Link to="/about" element={<About />}>About</Link>
        </div>
        <div className="navitem">
          <Link to="/contact" element={<Contact />}>Contact</Link>
        </div>
        <div className="navitem primary-button secondary-green">
          <Link to="/login" element={<Login />}>Login</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Nav;
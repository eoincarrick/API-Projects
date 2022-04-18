import React, { useState } from 'react';
import Logo from '../assets/eoin.svg';
import { Search } from './index';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='navbarContainer'>
      <div className='navbarHeader'>
        <div className='navbarLogo'>
          <img className='logo' src={Logo} alt='logo' />
        </div>
        <div className='navbarSearchInput'>
          <Search />
        </div>
      </div>
      <div className='navbarUl'>
        <ul className='navbarLinks'>
          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/contact'>Contact</Link>
          <Link className='link' to='/create-account'>Create Account</Link>
        </ul>
        <div className='button' onClick={handleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import Logo from '../assets/eoin.svg';
import { Search } from './index';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbarHeader'>
        <div className='navbarLogo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='navbarSearchInput'>
          <Search />
        </div>
      </div>
      <div className='navbarLinks'>
        <ul>
          <Link></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

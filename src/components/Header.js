import React from 'react';
import { Link } from 'react-scroll';

import Logo from '../assets/datta.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* button */}
        <div className='flex items-center gap-x-6'>
          <a href='#' className='btn-link'>Home</a>
          <a href='#' className='btn-link'>Servicios</a>
          <a href='#' className='btn-link'>Nuestro trabajo</a>
          <a href='#' className='btn-link'>Acerca de</a>
          <button className='btn btn-sm text-gray-900'>Work with us</button>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;

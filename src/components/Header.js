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
        <div className='flex items-center gap-x-6 hidden lg:flex'>
          <Link
            to='home'
            activeClass=''
            smooth={true}
            spy={true}
            className="cursor-pointer btn-link"
          >Home</Link>
          <Link
            to='services'
            activeClass=''
            smooth={true}
            spy={true}
            className="cursor-pointer btn-link"
          >Servicios</Link>
          <Link
            to='services'
            activeClass=''
            smooth={true}
            spy={true}
            className="cursor-pointer btn-link"
          >Nuestro trabajo</Link>
          <Link
            to='services'
            activeClass=''
            smooth={true}
            spy={true}
            className="cursor-pointer btn-link"
          >Experiencia</Link>
          <Link
            to='services'
            activeClass=''
            smooth={true}
            spy={true}
            className="btn btn-sm text-gray-900 flex items-center justify-center"
          >Work with us</Link>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;

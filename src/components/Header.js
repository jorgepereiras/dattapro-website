import React from 'react';

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
        <button className='btn btn-sm'>Work with us</button>
      </div>
    </div>
  </header>;
};

export default Header;

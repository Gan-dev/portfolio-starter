import React from 'react';
import Logo from '../assets/logo.png'
const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a className='w-1/6' href='#'>
          <img  src={Logo} alt='logo'></img>
        </a>
        {/* button* */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;

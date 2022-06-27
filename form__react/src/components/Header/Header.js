import React from 'react';
import './Header.css';

const Header = () => {
   
    return (
      <header className='header'>
         <h1 className="title" onClick={console.log('console')}>Form</h1>
      </header>
    )
}

export default Header;

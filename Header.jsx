import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function Header() {
  return (
    <header className='navbar'>
      <a href='/'>DEV@Deakin</a>
      <Link to='/home'>Find Questions</Link>
      <input type='text' placeholder='Search..' />
      <nav className='right'>
        <Link to='/u_val'>Post</Link>
        <Link to='/SubscriptionPage'>Subscribe</Link>
        <Link to='/Login'>Login</Link>
      </nav>
    </header>
  );
}

export default Header;

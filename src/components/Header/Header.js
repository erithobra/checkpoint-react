import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div> 
      <h1>This is the header</h1>
      <nav>
      <Link to='/'>Homepage</Link>
      <Link to='/new-contact'>New contact</Link>
      </nav>
    </div>
  )
}


export default Header;
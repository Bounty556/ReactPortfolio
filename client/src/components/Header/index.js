import React from 'react';

import './header.css';

// The header will actually be a column that goes across the left side of
// the screen. It is assumed that the containing component will wrap the
// Header component in a Bootstrap row container.
//
// On mobile and small browser widths, the header will instead be a thin
// bar at the top of the page
function Header() {
  return <nav className='col-2' id='header'>
    <div id='headerLinks'>
      <a href='/'><p>About Me</p></a>
      <a href='/'><p>Portfolio</p></a>
      <a href='/'><p>Contact</p></a>
      <a href='/'><p>Resumé</p></a>
    </div>
  </nav>;
}

export default Header;

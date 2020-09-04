import React, { useState } from 'react';

import Footer from '../Footer';

import './header.css';

// The header will actually be a column that goes across the left side of
// the screen. It is assumed that the containing component will wrap the
// Header component in a Bootstrap row container.
//
// On mobile and small browser widths, the header will instead be a thin
// bar at the top of the page
function Header() {
  const [links] = useState(() => {
    const tempLinks = [
      {
        name: 'About',
        link: '/'
      },
      {
        name: 'Portfolio',
        link: '/Portfolio'
      },
      {
        name: 'Contact',
        link: '/Contact'
      },
      {
        name: 'Resumé',
        link: '/files/resume.pdf',
        newTab: true
      }
    ];

    for (let i = 0; i < tempLinks.length; i++) {
      if (window.location.pathname.toLowerCase() === tempLinks[i].link.toLowerCase()) {
        tempLinks[i].currentPage = true;
        break;
      }
    }

    return tempLinks;
  });

  return (
    <div>
      <nav id='header'>
        <div id='socialLogos'>
          <a href='https://github.com/Bounty556' target='_blank' rel='noopener noreferrer'>
            <img src='/images/logos/github.png' alt='Github Logo' />
          </a>
          <a
            href='https://www.linkedin.com/in/jacob-p-893aa4134/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/images/logos/linkedIn.png' alt='LinkedIn Logo' />
          </a>
        </div>
        <div id='headerLinks'>
          {links.map((link, i) => {
            if (link.currentPage) {
              return (
                <p id='currentPage' key={i}>
                  {link.name}
                </p>
              );
            } else {
              if (link.newTab) {
                return (
                  <a href={link.link} key={i} target='_blank' rel='noopener noreferrer'>
                    <p>{link.name}</p>
                  </a>
                );
              } else {
                return (
                  <a href={link.link} key={i}>
                    <p>{link.name}</p>
                  </a>
                );
              }
            }
          })}
        </div>
        <Footer />
      </nav>
      <div className='col-2' />
    </div>
  );
}

export default Header;

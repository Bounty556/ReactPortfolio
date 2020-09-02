import React, { useState } from 'react';

import './projectCarousel.css';

function ProjectCarousel() {
  const [projects] = useState({});

  return (
    <div className='col-10' id='carouselHeader'>
      <p>Project Title!</p>
      <div id='imageHolder'>
        <img className='sideImage' src='/images/projectIcons/codeQuiz.png' alt='Previous Project' />
        <img
          className='mainImage'
          src='/images/projectIcons/eatDaBurger.png'
          alt='Current Project'
        />
        <img
          className='sideImage'
          src='/images/projectIcons/employeeSummary.png'
          alt='Next Project'
        />
      </div>
    </div>
  );
}

export default ProjectCarousel;

import React from 'react';

import Header from '../../components/Header';
import ProjectCarousel from '../../components/ProjectCarousel';

function About() {
  return (
    <div className='container' id='page'>
      <div className='row'>
        <Header />
        <ProjectCarousel />
      </div>
    </div>
  );
}

export default About;

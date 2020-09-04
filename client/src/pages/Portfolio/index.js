import React, { useState } from 'react';

import Header from '../../components/Header';
import ProjectCarousel from '../../components/ProjectCarousel';
import Project from '../../components/Project';

import './portfolio.css';

function About() {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className='container' id='page'>
      <div className='row' id='mainRow'>
        <Header />
        <div className='col-10' id='portfolioCol'>
          <ProjectCarousel project={currentProject} setProject={setCurrentProject} />
          <Project project={currentProject} />
        </div>
      </div>
    </div>
  );
}

export default About;

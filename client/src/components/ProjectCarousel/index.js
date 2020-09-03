import React, { useState } from 'react';

import Project from '../Project';
import ProjectInfo from './projectInfo';

import './projectCarousel.css';

// Custom carousel that shows icons for the current project and the previous
// and next projects. Has dots underneath to navigate quicker, as well as
// next and previous buttons
function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0);
  const [projects] = useState(ProjectInfo);

  const goToRelativeProject = delta => {
    let tempProject = currentProject + delta;

    while (tempProject >= projects.length) {
      tempProject -= projects.length;
    }
    while (tempProject < 0) {
      tempProject += projects.length;
    }

    setCurrentProject(tempProject);
  };

  const getRelativeProject = delta => {
    let tempProject = currentProject + delta;

    while (tempProject >= projects.length) {
      tempProject -= projects.length;
    }
    while (tempProject < 0) {
      tempProject += projects.length;
    }

    return projects[tempProject];
  };

  return (
    <div className='col-10' id='portfolio'>
      <div id='carouselHeader'>
        <span className='carousel-control-prev-icon' onClick={() => goToRelativeProject(-1)} />
        <div id='innerCarousel'>
          <p>{getRelativeProject(0).title}</p>
          <div id='imageHolder'>
            <img
              className='sideImage'
              src={'/images/projectIcons/' + getRelativeProject(-1).icon}
              alt='Previous Project'
              onClick={() => goToRelativeProject(-1)}
            />
            <img
              className='mainImage'
              src={'/images/projectIcons/' + getRelativeProject(0).icon}
              alt='Current Project'
            />
            <img
              className='sideImage'
              src={'/images/projectIcons/' + getRelativeProject(1).icon}
              alt='Next Project'
              onClick={() => goToRelativeProject(1)}
            />
          </div>
          <div id='carouselPips'>
            {projects.map((project, i) => (
              <img
                src={
                  i === currentProject
                    ? '/images/carousel/chosenPip.png'
                    : '/images/carousel/idlePip.png'
                }
                onClick={() => goToRelativeProject(i - currentProject)}
                alt={'Project number ' + (i + 1)}
                key={i}
              />
            ))}
          </div>
        </div>
        <span className='carousel-control-next-icon' onClick={() => goToRelativeProject(1)} />
      </div>

      <Project project={currentProject} />
    </div>
  );
}

export default ProjectCarousel;

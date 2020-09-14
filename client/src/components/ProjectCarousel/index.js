import React, { useState } from 'react';

import ProjectInfo from './projectInfo';

import './projectCarousel.css';

// Custom carousel that shows icons for the current project and the previous
// and next projects. Has dots underneath to navigate quicker, as well as
// next and previous buttons
function ProjectCarousel(props) {
  const [projects] = useState(ProjectInfo);

  const goToRelativeProject = delta => {
    let tempProject = props.project + delta;

    while (tempProject >= projects.length) {
      tempProject -= projects.length;
    }
    while (tempProject < 0) {
      tempProject += projects.length;
    }

    props.setProject(tempProject);
  };

  const getRelativeProject = delta => {
    let tempProject = props.project + delta;

    while (tempProject >= projects.length) {
      tempProject -= projects.length;
    }
    while (tempProject < 0) {
      tempProject += projects.length;
    }

    return projects[tempProject];
  };

  return (
    <div className='row' id='carouselHeader'>
      <div id='innerCarousel'>
        <div id='imageHolder'>
          <img
            className='rounded sideImage'
            src={'/images/projectIcons/' + getRelativeProject(-1).icon}
            alt='Previous Project'
            onClick={() => goToRelativeProject(-1)}
          />
          <img
            id='arrowLeft'
            src={'/images/carousel/arrow.png'}
            alt='Previous Project'
            onClick={() => goToRelativeProject(-1)}
          />
          <img
            className='rounded mainImage'
            src={'/images/projectIcons/' + getRelativeProject(0).icon}
            alt='Current Project'
          />
          <img
            className='rounded sideImage'
            src={'/images/projectIcons/' + getRelativeProject(1).icon}
            alt='Next Project'
            onClick={() => goToRelativeProject(1)}
          />
          <img
            id='arrowRight'
            src={'/images/carousel/arrow.png'}
            alt='Next Project'
            onClick={() => goToRelativeProject(1)}
          />
        </div>
        <div id='carouselPips'>
          {projects.map((project, i) => (
            <img
              src={
                i === props.project
                  ? '/images/carousel/chosenPip.png'
                  : '/images/carousel/idlePip.png'
              }
              onClick={() => goToRelativeProject(i - props.project)}
              alt={'Project number ' + (i + 1)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;

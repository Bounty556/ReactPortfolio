import React, { useState, useEffect } from 'react';

import ProjectInfo from './projectInfo';

import './project.css';
import projectInfo from './projectInfo';

function Project(props) {
  const [currentProject, setCurrentProject] = useState(ProjectInfo.projects[props.project]);

  useEffect(() => {
    setCurrentProject(ProjectInfo.projects[props.project]);
  }, [props.project]);

  return (
    <div className='overflow-auto' id='projectContainer'>
      <p className='lead' id='projectTitle'>
        {currentProject.title}
      </p>
      <p id='technologiesUsed'>
        {currentProject.technologies.map((tech, i) => (
          <div className='toolTip' key={i}>
            <a href={projectInfo.technologies[tech].link} target='_blank' rel='noopener noreferrer'>
              <img
                src={'/images/techIcons/' + ProjectInfo.technologies[tech].icon}
                alt={ProjectInfo.technologies[tech].name}
              />
            </a>
            <span className='toolTipText'>
              This project uses {ProjectInfo.technologies[tech].name}
            </span>
          </div>
        ))}
      </p>
    </div>
  );
}

export default Project;

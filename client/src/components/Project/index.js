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
    <div className='row' id='projectContainer'>
      <div className='col-12' id='projectColumn'>
        <p className='lead' id='projectTitle'>
          {currentProject.title}
        </p>
        <p id='technologiesUsed'>
          {currentProject.technologies.map((tech, i) => (
            <span className='toolTip' key={i}>
              <a
                href={projectInfo.technologies[tech].link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={'/images/techIcons/' + ProjectInfo.technologies[tech].icon}
                  alt={ProjectInfo.technologies[tech].name}
                />
              </a>
              <span className='toolTipText'>
                This project uses {ProjectInfo.technologies[tech].name}
              </span>
            </span>
          ))}
        </p>
        <div id='projectDescription'>
          <p id='projectImage'>
            <img src={'/images/projects/' + currentProject.image} alt={currentProject.title} />
          </p>
          <p>{currentProject.description}</p>
          <div id='projectLinks'>
            <a href={currentProject.github} target='_blank' rel='noopener noreferrer'>
              <img className='logo' src='/images/logos/githubDark.png' alt='Github' />Github Repo
            </a>
            {currentProject.live ? (
              <a href={currentProject.live} target='_blank' rel='noopener noreferrer'>
                <img className='logo' src='/images/logos/live.png' alt='Live Site' />Live Site
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

import React from 'react';

import Header from '../../components/Header';

import './about.css';

function About() {
  return (
    <div className='container' id='page'>
      <div className='row'>
        <Header />
        <div className='col-10' id='contentCol'>
          <div id='content'>
            <img className='float-left' id='selfPic' src='/images/about/selfPic1.jpg' alt='Jacob Peterson' />
            <p>
              My name is Jacob Peterson. I'm a 20 year old Drummer, Game Developer, and Full Stack
              Web Development Graduate from the University of Utah, near my hometown of Riverton. I
              tend to spend most of my time programming, whether it's working on a game engine,
              testing out new website designs, or working with my friends on the card game we wrote
              for our final project, Change of Seasons.
              <br /> <br />
              Outside of developing I love surrounding myself with music, generally by playing the
              drums with my friend who plays guitar or covering songs by myself.
              <br /> <br />
              As far as programming goes, I'm fluent in C++, C, Java, Python, Javascript, HTML, CSS
              and other web-related technologies such as JQuery, Node, React, Handlebars, MySQL,
              MongoDB and Express. I am most comfortable developing on the MERN stack, however I am
              a quick learner and I'm always interested in learning new concepts.
              <br /> <br />
              Take a look through my <a href='/Portfolio'>Portfolio</a> to see some of the projects
              I've worked on in the past. I will be keeping my Portfolio as up to date as possible
              with any new projects I work on in the future as well. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

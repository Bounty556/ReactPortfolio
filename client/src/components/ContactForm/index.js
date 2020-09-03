import React from 'react';

import './contactForm.css';

function ContactForm() {
  return (
    <form className='h-100'>
      <div className='row h-100 justify-content-center align-items-center'>
        <div className='col-6'>
          <div className='clearfix' id='socialLinks'>
            <a
              className='float-left'
              href='https://github.com/Bounty556'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/images/logos/githubDark.png' alt='Github Logo' />
            </a>
            <a
              className='float-right'
              href='https://www.linkedin.com/in/jacob-p-893aa4134/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/images/logos/linkedIn.png' alt='LinkedIn Logo' />
            </a>
          </div>
          <input type='email' class='form-control' id='emailInput' placeholder='name@example.com' />
          <textarea class='form-control' id='messageInput' rows='4' placeholder='Message' />
          <button type='submit' class='btn btn-light mx-auto' style={{ display: 'block' }}>
            Submit
          </button>
          <br /> <br />
          <p style={{ textAlign: 'center' }}>
            If you do not wish to use the form above, I can also be contacted at{' '}
            <strong>Jacobmayday@gmail</strong>. I answer all responses within 24 hours.
          </p>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;

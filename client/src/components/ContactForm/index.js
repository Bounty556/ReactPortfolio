import React, { useRef } from 'react';

import Mailer from './mailer';

import './contactForm.css';

function ContactForm() {
  const subject = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const submitForm = event => {
    event.preventDefault();

    const subjectText = subject.current.value;
    const emailText = email.current.value;
    const messageText = message.current.value;
    if (subjectText.length > 0 && emailText.length > 0 && messageText.length > 0) {
      Mailer(subjectText, emailText, messageText);

      subject.current.value = '';
      email.current.value = '';
      message.current.value = '';
    }
  };

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
              <img src='/images/logos/githubDark.png' alt='Github Logo' style={{ width: '24px' }} />
            </a>
            <a
              className='float-right'
              href='https://www.linkedin.com/in/jacob-p-893aa4134/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='/images/logos/linkedIn.png' alt='LinkedIn Logo' style={{ width: '24px' }} />
            </a>
          </div>
          <input
            type='text'
            className='form-control'
            id='subjectInput'
            placeholder='Subject'
            ref={subject}
          />
          <input
            type='email'
            className='form-control'
            id='emailInput'
            placeholder='YourEmail@Example.com'
            ref={email}
          />
          <textarea
            className='form-control'
            id='messageInput'
            rows='4'
            placeholder='Message'
            ref={message}
          />
          <button
            type='submit'
            className='btn btn-light mx-auto'
            style={{ display: 'block' }}
            onClick={submitForm}
          >
            Submit
          </button>
          <br />
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

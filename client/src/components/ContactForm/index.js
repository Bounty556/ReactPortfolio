import React from 'react';

import './contactForm.css';

function ContactForm() {
  return (
    <form className='h-100' action='https://formspree.io/mjvaqnay' method='POST'>
      <div className='row h-100 justify-content-center align-items-center'>
        <div className='col-md-10 col-lg-6'>
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
          <input type='text' className='form-control' placeholder='Your Name' name='name' />
          <input
            type='email'
            className='form-control'
            placeholder='YourEmail@Example.com'
            name='_replyTo'
          />
          <textarea className='form-control' rows='4' placeholder='Message' name='message' />
          <button type='submit' className='btn btn-light mx-auto' style={{ display: 'block' }}>
            Submit
          </button>
          <br />
          <p style={{ textAlign: 'center' }}>
            If you do not wish to use the form above, I can also be contacted at{' '}
            <strong>Jacobmayday@gmail</strong>. Alternatively you can text or call me at{' '}
            <strong>801-910-1680</strong>. I answer all written responses within 24 hours.
          </p>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;

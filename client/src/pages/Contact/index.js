import React from 'react';

import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header';

function Contact() {
  return (
    <div className='container' id='page'>
      <div className='row' id='mainRow'>
        <Header />
        <div className='col-md-12 col-lg-10'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;

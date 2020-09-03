import React from 'react';

import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header';

function Contact() {
  return (
    <div className='container' id='page'>
      <div className='row'>
        <Header />
        <div className='col-10'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;

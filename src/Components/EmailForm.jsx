import React from 'react';
import './email.css';

const EmailForm = () => {
  return (
    <div className='contactDetails'>
      
      <p>
        Email:
        <a href='mailto:amilinenihemika@gmail.com'> amilinenihemika@gmail.com</a>
      </p>
      <p>
        LinkedIn:
        <a
          href='https://www.linkedin.com/in/hemika-amilineni-3737b9327'
          target='_blank'
          rel='noreferrer'
        >
          linkedin.com/in/hemika-amilineni-3737b9327
        </a>
      </p>
    </div>
  );
};

export default EmailForm;
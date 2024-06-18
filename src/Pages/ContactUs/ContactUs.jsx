import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        If you are interested to know more about our project and the research work,
        do drop us a message at <a href="mailto:bracu.duburi@bracu.ac.bd">bracu.duburi@bracu.ac.bd</a> and we will get back in touch with you!
      </p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        
        <div className="contact-person">
          <h3>Dr. Dave Dowland</h3>
          <p>Registrar, BRAC University</p>
          <p>Email: <a href="mailto:register@bracu.ac.bd">register@bracu.ac.bd</a></p>
        </div>

        <div className="contact-person">
          <h3>Dr. Md. Khalilur Rahman</h3>
          <p>Advisor of BRACU Duburi & Professor, BRAC University</p>
          <p>Email: <a href="mailto:khalilur@gmail.com">khalilur@gmail.com</a></p>
        </div>

        <div className="contact-person">
          <h3>A.T.M. Masum Billah</h3>
          <p>Team Lead, BRACU Duburi</p>
          <p>Email: <a href="mailto:a.t.m.masum.billah@g.bracu.ac.bd">a.t.m.masum.billah@g.bracu.ac.bd</a></p>
          <p>Contact No.: +880 1719118554</p>
        </div>

        <div className="contact-person">
          <h3>Md Mahfujul Haque</h3>
          <p>Vice Lead, BRACU Duburi</p>
          <p>Email: <a href="mailto:md.mahfujul.haque@g.bracu.ac.bd">md.mahfujul.haque@g.bracu.ac.bd</a></p>
          <p>Contact No.: +880 1871729639</p>
        </div>

        <div className="address">
          <h2>Address</h2>
          <p>BRAC University</p>
          <p>66, Mohakhali, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

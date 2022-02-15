import React from 'react';
import SimpleFooter from '../components/SimpleFooter';
import SimpleHeader from '../components/SimpleHeader';
import './Security.css';

const Security = () => {
  return (
    <div>
      <SimpleHeader />
      <div className='securityBody'>
        <div className='securityContainer'>
          <p>Millions of users trust us to keep their data safe, secure, and private. We take that responsibility seriously.</p>
          <h2>Data Security</h2>
          <p>All the databases and servers are hosted by Amazon Web Services (AWS) in the United States. We make extensive use of their built-­in firewalls to protect your data against unauthorized remote access and to support continuous monitoring for potential vulnerabilities. User data, including task details, account information and payment details, are all stored and encrypted at rest. For more information on AWS security practices, please visit <a href='https://aws.amazon.com/security' >https://aws.amazon.com/security/</a>.</p>
          <p>TickTick reserves the right to hold onto the data and not turn it over to any third parties. We will never share your data with third parties without your prior permission. Although we own the databases and all rights to the application, you retain all rights to your data.</p>
          <h2>Data Reability</h2>
          <p>All user data is automatically backed up on AWS servers with the capability of providing point-­in-­time recovery. You can also create a backup manually on the Web at any time.</p>
          <h2>Breach Notification</h2>
          <p>When a data breach that’s very likely to result in a risk for the rights of our users happened, we would notify you via official notifications or emails within 72 hours of first having become aware of the breach. We will do maximum possible efforts to maintain individuals’ privacy and to keep your data secure.</p>
          <h2>Privacy Policy</h2>
          <p>Keeping our users’ data safe and secure is our priority. Additionally, we provide transparency in what information we collect and how we use the information. Please see the full <a href='/privacy'>Privacy Policy</a> for more details.</p>
        </div>
      </div>
      <SimpleFooter />
    </div>
  )
}

export default Security

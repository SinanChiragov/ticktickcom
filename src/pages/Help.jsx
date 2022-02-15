import React from 'react';
import Header from '../components/help/Header';
import Footer from '../components/help/Footer';
import Body from '../components/help/Body';
import './Help.css';

function Help() {
  return (
    <div className='helpBody'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Help

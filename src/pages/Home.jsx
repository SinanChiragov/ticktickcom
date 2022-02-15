import React from 'react'
import Header from '../components/home/Header';
import Footer from '../components/future/Footer';
import Intro from '../components/home/Intro';
import Feature from '../components/home/Feature';
import Reaminder from '../components/home/Remainder';
import Installation from '../components/home/Install';

function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Feature />
      <Reaminder />
      <Installation />
      <Footer />
    </div>
  )
}

export default Home;

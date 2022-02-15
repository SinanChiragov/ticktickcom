import React from 'react';
import Header from "../components/download/Header";
import DownBoxes from '../components/download/DownBoxes';
import DownIntro from '../components/download/DownIntro';
import Footer from '../components/download/Footer';


const Download = () => {
  return (
    <div >
      <Header />
      <DownIntro />
      <DownBoxes />
      <Footer />
    </div>
  );
}
export default Download;
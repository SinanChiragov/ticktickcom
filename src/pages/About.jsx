import React from 'react';
import Header from "../components/future/Header";
import Intro from '../components/future/Intro';
import Voice from '../components/future/Voice';
import Nlp from '../components/future/Nlp';
import Tasks from '../components/future/Tasks';
import Pomo from '../components/future/Pomo';
import Calendar from '../components/future/Calendar';
import Installation from '../components/future/Installation';
import Share from '../components/future/Share';
import Assessment from '../components/future/Assessment';
import Footer from '../components/future/Footer';

function About() {
  return (
    <div>
      <Header />
      <Intro />
      <Voice />
      <Nlp />
      <Tasks />
      <Calendar />
      <Pomo />
      <Share />
      <Assessment />
      <Installation />
      <Footer />
    </div>
  )
}
export default About;
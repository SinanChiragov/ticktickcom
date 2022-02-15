import React from 'react';
import CardIntro from '../components/cards/CardIntro';
import CardHeader from '../components/cards/Header';
import CardFooter from '../components/cards/Footer';
import CardBody from '../components/cards/CardBody';

const Cards = () => {
  return (
    <div>
      <CardHeader />
      <CardIntro />
      <CardBody />
      <CardFooter />
    </div>
  )
}

export default Cards

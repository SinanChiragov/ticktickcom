import React from 'react'
import ProHeader from '../components/premium/ProHeader';
import ProIntro from '../components/premium/ProIntro';
import CalendarPro from '../components/premium/CalendarPro';
import Filters from '../components/premium/FiltersPro'
import ProFooter from '../components/premium/ProFooter';

import './Premium.css';

function Premium() {
  return (
    <div className="premiumBody">
      <ProHeader />
      <ProIntro />
      <CalendarPro />
      <Filters />
      <ProFooter />
    </div>
  )
}
export default Premium;

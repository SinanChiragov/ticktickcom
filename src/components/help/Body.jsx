import React from 'react'
import star from '../../images/help/articles.png';
import './Body.css';

function Body() {
  return (
    <div className='helpTitleBody'>
      <div className="helpBodyTitle" >
        <img src={star} alt='' />
        <h1 className='helpTitle'>Promoted articles</h1>
      </div>
      <div className='helpBodyList'>
        <ul>
          <li><a href="*">3 Steps to Get Started with TickTick</a></li>
          <li><a href="*">Getting Things Done - GTD</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Body;

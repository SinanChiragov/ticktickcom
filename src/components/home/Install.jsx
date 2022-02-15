import React from 'react';
import downImg from '../../images/home/install.png';
import './Install.css';

const Install = () => {
  return (
    <div className='installBody'>
      <div className='installcontainer'>
        <h1>Access TickTick from anywhere</h1>
        <p>Convenient synchronization on more than 10 platforms. Keep track of your tasks anytime, anywhere.</p>
        <img src={downImg} alt="" />
        <button className='activeButton'>Install TickTick</button>
        <button className='noneActive'>Learn More</button>
      </div>
    </div>
  )
}
export default Install;
import React from 'react';
import cardIntroImg from '../../images/cards/CardIntro.png';
import './CardIntro.css';


const CardIntro = () => {
    return (
        <div className='cardIntroContainer'>
            <div className='cardIntroContainer_scnd'>
                <div className='cardIntroText'>
                    <h1 className='cardIntroTitle'>TickTick Gift Card</h1>
                    <h4>Time is the Most Precious Gift</h4>
                    <h4>Save Time, Give love</h4>
                    <button>Buy Now</button>
                    <a href='*'>Learn more</a>
                </div>
                <img src={cardIntroImg} alt='' />
            </div>
        </div>
    )
}

export default CardIntro

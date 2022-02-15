import React from 'react';
import remainder from '../../images/home/remainder.png';
import './Remainder.css';


const Reaminder = () => {
    return (
        <div>
            <div className="remainderContainer">
                <div className="remainderContainer_sCnD">
                    <div className='remainderText'>
                        <h1>Never miss daedlines</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, exercitationem?</p>
                    </div>
                    <div className='remainderImage'>
                        <img src={remainder} alt='remainder' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Reaminder;
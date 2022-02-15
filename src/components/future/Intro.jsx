import React from "react";
import introImg from '../../images/future//introImg.png';
import './Intro.css';



const Intro = () => {
    return (
        <div className="introContainer_21mrh container">
            <div className="introText_1yC4O">
                <h2 className="introTitle_37DTa">Organise all the part <br /> of your life</h2>
                <p className="subtitle introDesc_3RHGd">
                    Get tasks out of your head and complete them in less time.
                </p>
            </div>
            <div className="">
                <img
                    className=""
                    src={introImg}
                    alt="Intro"
                />
            </div>
        </div>
    );
}
export default Intro;
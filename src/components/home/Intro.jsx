import React from "react";
import intro from '../../images/home/intro.png';
import './Intro.css';



const Intro = () => {
    return (
        <div className="introContainer_21mrh container">
            <div className="introText_1yC4O">
                <h2 className="introTitle_37DTa">Оставайтесь организованными <br /> Оставайтесь креативными</h2>
                <p className="subtitle introDesc_3RHGd">
                    Присоединяйтесь к миллионам людей, чтобы начать реализовывать идеи, стать организованее и делать что-то творческое каждый день.
                </p>
                <button className="active">Sign for Free</button>
                <button>Sign Up</button>
            </div>
            <div className="">
                <img
                    className=""
                    src={intro}
                    alt="Intro"
                />
            </div>
        </div>
    );
}
export default Intro;
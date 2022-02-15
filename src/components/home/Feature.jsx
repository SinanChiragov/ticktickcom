import React from "react";
import featture from '../../images/home//featureSection.png';

import './Feature.css';

const Feature = () => {
    return (
        <div>
            <div className="featureContainer">
                <div className="featureContainer_sCnD">
                    <div className="featureImage">
                        <img alt="feature" src={featture} />
                    </div>
                    <div className="featureText">
                        <h1 className="featureTitle">Organise your day</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem vel, perspiciatis qui quidem modi quod animi. Deleniti, quos impedit!</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Feature;
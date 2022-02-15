import React from "react";
import Filter from '../../images/premium/smart-list.png';
import './FiltersPro.css';

const FiltersPro = () => {
    return (
        <div className="fillProContainer">
            <div className="fillProContainer_sCnD">
                <div className="fillProImage">
                    <img alt="fillProImg" src={Filter} />
                </div>
                <div className="fillProText">
                    <h1 className="fillProTitle">Costomize filters</h1>
                    <p className="fillProSubtitle">Unlock the "Filter" feature, and be as flexible as you need with all the Lists.</p>
                </div>
            </div>
        </div>
    );
}
export default FiltersPro;
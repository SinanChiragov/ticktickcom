import React from "react";
import './Menu.css';


const Menu = () => {
    return (
        <div>
            <div className="navRow_236y3 container">
                <ul className="navbar_2uuBv">
                    <li className="navItem_2K7pc"><a href="/features" className="">Functions</a></li>
                    <li className="navItem_2K7pc"><a href="/download" className="active_1e1wk">Applications</a></li>
                    <li className="navItem_2K7pc"><a href="/upgrade" className="">Premium</a></li>
                    <li className="navItem_2K7pc"><a href="/helpcenter">Help Center</a></li>
                    <li className="navItem_2K7pc"><a href="/signin">To come in</a></li>
                    <li><a href="/signup" className="signupBtn_2APvt">Sign Up for Free</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Menu;
import React from "react";
import score from '../../images/future/score.png';
import './Assessment.css';

const Assessment = () => {
    return (
        <div className="features_3XM1">
            <div className="assessContainer">
                <div className="assessContainer_sCnD">
                    <div className="assessImage">
                        <img alt="assess" src={score} />
                    </div>
                    <div className="assessText">
                        <h1 className="assessTitle">Find out what to do next</h1>
                        <ul>
                            <li className="activeClass">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M4.5 19h21c.3 0 .5.2.5.5v.1l-.6 2.8c-.2.9-1 1.6-2 1.6h-17c-1 0-1.8-.7-2-1.6L4 19.6c-.1-.3.1-.5.5-.6-.1 0 0 0 0 0zm.5-3V8c0-1.1.9-2 2-2h6l2 2h8c1.1 0 2 .9 2 2v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1z"></path>
                                </svg>
                                <div>
                                    <strong>Folders, lists, assess, and important items</strong>
                                    <span>Keep your assess organised at four different levela.</span>
                                </div>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M20 18.9c-.9-.6-1.5-1.7-1.5-2.9 0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 1.2-.6 2.2-1.5 2.9V20c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-1.1zM6.5 9C5.7 9 5 8.3 5 7.5S5.7 6 6.5 6h17c.8 0 1.5.7 1.5 1.5S24.3 9 23.5 9h-17zm0 7c-.8 0-1.5-.7-1.5-1.5S5.7 13 6.5 13h7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-7zm0 7c-.8 0-1.5-.7-1.5-1.5S5.7 20 6.5 20h9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-9zm15-1h1c.6 0 1 .4 1 1s-.4 1-1 1h-1c-.6 0-1-.4-1-1s.4-1 1-1z"></path>
                                </svg>
                                <div>
                                    <strong>Tags</strong>
                                    <span>Create and add tags to your assess to manage them flexibly.</span>
                                    <a href="home">* Filter is a premium feature</a>
                                </div>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M7 5.7l6-1.6c.4-.2 1-.1 1.4.2L25 10.4c1 .6 1.3 1.8.7 2.7l-1.6 2.8c-.1-.1-.1-.2-.2-.3L15 6.7c-.7-.7-1.7-1.1-2.7-1.1H7zm-3 10v-7c0-.7.7-1.4 1.5-1.4h7c.5 0 1 .2 1.4.6l8.7 8.7c.8.8.8 2 0 2.8l-6.5 6.5c-.8.8-2 .8-2.8 0l-8.7-8.7c-.4-.4-.6-.9-.6-1.5zm7.6-.8c.9-.9.9-2.2 0-3.1-.9-.9-2.2-.9-3.1 0-.9.9-.9 2.2 0 3.1s2.2.8 3.1 0z"></path>
                                </svg>
                                <div>
                                    <strong>Multi-priority</strong>
                                    <span>
                                        Mark and sort assess into four priority levels: high priority, medium priority, low priority, and no priority.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Assessment;
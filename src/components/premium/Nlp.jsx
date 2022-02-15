import React from 'react';
import nlp from '../../images/future/nlp.png';
import './Nlp.css';


const Nlp = () => {
    return (
        <div>
            <div className="nlpContainer">
                <div className="nlpContainer_sCnD">
                    <div className='nlpText'>
                        <h1>Never miss daedlines</h1>
                        <ul className='nlpVisibleList'>
                            <li className="show_1hE4Y">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M12 17c-1.2-.9-2-2.4-2-4 0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.6-.8 3.1-2 4v2c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-2zm1 4h4c0 1.1-.9 2-2 2s-2-.9-2-2zM6 10H4V7c0-1.7 1.3-3 3-3h3v2H7c-.6 0-1 .4-1 1v3zm18 0V7c0-.6-.4-1-1-1h-3V4h3c1.7 0 3 1.3 3 3v3h-2zM6 20v3c0 .6.4 1 1 1h3v2H7c-1.7 0-3-1.3-3-3v-3h2zm18 0h2v3c0 1.7-1.3 3-3 3h-3v-2h3c.6 0 1-.4 1-1v-3z"></path>
                                </svg>
                                <div className="featureItemText_2pQa8">
                                    <span className="featureItemTitle_3HMwx">
                                        <font>
                                            <font>Smart data analysis for every day</font>
                                        </font>
                                    </span>
                                    <span className="featureItemDesc_1tMOE">
                                        <font>
                                            <font>Include due date and time information when creating a new task. </font>
                                            <font>TickTick will automatically remind you of this.</font>
                                        </font>
                                    </span>
                                </div>
                            </li>
                            <li className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M8 7V6c0-.6.4-1 1-1s1 .4 1 1v1h10V6c0-.6.4-1 1-1s1 .4 1 1v1c.7.1 1.1.2 1.5.4.5.3.8.6 1.1 1.1.3.5.4 1 .4 2.3v10.3c0 1.3-.1 1.8-.4 2.3-.3.5-.6.9-1.1 1.1-.5.3-1 .4-2.3.4H8.8c-1.3 0-1.8-.1-2.3-.4-.5-.2-.8-.5-1.1-1-.3-.5-.4-1-.4-2.3V10.8c0-1.3.1-1.8.4-2.3.3-.5.6-.8 1.1-1.1.4-.2.8-.3 1.5-.4zm2 7.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm5 0c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm-5 5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm5 0c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm5-5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"></path>
                                </svg>
                                <div className="featureItemText_2pQa8">
                                    <span className="featureItemTitle_3HMwx">
                                        <font>
                                            <font>Task duration</font>
                                        </font>
                                    </span>
                                    <span className="featureItemDesc_1tMOE">
                                        <font>
                                            <font>Set a duration for tasks that will take longer than the desired time</font>
                                        </font>
                                    </span>
                                    <span className="featureItemInfo_2Qui2 featureItemDesc_1tMOE">
                                        <font>
                                            <font>* The "Duration of Tasks" feature is only available for Premium accounts</font>
                                        </font>
                                    </span>
                                </div></li>
                        </ul>
                    </div>
                    <div className='nlpImage'>
                        <img src={nlp} alt='nlp' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nlp;
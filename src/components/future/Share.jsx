import React from 'react';
import shareImg from '../../images/future/share1.png';
import './Share.css';


const Share = () => {
    return (
        <div>
            <div className="shareContainer">
                <div className="shareContainer_sCnD">
                    <div className='shareText'>
                        <h1>Everythig in one place</h1>
                        <ul className='shareVisibleList'>
                            <li className="show_1hE4Y">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M8 7V6c0-.6.4-1 1-1s1 .4 1 1v1h10V6c0-.6.4-1 1-1s1 .4 1 1v1c.7.1 1.1.2 1.5.4.5.3.8.6 1.1 1.1.3.5.4 1 .4 2.3v10.3c0 1.3-.1 1.8-.4 2.3-.3.5-.6.9-1.1 1.1-.5.3-1 .4-2.3.4H8.8c-1.3 0-1.8-.1-2.3-.4-.5-.2-.8-.5-1.1-1-.3-.5-.4-1-.4-2.3V10.8c0-1.3.1-1.8.4-2.3s.6-.8 1.1-1.1c.4-.2.8-.3 1.5-.4zm1 4c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H9zm0 4c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H9zm5-4c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2zm5 0c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2zm-5 4c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2zm5 0c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2zM9 19c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H9zm5 0c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-2z"></path>
                                </svg>
                                <div className="shareItemText_2pQa8">
                                    <span className="shareItemTitle_3HMwx">
                                        <font>
                                            <font>Various kinds of share</font>
                                        </font>
                                    </span>
                                    <span className="shareItemDesc_1tMOE">
                                        <font>
                                            <font>From daily to monthly viewing, feel more control over yourfile and tasls </font>
                                        </font>
                                    </span>
                                </div>
                            </li>
                            <li className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M8 7V6c0-.6.4-1 1-1s1 .4 1 1v1h10V6c0-.6.4-1 1-1s1 .4 1 1v1c.7.1 1.1.2 1.5.4.5.3.8.6 1.1 1.1.3.5.4 1 .4 2.3v10.3c0 1.3-.1 1.8-.4 2.3-.3.5-.6.9-1.1 1.1-.5.3-1 .4-2.3.4H8.8c-1.3 0-1.8-.1-2.3-.4-.5-.2-.8-.5-1.1-1-.3-.5-.4-1-.4-2.3V10.8c0-1.3.1-1.8.4-2.3s.6-.8 1.1-1.1c.4-.2.8-.3 1.5-.4zm3 15c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-2c0-3.3-2.7-6-6-6v2c2.2 0 4 1.8 4 4h2zm4 0c0-5.5-4.5-10-10-10v2c4.4 0 8 3.6 8 8h2z"></path>
                                </svg>
                                <div className="shareItemText_2pQa8">
                                    <span className="shareItemTitle_3HMwx">
                                        <font>
                                            <font>share Subscriptions</font>
                                        </font>
                                    </span>
                                    <span className="shareItemDesc_1tMOE">
                                        <font>
                                            <font>Subscribe to other TickTick share apps to manage your events and tasks in one place</font>
                                        </font>
                                    </span>
                                    <span className="shareItemInfo_2Qui2 shareItemDesc_1tMOE">
                                        <font>
                                            <font>* The ability to use the share is only available for Premium accounts</font>
                                        </font>
                                    </span>
                                </div></li>
                        </ul>
                    </div>
                    <div className='shareImage'>
                        <img src={shareImg} alt='share' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Share;
import React from "react";
import voice from '../../images/future//voice.png';

import './Voice.css';

const Voice = () => {
    return (
        <div>
            <div className="voiceContainer">
                <div className="voiceContainer_sCnD">
                    <div className="voiceImage">
                        <img alt="Voice" src={voice} />
                    </div>
                    <div className="voiceText">
                        <h1 className="voiceTitle">Adding tasks just got faster and easier</h1>
                        <ul>
                            <li className="activeClass">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M13 23.3c-4.8-.9-8.5-5.2-8.5-10.3h3c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5h3c0 5.1-3.7 9.4-8.5 10.3V26c0 1.1-.9 2-2 2s-2-.9-2-2v-2.7zM15 2c2.8 0 5 2.2 5 5v6c0 2.8-2.2 5-5 5s-5-2.2-5-5V7c0-2.8 2.2-5 5-5z"></path>
                                </svg>
                                <div>
                                    <strong>Voice input</strong>
                                    <span>Press and hold the "+" button, release it when you're done speaking.</span>
                                </div>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M7.6 6h14.9c.9 0 1.2.1 1.5.3.3.2.6.4.8.8.1.2.2.6.2 1.5v12.9c0 .9-.1 1.2-.3 1.5-.2.3-.4.6-.8.8-.3.2-.6.3-1.5.3H7.6c-.9 0-1.2-.1-1.5-.3-.3-.2-.6-.4-.8-.8-.2-.3-.3-.7-.3-1.6V8.6c0-.9.1-1.3.3-1.6.1-.3.4-.6.7-.7.3-.2.7-.3 1.6-.3zm7.4 8.4L7.7 8 6.3 9.5l8 7c.4.3.9.3 1.3 0l8-7L22.3 8 15 14.4z"></path>
                                </svg>
                                <div>
                                    <strong>Turn emails into tasks</strong>
                                    <span>Is your mailbox always full of things to do? Turn them into tasks in a few clicks.</span>
                                    <a href="home">To learn more</a>
                                </div>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M7.6 5h3.9c.9 0 1.2.1 1.5.3.3.2.6.4.8.8s.2.6.2 1.5v3.9c0 .9-.1 1.2-.3 1.5s-.4.6-.8.8-.6.2-1.5.2H7.6c-.9 0-1.2-.1-1.5-.3s-.7-.4-.8-.7c-.2-.3-.3-.7-.3-1.6V7.6c0-.9.1-1.3.3-1.6.1-.3.4-.6.7-.7.3-.2.7-.3 1.6-.3zm14.7-.1L25 7.6c.7.7.8 1 1 1.4.1.4.1.7 0 1.1-.1.4-.3.6-.9 1.3l-2.7 2.7c-.6.6-.9.8-1.3.9-.4.1-.7.1-1.1 0-.4-.1-.6-.3-1.3-.9L16 11.4c-.6-.6-.8-.9-.9-1.3-.1-.4-.1-.7 0-1.1.1-.4.3-.6.9-1.3L18.7 5c.6-.7.9-.8 1.3-1 .4-.1.7-.1 1.1 0 .3.2.6.3 1.2.9zM7.6 16h3.9c.9 0 1.2.1 1.5.3.3.2.6.4.8.8.2.3.3.6.3 1.5v3.9c0 .9-.1 1.2-.3 1.5-.2.3-.4.6-.8.8-.3.2-.6.3-1.5.3H7.6c-.9 0-1.2-.1-1.5-.3-.3-.2-.6-.4-.8-.8-.2-.3-.3-.7-.3-1.6v-3.9c0-.9.1-1.2.3-1.5.2-.3.4-.6.8-.8.2-.1.6-.2 1.5-.2zm11 0h3.9c.9 0 1.2.1 1.5.3.3.2.6.4.8.8.2.3.3.6.3 1.5v3.9c0 .9-.1 1.2-.3 1.5-.2.3-.4.6-.8.8-.3.2-.6.3-1.5.3h-3.9c-.9 0-1.2-.1-1.5-.3-.3-.2-.6-.4-.8-.8-.2-.3-.3-.6-.3-1.5v-3.9c0-.9.1-1.2.3-1.5.2-.3.4-.6.8-.8.2-.2.6-.3 1.5-.3z"></path>
                                </svg>
                                <div>
                                    <strong>Siri, Widgets and Quick Ball</strong>
                                    <span>
                                        For iPhone: turn on "add tasks via Siri",
                                        for Android devices: "quickball" or add widgets for any phone. They can be very helpful!
                                    </span>
                                    <label> Ability to use Quick Ball is only available for Premium accounts</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Voice;
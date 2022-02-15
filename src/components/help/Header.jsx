import React from 'react';
import getStarted from '../../images/help/get-start.png';
import tips from '../../images/help/tips.png';
import faq from '../../images/help/faq.png';
import guide from '../../images/help/guide.png';

import './Header.css';

function Header() {
    return (
        <div className='headerContainer'>
            <nav>
                <div className='logo'>
                    <a href="/home" className="brand_2aHQJ">
                        <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" className="logo_1OKcB">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M30.755 33.292l-7.34 8.935L40.798 56.48a5.782 5.782 0 008.182-.854l31.179-38.93-9.026-7.228L43.614 43.83l-12.86-10.538z" fill="#FFB000">
                                </path>
                                <path className="product-tick-white_svg__st0" d="M44 78.1C25.197 78.1 9.9 62.803 9.9 44S25.197 9.9 44 9.9V0C19.738 0 0 19.738 0 44s19.738 44 44 44 44-19.738 44-44h-9.9c0 18.803-15.297 34.1-34.1 34.1" fill="#4772FA">
                                </path>
                            </g>
                        </svg>
                        <svg viewBox="0 0 309 62" xmlns="http://www.w3.org/2000/svg" className="logoText_3rRis">
                            <path className="product-tick-white_svg__st0" d="M301.198 16.039l4.697 4.697-16.87 16.867 19.72 19.716-4.698 4.698-22.07-22.066a3.321 3.321 0 010-4.697l19.221-19.215zm-154.632 0l4.698 4.697-16.871 16.867 19.72 19.716-4.698 4.698-22.068-22.066a3.319 3.319 0 010-4.697l19.22-19.215zm96.747-2.575v6.644c-9.904 0-17.531 7.88-17.531 17.565 0 9.686 7.894 17.506 17.576 17.506 9.685 0 17.58-7.72 17.58-17.624h6.645c0 12.918-10.862 24.268-24.21 24.268-13.347 0-24.235-10.83-24.235-24.18 0-13.348 10.826-24.179 24.175-24.179zm-154.6 0v6.644c-9.905 0-17.546 7.88-17.546 17.565 0 9.686 7.885 17.506 17.567 17.506 9.685 0 17.574-7.72 17.574-17.624h6.644c0 12.918-10.862 24.268-24.21 24.268-13.347 0-24.219-10.83-24.219-24.18 0-13.348 10.84-24.179 24.19-24.179zM213.598.95v6.029H187.76V61.67h-6.46V6.979h-26.269V.949H213.6zm65.457 0v60.72h-6.89V.95h6.89zM213.6 29.372v32.299h-6.89V29.372h6.89zM59 .95v6.029h-25.84V61.67h-6.89V6.979H0V.949h58.998zm65.457 12.058V61.67h-6.89V13.008h6.89zM58.998 29.372v32.299h-6.46V29.372h6.46zm151.428-16.16a4.71 4.71 0 014.71 4.708 4.71 4.71 0 01-9.417 0c0-2.6 2.107-4.708 4.707-4.708zm-154.62 0a4.708 4.708 0 010 9.414 4.706 4.706 0 110-9.414z" fill="#4772FA" fill-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>

                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/upgrade'>Upgrade to Premium</a></li>
                    <li><a href='/'>Give Feedback</a></li>
                </ul>

            </nav>
            <div className='helpintro'>
                <div className='hero-inner'>
                    <h1 className='search-title'>How we can help you</h1>
                    <form role="search" class="search search-full" data-search="" data-instant="true" autocomplete="off" action="/hc/en-us/search" accept-charset="UTF-8" method="get">
                        <input name="utf8" type="hidden" value="✓" />
                        <input type="search" name="query" id="query" placeholder="Search" autocomplete="off" aria-label="Search" />
                    </form>
                </div>
                <ul className='helpBoxes'>
                    <li className='helpBox'>
                        <a href='/hc/en-us/sections/360001676291-Get-Started'>
                            <img alt='' src={getStarted} />
                            <h4>Get Started</h4>
                        </a>
                    </li>
                    <li className='helpBox'>
                        <a href='/hc/en-us/sections/360001672452-Advanced-Tips'>
                            <img alt='' src={tips} />
                            <h4>Advanced Tips</h4>
                        </a>
                    </li>
                    <li className='helpBox'>
                        <a href='/hc/en-us/sections/360001675731-FAQ'>
                            <img alt='' src={faq} />
                            <h4>FAQ</h4>
                        </a>
                    </li>
                    <li className='helpBox'>
                        <a href='/hc/en-us/categories/360000948871-User-Guide'>
                            <img alt='' src={guide} />
                            <h4>User Guide</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
import React from 'react';
import twitter from '../../images/future/download.png';
import reddit from '../../images/future/download1.png';
import facebook from '../../images/future/download2.png';
import instagram from '../../images/future/download3.png';
import './Footer.css';

function Footer() {
    return (
        <div className='helpFooter'>
            <div className='socialMedia'>
                <a href='https:/twitter.com/ticktick'>
                    <img src={twitter} alt="" />
                </a>
                <a href='https:/reddit.com/ticktick'>
                    <img src={reddit} alt="" />
                </a>
                <a href='https:/facebook.com/ticktick'>
                    <img src={facebook} alt="" />
                </a>
                <a href='https:/instagram.com/ticktick'>
                    <img src={instagram} alt="" />
                </a>
            </div>
            <div className='footerBottom'>
                <ul className='.helpMethod'>
                    <li>
                        <ul className='blog'>
                            <li>
                                <a href='*'>Help</a>
                            </li>
                            <li>
                                <a href='*'>Blog</a>
                            </li>
                            <li>
                                <a href='*'>Media</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="helpMethod">
                            <li>
                                <a href='/upgrade'>Upgrade to Premium</a>
                            </li>
                            <li>
                                <a href='/privacy'>Privacy</a>
                            </li>
                            <li>
                                <a href='/security'>Security</a>
                            </li>
                            <li>
                                <a href='*'>Terms</a>
                            </li>
                            <li>
                                <a href='*'>Thanks</a>
                            </li>
                            <li>
                                <a href='/license/web'>License</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p>© 2022 TickTick Team</p>
            </div>
        </div>
    )
}

export default Footer

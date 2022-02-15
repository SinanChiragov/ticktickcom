import React from 'react';
import windowsImg from '../../images/downloads/windows.png';
import androidImg from '../../images/downloads/android.png';
import iosImg from '../../images/downloads/iOS.png';
import watchImg from '../../images/downloads/watchOS.png';
import macImg from '../../images/downloads/macOS.png';
import linuxImg from '../../images/downloads/linux.png';
import webImg from '../../images/downloads/webapp.png';
import chromeImg from '../../images/downloads/chrome.png';
import foxImg from '../../images/downloads/firefox.png';
import outlookImg from '../../images/downloads/outlook.png';
import gmailImg from '../../images/downloads/Gmail.png';
import './DownBoxes.css';



function DownBoxes() {
    return (
        <div className='downBody'>
            <div className='downContainer'>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={windowsImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
                <div className='downBox'>
                    <h1>Android devices</h1>
                    <p>Manage tasks on Android mobile and tablet devices.</p>
                    <img src={androidImg} alt='windows' />
                    <button>Install app</button>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={iosImg} alt='windows' />
                    <button>Install app</button>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={watchImg} alt='windows' />
                    <button>Install app</button>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={macImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={linuxImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={webImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={chromeImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={foxImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={outlookImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
                <div className='downBox'>
                    <h1>Windows</h1>
                    <p>Use TickTick on your Windows device</p>
                    <img src={gmailImg} alt='windows' />
                    <button>Install app</button>
                    <a href='*'>To learn more</a>
                </div>
            </div>
        </div>
        
    );
}

export default DownBoxes

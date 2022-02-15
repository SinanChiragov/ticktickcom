import React from 'react';
import './SimpleFooter.css';

const SimpleFooter = () => {
    return (
        <div className='simpleFooterBody'>
            <div className='simpleFooterContainer'>
                <ul className='simpleFooterLists'>
                    <li className='simpleListItem simpleListItem_1'>
                        <ul className='simpleList_1 simpleList'>
                            <li><a href='/helpcenter'>Help</a></li>
                            <li><a href='*'>Blog</a></li>
                            <li><a href='/upgrade'>Premium</a></li>
                            <li><a href='*'>About Us</a></li>
                            <li><a href='*'>Translate</a></li>
                        </ul>
                    </li>
                    <li className='simpleListItem simpleListItem_2'>
                        <ul className='simpleList_2 simpleList'>
                            <li><a href='/premium'>Premium</a></li>
                            <li><a href='*'>Privacy Policy</a></li>
                            <li><a href='/security'>Security</a></li>
                            <li><a href='*'>Terms of Service</a></li>
                            <li><a href='/license/web'>Lisence</a></li>
                        </ul>
                    </li>
                </ul>
                <p>
                    © 2022 TickTick Team
                </p>
            </div>
        </div>
    )
}

export default SimpleFooter

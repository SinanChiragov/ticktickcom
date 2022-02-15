import React from 'react';
import './Signin.css';

function Signin() {
    return (
        <div className='signBody'>
            <div class="logo__1DB5Q">
                <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" className="logo_1OKcB">
                    <g fill="none" fill-rule="evenodd">
                        <rect>
                        </rect>
                        <path d="M30.755 33.292l-7.34 8.935L40.798 56.48a5.782 5.782 0 008.182-.854l31.179-38.93-9.026-7.228L43.614 43.83l-12.86-10.538z" fill="#FFB000">
                        </path>
                        <path d="M44 78.1C25.197 78.1 9.9 62.803 9.9 44S25.197 9.9 44 9.9V0C19.738 0 0 19.738 0 44s19.738 44 44 44 44-19.738 44-44h-9.9c0 18.803-15.297 34.1-34.1 34.1" fill="#4772FA">
                        </path>
                    </g>
                </svg>
            </div>
            <div className='signContainer'>
                <form method='POST'>
                    <div className='input'>
                        <input typeof='email' placeholder='E-mail' />
                    </div>
                    <div className='input'>
                        <input required typeof='password' placeholder='Password' />
                    </div>
                    <button>To come in</button>
                    <p className='termsofuse'><a href='*'>Forgot your password</a></p>
                </form>
                <div class="middleLine__GdWZ6">
                    <font>
                        <font>Sign up with</font>
                    </font>
                </div>
                <ul>
                    <li><a href='*'>Google</a></li>
                    <li><a href='*'>Apple</a></li>
                    <li><a href='*'>Facebook</a></li>
                    <li><a href='*'>Twitter</a></li>
                </ul>
                <p><a href='signup'>Sign Up for Free</a></p>
            </div>
        </div>
    )
}

export default Signin;

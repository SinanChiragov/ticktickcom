import React from "react";
import './Footer.css';
import tviter from '../../images/future/download.png';
import reddit from '../../images/future/download1.png';
import facebook from '../../images/future/download2.png';
import istagram from '../../images/future/download3.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="nav">
                    <ul>
                        <li>
                            <strong>Products</strong>
                            <ul>
                                <li><a href="*">To begin</a></li>
                                <li><a href="*">Install app</a></li>
                                <li><a href="*">Premium</a></li>
                                <li><a href="*">Education offer</a></li>
                                <li><a href="*">Gift Cards</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Help</strong>
                            <ul>
                                <li><a href="/helpcenter">Help center</a></li>
                                <li><a href="*">FAQ</a></li>
                                <li><a href="*">Translation</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Opportunities</strong>
                            <ul>
                                <li><a href="*">URL schemes</a></li>
                                <li><a href="*">Share with friends and earn</a></li>
                                <li><a href="*">Interactions</a></li>
                                <li><a href="*">Ambassador Program</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>About Us</strong>
                            <ul>
                                <li><a href="*">Abour us</a></li>
                                <li><a href="*">Blog</a></li>
                                <li><a href="*">media</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>legality</strong>
                            <ul>
                                <li><a href="*">Terms of Use</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/license/web">Lisence</a></li>
                                <li><a href="/security">Safety</a></li>
                            </ul>
                        </li>
                        <li>
                            
                            <form method="POST">
                                <select name="languages" id="languages">
                                    <option value="English">English</option>
                                    <option value="简体中文">简体中文</option>
                                    <option value="日本語">日本語</option>
                                    <option value="Français">Français</option>
                                    <option value="한국어">한국어</option>
                                    <option value="Pусский">Pусский</option>
                                    <option value="繁体中文">繁体中文</option>
                                    <option Português="audi">Português (Brasil)</option>
                                </select>
                            </form>
                            <img src={ istagram } alt="instagram" />
                            <img src={ facebook } alt="facebook" />
                            <img src={ reddit } alt="reddit" />
                            <img src={ tviter } alt="tviter" />
                        </li>
                    </ul>
                </div>
                <div className="footerMain">
                    <span>© </span>
                    <span>2022 TickTick Team</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;
import React from 'react';
import css from './Footer.module.css';
import { FiMail, FiPhone, FiFacebook, FiInstagram, FiTwitter, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                {/* Логотип и описание */}
                <div className={css.column}>
                    <div className={css.logo}>
                        <FiMapPin className={css.logoIcon} />
                        <a href="/">Hawaii parts</a>
                    </div>
                    <p className={css.description}>
                        Finding your dream car on the islands since 2020.
                    </p>
                </div>

              
                <div className={css.column}>
                    <h3 className={css.heading}>Quick Links</h3>
                    <ul className={css.navList}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        {/* <li><a href="#contact">Contact</a></li> */}
                    </ul>
                </div>

              
                <div className={css.column}>
                    <h3 className={css.heading}>Contact Us</h3>
                    <address className={css.address}>
                        <ul className={css.addressList}>
                            <li>
                                <FiMail className={css.icon} />
                                <a href="mailto:alexhawaiiparts@gmail.com">alexhawaiiparts@gmail.com</a>
                            </li>
                            <li>
                                <FiPhone className={css.icon} />
                                <a href="tel:+380961111111">+38 096 111 11 11</a>
                            </li>
                        </ul>
                    </address>
                    <div className={css.socials}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FiFacebook className={css.socialIcon} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FiInstagram className={css.socialIcon} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FiTwitter className={css.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Копирайт */}
            <div className={css.copy}>
                <p>© 2025 Hawaii Parts. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
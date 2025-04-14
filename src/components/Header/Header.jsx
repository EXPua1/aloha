import React, { useState } from 'react';
import css from './Header.module.css';
import { FiMail, FiPhone, FiMenu, FiX, FiMapPin } from 'react-icons/fi'; // Добавим иконку для локации
import { IoCarOutline } from 'react-icons/io5'; // Иконка машины для CTA

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={css.header}>
            <div className={css.container}>
               
                <div className={css.logo}>
                    <FiMapPin className={css.logoIcon} />
                    <a href="/">Hawaii parts</a>
                </div>

               
                <nav className={`${css.nav} ${isMenuOpen ? css.navOpen : ''}`}>
                    <ul className={css.navList}>
                        <li><a href="/">Home</a></li>
                        <li><a href="#benefits">Benefits</a></li>
                        {/* <li><a href="#contact">Contact</a></li> */}
                    </ul>

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
                </nav>

               
                <a href="#hero" className={css.ctaButton}>
                    <IoCarOutline className={css.ctaIcon} /> Add Car
                </a>

              
                <button className={css.menuToggle} onClick={toggleMenu}>
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
        </header>
    );
};

export default Header;
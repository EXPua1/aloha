import React, { useState, useEffect } from 'react';
import css from './Header.module.css';
import { FiMail, FiPhone, FiMenu, FiX, FiMapPin } from 'react-icons/fi';
import { IoCarOutline } from 'react-icons/io5';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleAddCarClick = (e) => {
        e.preventDefault();
        const formSection = document.getElementById('hero');
        const messageInput = document.getElementById('message');

        if (formSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const formPosition = formSection.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: formPosition - headerHeight,
                behavior: 'smooth',
            });

            if (messageInput) {
                setTimeout(() => {
                    messageInput.focus();
                }, 500);
            }
        }

        closeMenu(); 
    };

    useEffect(() => {
        const formSection = document.getElementById('add-car');
        if (!formSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFormVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(formSection);
        return () => observer.unobserve(formSection);
    }, []);

    return (
        <header className={css.header}>
            <div className={css.container}>
                <div className={css.logo}>
                    <FiMapPin className={css.logoIcon} />
                    <a href="/">Hawaii parts</a>
                </div>

                <nav className={`${css.nav} ${isMenuOpen ? css.navOpen : ''}`}>
                    <ul className={css.navList}>
                        <li>
                            <a href="/" onClick={closeMenu}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#benefits" onClick={closeMenu}>
                                Benefits
                            </a>
                        </li>
                     
                    </ul>

                    <address className={css.address}>
                        <ul className={css.addressList}>
                            <li>
                                <FiMail className={css.icon} />
                                <a href="mailto:alexhawaiiparts@gmail.com" onClick={closeMenu}>
                                    alexhawaiiparts@gmail.com
                                </a>
                            </li>
                            {/* <li>
                                <FiPhone className={css.icon} />
                                <a href="tel:+380961111111" onClick={closeMenu}>
                                    +38 096 111 11 11
                                </a>
                            </li> */}
                        </ul>
                    </address>
                </nav>

                <a
                    href="#hero"
                    className={`${css.ctaButton} ${isFormVisible ? css.active : ''}`}
                    onClick={handleAddCarClick}
                >
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
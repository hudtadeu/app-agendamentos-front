import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome, faInfoCircle, faCog, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="top-navbar">
                <div className="logo">MyApp</div>
                <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-logo">MyApp</div>
                <ul>
                    <li>
                        <a href="#home">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            <FontAwesomeIcon icon={faCog} className="icon" />
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            Contato
                        </a>
                    </li>
                </ul>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
            </div>
        </>
    );
};

export default Navbar;

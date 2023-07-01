import React from 'react';

export default function MenuBar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a id="navbar__logo">Event Organiser</a>
                <div className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span> <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a className="navbar__links" id="home-page">
                            Home
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__links" id="about-page">
                            About
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__links" id="services-page">
                            Services
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

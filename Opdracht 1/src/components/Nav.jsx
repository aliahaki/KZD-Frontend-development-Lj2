import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="header">
                {/* Zwarte Topbar */}
                <div className="top-bar">
                    <div className="container top-bar-content">
                        <div className="top-info">
                            <span><i className="fa-regular fa-envelope"></i> infoyoursite@mail.com</span>
                            <span><i className="fa-solid fa-phone"></i> +77 000 453</span>
                        </div>
                        <div className="top-actions">
                            <div className="social-icons">
                                <a href="#facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#google"><i className="fa-brands fa-google"></i></a>
                                <a href="#linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            <button className="btn-quote">GET A QUOTE &gt;</button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Witte Navigatieraamwerk */}
            <nav className="main-nav">
                <div className="container nav-content">
                    <div className="logo">
                        <i className="fa-solid fa-gear logo-icon"></i>
                        <div className="logo-text">
                            <span className="logo-title">ALTECO</span>
                            <span className="logo-subtitle">Business Template</span>
                        </div>
                    </div>
                    <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                        <li><a href="#home" className="active">HOME</a></li>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#pages">PAGES</a></li>
                        <li><a href="#shop">SHOP</a></li>
                        <li><a href="#blog">BLOG</a></li>
                        <li><a href="#contact">CONTACT US</a></li>
                        <li><button className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button></li>
                    </ul>

                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
        </>
    );
}
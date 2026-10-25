import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
    const afbeeldingen = [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80'
    ];

    const [huidigeFoto, setHuidigeFoto] = useState(0);

    const volgendeFoto = () => {
        setHuidigeFoto((huidigeFoto + 1) % afbeeldingen.length);
    };

    const vorigeFoto = () => {
        setHuidigeFoto(
            (huidigeFoto - 1 + afbeeldingen.length) % afbeeldingen.length
        );
    };

    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${afbeeldingen[huidigeFoto]})`
            }}
        >
            <button
                className="slider-arrow arrow-left"
                onClick={vorigeFoto}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="blue-bg">Business</span> YOUR SATISFACTION
                    </h1>

                    <div className="hero-subtitle-box">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>

                    <div className="hero-buttons">
                        <button className="btn-outline">LOGIN</button>
                        <button className="btn-outline">REGISTER</button>
                    </div>
                </div>
            </div>

            <button
                className="slider-arrow arrow-right"
                onClick={volgendeFoto}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </section>
    );
}
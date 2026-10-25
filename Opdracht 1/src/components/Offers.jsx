import React from 'react';
import './Offers.css';

export default function Offers() {
    return (
        <section className="offers-section">
            <div className="container grid-2">
                {/* Linkerkolom: Afbeelding */}
                <div className="offers-img-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                        alt="Business Colleagues"
                    />
                </div>

                {/* Rechterkolom: Content */}
                <div className="offers-info">
                    <span className="section-subheading">ELABORATED CODE AND CREATIVE DESIGN</span>
                    <h2 className="section-heading">WHAT WE OFFERS</h2>
                    <p className="offers-lead">
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsuy veli. Nam nec tellus a odio tincidunt auctor
                    </p>

                    <div className="grid-2 inner-offers-grid">
                        <div className="offer-box">
                            <div className="offer-icon">
                                <i className="fa-solid fa-chess-knight"></i>
                            </div>
                            <h3>Clean Modern Code</h3>
                            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...</p>
                            <a href="#readmore" className="read-more-link">READ MORE &gt;</a>
                        </div>

                        <div className="offer-box">
                            <div className="offer-icon">
                                <i className="fa-solid fa-paw"></i>
                            </div>
                            <h3>Design To Brag About</h3>
                            <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque lobortis...</p>
                            <a href="#readmore" className="read-more-link">READ MORE &gt;</a>
                        </div>
                    </div>

                    <button className="btn-dark-solid">VIEW ALL OFFERS &gt;</button>
                </div>
            </div>
        </section>
    );
}
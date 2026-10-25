import React from 'react';
import './Services.css';

export default function Services() {
    const services = [
        {
            icon: "fa-solid fa-glass-water",
            sub: "TUTORIALS TO HELP",
            title: "PROMOTION AGENCY",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore."
        },
        {
            icon: "fa-solid fa-wrench",
            sub: "TUTORIALS TO HELP",
            title: "CONSTRUCTIONS BUILDING",
            desc: "Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima."
        },
        {
            icon: "fa-solid fa-book-open",
            sub: "TUTORIALS TO HELP",
            title: "EDUCATION ONLINE",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore tempor incididunt ut labore."
        },
        {
            icon: "fa-solid fa-arrows-up-to-line",
            sub: "TUTORIALS TO HELP",
            title: "FASHION DESIGN",
            desc: "Non numquam eius modi tempora incidu nt ut labore et dolore magnam aliquam quaerat voluptatem minima."
        }
    ];

    return (
        <section className="services-section">
            <div className="container text-center">
                <span className="section-subheading">ELABORATED CODE AND CREATIVE DESIGN</span>
                <h2 className="section-heading">OUR SERVICES</h2>
                <div className="dots">■ ■ ■</div>
                <p className="services-lead">
                    Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                </p>

                {/* Grid van 4 kolommen */}
                <div className="grid-4 services-grid">
                    {services.map((item, idx) => (
                        <div className="service-card" key={idx}>
                            <div className="blue-circle-icon">
                                <i className={item.icon}></i>
                            </div>
                            <span className="card-subheading">{item.sub}</span>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
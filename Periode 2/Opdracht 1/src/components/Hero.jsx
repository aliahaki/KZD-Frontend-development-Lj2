
import { useState } from 'react';

// Afbeeldingen en teksten voor de carousel
const afbeeldingen = [
  {
    id: 1,
    afbeelding:
      'https://images.pexels.com/photos/18430840/pexels-photo-18430840.jpeg?auto=compress&cs=tinysrgb&w=1200',
    titel: 'Indoor Plants',
    beschrijving: 'Greenery for home and office',
  },
  {
    id: 2,
    afbeelding:
      'https://images.pexels.com/photos/14017638/pexels-photo-14017638.jpeg?auto=compress&cs=tinysrgb&w=1200',
    titel: 'Fresh Flowers',
    beschrijving: 'Beautiful flowers for every occasion',
  },
  {
    id: 3,
    afbeelding:
      'https://images.pexels.com/photos/3009676/pexels-photo-3009676.jpeg?auto=compress&cs=tinysrgb&w=1200',
    titel: 'Beautiful Bouquets',
    beschrijving: 'Freshly arranged with care',
  },
];

function Hero() {
  // Nummer van de afbeelding die zichtbaar is
  const [huidigeSlide, setHuidigeSlide] = useState(0);

  // Naar de vorige afbeelding
  function vorigeSlide() {
    setHuidigeSlide((vorige) =>
      (vorige - 1 + afbeeldingen.length) % afbeeldingen.length
    );
  }

  // Naar de volgende afbeelding
  function volgendeSlide() {
    setHuidigeSlide((vorige) =>
      (vorige + 1) % afbeeldingen.length
    );
  }

  const slide = afbeeldingen[huidigeSlide];

  return (
    <section className="hero row align-items-center">

      {/* Welkomsttekst links */}
      <div className="col-12 col-sm-6">
        <div className="hero-tekst">
          <h1>Fresh Flowers, Thoughtfully Arranged</h1>

          <p>
            Seasonal blooms crafted for everyday moments
            and meaningful occasions. Sourced responsibly
            and arranged with care.
          </p>

          <a href="#categories" className="btn btn-primary shop-knop">
            Shop Flowers
          </a>
        </div>
      </div>

      {/* Carousel rechts */}
      <div className="col-12 col-sm-6 carousel-kolom">
        <div className="bloemen-carousel">

          <img
            src={slide.afbeelding}
            alt={slide.titel}
            className="carousel-foto"
          />

          {/* Vorige afbeelding */}
          <button
            type="button"
            className="carousel-pijl pijl-links"
            onClick={vorigeSlide}
            aria-label="Vorige afbeelding"
          >
            &#10094;
          </button>

          {/* Volgende afbeelding */}
          <button
            type="button"
            className="carousel-pijl pijl-rechts"
            onClick={volgendeSlide}
            aria-label="Volgende afbeelding"
          >
            &#10095;
          </button>

          {/* Tekst op de afbeelding */}
          <div className="carousel-tekst">
            <h2>{slide.titel}</h2>
            <p>{slide.beschrijving}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

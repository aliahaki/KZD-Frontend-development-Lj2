
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Animals from './components/Animals';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navigatie */}
      <Navbar />

      <main id="home" className="achtergrond">
        <div className="container-fluid florist-container">

          {/* Welkomsttekst en carousel */}
          <Hero />

          {/* Categorieën ophalen uit JSON */}
          <Categories />

          {/* Dieren ophalen uit de Animals API */}
          <Animals />

          {/* Winkelinformatie */}
          <section
            className="winkel row align-items-center"
            id="location"
          >
            <div className="col-12 col-sm-6">
              <img
                src="https://images.pexels.com/photos/12932611/pexels-photo-12932611.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Kleurrijke bloemen in een bloemenwinkel"
                className="winkel-foto"
              />
            </div>

            <div className="col-12 col-sm-6">
              <div className="winkel-tekst">
                <h2>Visit Our Shop</h2>

                <p>
                  123 Flower Street<br />
                  Garden District<br />
                  Bloomtown, BT 45678
                </p>

                <p>
                  Open Monday to Saturday<br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;

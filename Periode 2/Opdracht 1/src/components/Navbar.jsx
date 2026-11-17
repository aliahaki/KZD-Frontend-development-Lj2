
import { useState } from 'react';

function Navbar() {
  // Bijhouden of het hamburgermenu open is
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu openen en sluiten
  function wisselMenu() {
    setMenuOpen(!menuOpen);
  }

  // Menu sluiten als gebruiker op een link klikt
  function sluitMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid florist-container">

          {/* Logo */}
          <a
            className="navbar-brand"
            href="#home"
            onClick={sluitMenu}
          >
            Florist
          </a>

          {/* Hamburger voor tablet en mobiel */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={wisselMenu}
            aria-label="Navigatiemenu"
            aria-expanded={menuOpen}
            aria-controls="navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigatielinks */}
          <div
            id="navbar-menu"
            className={`collapse navbar-collapse ${
              menuOpen ? 'show' : ''
            }`}
          >
            <div className="navbar-nav">

              <a className="nav-link" href="#home" onClick={sluitMenu}>
                Home
              </a>

              <a className="nav-link" href="#roses" onClick={sluitMenu}>
                Roses
              </a>

              <a className="nav-link" href="#bouquets" onClick={sluitMenu}>
                Bouquets
              </a>

              <a className="nav-link" href="#plants" onClick={sluitMenu}>
                Plants
              </a>

              <a className="nav-link" href="#gifts" onClick={sluitMenu}>
                Gifts
              </a>

              <a className="nav-link" href="#location" onClick={sluitMenu}>
                Location
              </a>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;

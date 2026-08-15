import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import uxlogo from "../assets/uxday_Logo.png";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuAbierto ? "hidden" : "";

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        cerrarMenu();
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [menuAbierto]);

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          {/* LOGO */}
          <img
            src={uxlogo}
            alt="Logo UX Day 2026"
            className="header-logo"
          />

          {/* MENÚ DESKTOP */}
          <ul className="header-links">
            <li>
              <a href="/" className="small-regular-inter">
                Beneficios
              </a>
            </li>

            <li>
              <a href="/servicios" className="small-regular-inter">
                Speakers
              </a>
            </li>

            <li>
              <a href="/agenda" className="small-regular-inter">
                Agenda
              </a>
            </li>

            <li>
              <a href="/tickets" className="small-regular-inter">
                Tickets
              </a>
            </li>

            <li>
              <a href="/sede" className="small-regular-inter">
                Sede
              </a>
            </li>

            <li>
              <a href="/faq" className="small-regular-inter">
                Faq
              </a>
            </li>
          </ul>

          {/* BOTÓN DESKTOP */}
          <button type="button" className="btn-ticket">
            Comprar Ticket
          </button>

          {/* BOTÓN HAMBURGUESA MOBILE */}
          <button
            type="button"
            className="header-hamburger"
            onClick={() => setMenuAbierto(true)}
            aria-label="Abrir menú"
            aria-expanded={menuAbierto}
          >
            <Menu size={30} strokeWidth={2.3} />
          </button>
        </nav>
      </header>

      {/* MODAL MOBILE */}
      {menuAbierto && (
        <div className="mobile-menu-overlay">
          {/* FONDO */}
          <button
            type="button"
            className="mobile-menu-backdrop"
            onClick={cerrarMenu}
            aria-label="Cerrar menú"
          />

          {/* PANEL */}
          <div
            className="mobile-menu-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
          >
            {/* CABECERA */}
            <div className="mobile-menu-header">
              <img
                src={uxlogo}
                alt="Logo UX Day 2026"
                className="mobile-menu-logo"
              />

              {/* BOTÓN X */}
              <button
                type="button"
                className="mobile-menu-close"
                onClick={cerrarMenu}
                aria-label="Cerrar menú"
              >
                <X
                  className="mobile-menu-close-icon"
                  size={26}
                  strokeWidth={2.5}
                />
              </button>
            </div>

            {/* LINKS */}
            <ul className="mobile-menu-links">
              <li>
                <a href="/" onClick={cerrarMenu}>
                  <span>01</span>
                  Beneficios
                </a>
              </li>

              <li>
                <a href="/servicios" onClick={cerrarMenu}>
                  <span>02</span>
                  Speakers
                </a>
              </li>

              <li>
                <a href="/agenda" onClick={cerrarMenu}>
                  <span>03</span>
                  Agenda
                </a>
              </li>

              <li>
                <a href="/tickets" onClick={cerrarMenu}>
                  <span>04</span>
                  Tickets
                </a>
              </li>

              <li>
                <a href="/sede" onClick={cerrarMenu}>
                  <span>05</span>
                  Sede
                </a>
              </li>

              <li>
                <a href="/faq" onClick={cerrarMenu}>
                  <span>06</span>
                  Faq
                </a>
              </li>
            </ul>

            {/* FOOTER */}
            <div className="mobile-menu-footer">
              <a
                href="/tickets"
                className="mobile-menu-ticket"
                onClick={cerrarMenu}
              >
                Comprar Ticket
              </a>

              <p>UX DAY ECUADOR 2026</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
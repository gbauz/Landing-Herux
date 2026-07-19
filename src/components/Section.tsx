import fondosection from '../assets/fondoheader.png';
import logoPimento from '../assets/logo-pimento.png';
import logoIngenux from '../assets/logo-ingenux.png';
import logoRedPrisma from '../assets/logo-redprisma.png';
import { MapPin, Calendar, Users } from 'lucide-react';

function Hero() {
  return (
    <section
      className="section-hero"
      style={{ backgroundImage: `url(${fondosection})` }}
    >
      <div className="hero-container">
        {/* Columna izquierda */}
        <div className="hero-left">
          <span className="hero-badge">1º EDICIÓN</span>

          <h1 className="hero-title">
            EL PUNTO DONDE SE UNE EL{' '}
            <span className="hero-highlight-pink">DISEÑO,</span>{' '}
            NEGOCIO Y{' '}
            <span className="hero-highlight-purple">TECNOLOGÍA.</span>
          </h1>

          <p className="hero-description small-regular-inter">
            Diseño de experiencia, experiencia del cliente, diseño de
            servicios e inteligencia artificial reunidos en una misma
            jornada.
          </p>

          <div className="hero-buttons">
            <button className="btn-ticket">Comprar ticket</button>
            <button className="btn-secondary">Explora la agenda</button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="hero-right">
          <ul className="hero-info-list">
            <li className="hero-info-item">
              <MapPin size={18} strokeWidth={2} />
              <span>GUAYAQUIL, ECUADOR</span>
            </li>
            <li className="hero-info-item">
              <Calendar size={18} strokeWidth={2} />
              <span>17-09-2026</span>
            </li>
            <li className="hero-info-item">
              <Users size={18} strokeWidth={2} />
              <span>EVENTO PRESENCIAL</span>
            </li>
          </ul>

          <div className="hero-ux-mark">UX</div>
        </div>
      </div>

      {/* Footer del hero: organizadores */}
      <div className="hero-organizers">
        <span className="hero-organizers-label small-regular-inter">
          ORGANIZADO POR
        </span>
        <div className="hero-organizers-logos">
          <img src={logoPimento} alt="Pimento" className="organizer-logo" />
          <img src={logoIngenux} alt="IngenUX" className="organizer-logo" />
          <img
            src={logoRedPrisma}
            alt="Red Prisma Latam"
            className="organizer-logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
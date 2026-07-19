import uxlogo from '../assets/uxday_Logo.png';

function Header() {
  return (
<header className="header">
  <nav className="header-nav">
    <img src={uxlogo} alt="Logo Ux Day 2026" className="header-logo" />

    <ul className="header-links">
      <li><a href="/" className="small-regular-inter">Beneficios</a></li>
      <li><a href="/servicios" className="small-regular-inter">Speakers</a></li>
      <li><a href="/agenda" className="small-regular-inter">Agenda</a></li>
      <li><a href="/tickets" className="small-regular-inter">Tickets</a></li>
      <li><a href="/sede" className="small-regular-inter">Sede</a></li>
      <li><a href="/faq" className="small-regular-inter">Faq</a></li>
    </ul>

    <button className="btn-ticket">Comprar Ticket</button>
  </nav>
</header>
  );
}

export default Header;
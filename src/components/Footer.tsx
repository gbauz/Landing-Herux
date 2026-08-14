import React from "react";


const DEFAULT_COLUMNS = [
  {
    heading: "Evento",
    links: ["Beneficios", "Agenda", "Speakers", "Tickets", "Sponsors", "Ubicación"],
  },
  {
    heading: "Recursos",
    links: [
      "Preguntas frecuentes",
      "Empresas y equipos",
      "Ser sponsor",
      "Certificado blockchain",
    ],
  },
  {
    heading: "Comunidad",
    links: ["Herux", "Mento Creativo", "Red Prisma"],
  },
];

const DEFAULT_SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const DEFAULT_LEGAL_LINKS = ["Términos de uso", "Política de privacidad", "Banca de cookies"];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}

export default function Footer({
  eventInfo = [
    { icon: <CalendarIcon />, lines: ["17 - 09 - 2026", "9:00 AM - 5:00 PM"] },
    { icon: <PinIcon />, lines: ["Salón Turquesa II", "Mall del Sol, Guayaquil"] },
    { icon: <GlobeIcon />, lines: ["Presencial & digital"] },
  ],
  columns = DEFAULT_COLUMNS,
  email = "elxdayc@herelx.com",
  socials = DEFAULT_SOCIALS,
  organizerLabel = "Organizado por",
  year = 2026,
  legalLinks = DEFAULT_LEGAL_LINKS,
}) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-ux">UX</span>
              <span className="footer__logo-day">
                DAY
                <span className="footer__logo-year">2026</span>
              </span>
            </a>

            <ul className="footer__meta">
              {eventInfo.map((item, i) => (
                <li className="footer__meta-item" key={i}>
                  <span className="footer__meta-icon">{item.icon}</span>
                  <span className="footer__meta-text">
                    {item.lines.map((line, j) => (
                      <span key={j}>{line}</span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav className="footer__col" key={col.heading} aria-label={col.heading}>
              <h3 className="footer__heading">{col.heading}</h3>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer__col">
            <h3 className="footer__heading">Contacto</h3>
            <p className="footer__label">Email</p>
            <a className="footer__email" href={`mailto:${email}`}>
              {email}
            </a>

            <h3 className="footer__heading footer__heading--spaced">
              Síguenos
            </h3>
            <ul className="footer__socials">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <span className="footer__social-icon">{s.icon}</span>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy;{year} UX Day Ecuador &nbsp; {organizerLabel}{" "}
            <span className="footer__organizers">
              <span className="footer__org footer__org--mento">mento</span>
              <span className="footer__org footer__org--herux">
                <span className="footer__org-dot" />her<strong>UX</strong>
              </span>
              <span className="footer__org footer__org--prisma">
                Red <strong>PRISMA</strong>
                <span className="footer__org-sub">LATAM+</span>
              </span>
            </span>
          </p>

          <ul className="footer__legal">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

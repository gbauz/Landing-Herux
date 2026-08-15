
// Logos — adjust these paths to wherever you keep static assets in your project
import smartLogo from "../assets/smart.png";
import wyndhamLogo from "../assets/wyndham.png";
import carreraLogo from "../assets/carrera.png";
import universidadLogo from "../assets/universidad.png";
import interactionLogo from "../assets/Interaction.png";

const SPONSORS = [
  { name: "Smart Tickets", src: smartLogo, className: "sponsors__logo--smart" },
  { name: "Wyndham", src: wyndhamLogo, className: "sponsors__logo--wyndham" },
  {
    name: "Carrera de Entornos Multimedia y Experiencia de Usuario",
    src: carreraLogo,
    className: "sponsors__logo--carrera",
    keepColor: true,
  },
  {
    name: "Universidad Católica de Santiago de Guayaquil",
    src: universidadLogo,
    className: "sponsors__logo--universidad",
  },
  {
    name: "Interaction Design Foundation",
    src: interactionLogo,
    className: "sponsors__logo--interaction",
  },
];

interface SponsorsProps {
  eyebrow?: string;
  question?: string;
  ctaLabel?: string;
  onRequestInfo?: () => void;
}

export default function Sponsors({
  eyebrow = "Impulsados por",
  question = "¿Tu organización desea ser parte?",
  ctaLabel = "Solicitar información",
  onRequestInfo = () => {},
}: SponsorsProps) {
  return (
    <section className="sponsors" aria-labelledby="sponsors-heading">
      <div className="sponsors__inner">
        <h2 id="sponsors-heading" className="sponsors__eyebrow">
          {eyebrow}
        </h2>

        <ul className="sponsors__grid">
          {SPONSORS.map((sponsor) => (
            <li className="sponsors__item" key={sponsor.name}>
              <img
                src={sponsor.src}
                alt={sponsor.name}
                className={`sponsors__logo ${sponsor.className} ${
                  sponsor.keepColor ? "sponsors__logo--color" : ""
                }`}
                loading="lazy"
              />
            </li>
          ))}
        </ul>

        <p className="sponsors__question">{question}</p>

        <button
          type="button"
          className="sponsors__cta"
          onClick={onRequestInfo}
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
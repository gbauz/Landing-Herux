import { useState } from 'react';
import fondoAccordion from '../assets/fondo-sectionacordion.png';

interface AccordionPanel {
  number: string;
  title: string;
  items: string[];
}

const panels: AccordionPanel[] = [
  {
    number: '01',
    title: '¿QUÉ PUEDES ESPERAR?',
    items: [
      'Análisis de casos de estudio de proyectos regionales.',
      'Sesiones prácticas.',
      'Panel de debate.',
      'Networking con profesionales a nivel nacional e internacional.',
    ],
  },
  {
    number: '02',
    title: '¿A QUIÉNES CONOCERÁS?',
    items: [
      'Diseñadores y estrategas de negocio regionales.',
      'Ponentes expertos en metodologías validadas.',
      'Emprendedores con casos reales de aplicación.',
      'Una comunidad activa para seguir conectando después del evento.',
    ],
  },
  {
    number: '03',
    title: '¿QUÉ TE LLEVAS?',
    items: [
      'Un plan de acción aplicable a tu negocio.',
      'Plantillas y recursos de las sesiones prácticas.',
      'Certificado de participación.',
      'Contactos clave para futuros proyectos.',
    ],
  },
];

const marqueeItems = [
  'DISEÑO DE SERVICIO',
  'UX & NEGOCIO',
  'INTELIGENCIA ARTIFICIAL',
  'EXPERIENCIA DE USUARIO',
  'EXPERIENCIA DEL CLIENTE',
];

function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section
        className="section-accordion"
        style={{ backgroundImage: `url(${fondoAccordion})` }}
      >
        <h2 className="accordion-title">
          APRENDE ESTRATEGIAS DE DISEÑO PARA TU NEGOCIO, HERRAMIENTAS
          APLICABLES Y METODOLOGÍAS VALIDADAS POR EXPERTOS.
        </h2>

        <div className="accordion-container">
          {panels.map((panel, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={panel.number}
                className={`accordion-panel ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="accordion-collapsed-label">
                  <span className="accordion-index">{panel.number}</span>
                  <span>{panel.title}</span>
                </div>

                <div className="accordion-expanded-content">
                  <span className="accordion-big-number">{panel.number}</span>
                  <div className="accordion-content-block">
                    <p className="accordion-content-title">{panel.title}</p>
                    <ul>
                      {panel.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={`${item}-${i}`}>
              {item}
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default AccordionSection;

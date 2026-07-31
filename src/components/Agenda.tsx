import React from 'react';

interface Speaker {
  name: string;
  role: string;
  location: string;
  photo?: string;
}

interface AgendaItem {
  time: string;
  period: 'A.M.' | 'P.M.';
  theme: 'lavender' | 'pink-light' | 'magenta' | 'maroon' | 'purple-mid' | 'violet';
  title: string;
  description?: string;
  tags?: string[];
  speaker?: Speaker;
  simple?: boolean; // true para bloques sin tags/speaker (Registro, Apertura, Break, Cierre)
}

const agendaItems: AgendaItem[] = [
  {
    time: '09:00',
    period: 'A.M.',
    theme: 'lavender',
    title: 'REGISTRO, ACREDITACIÓN Y UBICACIÓN',
    description: 'Recepción De Asistentes, Entrega De Credenciales Y Orientación Sobre Las Instalaciones Del Evento.',
    simple: true,
  },
  {
    time: '10:00',
    period: 'A.M.',
    theme: 'pink-light',
    title: 'APERTURA OFICIAL',
    simple: true,
  },
  {
    time: '10:15',
    period: 'A.M.',
    theme: 'magenta',
    tags: ['Ponencia', 'Talleres', 'Panel de debate'],
    title: 'TRANSFORMARSE PARA TRANSFORMAR / EL DISEÑO DE SERVICIOS COMO VENTAJA COMPETITIVA EN LA ECONOMÍA DEL CAMBIO',
    description: 'Lo Que Haces Se Copia. Cómo Lo Haces Se Copia. En Un Mercado Donde La Ejecución Es Cada Vez Más Replicable, ¿Qué Queda Como Verdadera Ventaja Competitiva?',
    speaker: {
      name: 'Montserrat Moreno',
      role: 'Especialista en Diseño de Servicios',
      location: 'México',
    },
  },
  {
    time: '11:05',
    period: 'A.M.',
    theme: 'magenta',
    tags: ['Ponencia', 'Talleres', 'Panel de debate'],
    title: 'MESA DE DEBATE: CUSTOMER EXPERIENCE',
    description: 'Conversación Sobre Estrategias, Retos Y Mejores Prácticas En CX Para Empresas Latinoamericanas.',
  },
  {
    time: '12:00',
    period: 'P.M.',
    theme: 'maroon',
    tags: ['Ponencia', 'Talleres', 'Panel de debate'],
    title: 'DISEÑO DE INTERFACES QUE CONECTAN CON USUARIOS',
    description: 'Principios De Diseño UI Y Cómo Crear Interfaces Intuitivas Y Efectivas Que Mejoran La Experiencia.',
    speaker: {
      name: 'Carlos Hernández',
      role: 'Especialista en Experiencia del Cliente',
      location: 'Ecuador',
    },
  },
  {
    time: '12:40',
    period: 'P.M.',
    theme: 'lavender',
    title: 'BREAK DE ALMUERZO',
    simple: true,
  },
  {
    time: '14:00',
    period: 'P.M.',
    theme: 'purple-mid',
    tags: ['Ponencia', 'Talleres', 'Panel de debate'],
    title: 'EL ROL ESTRATÉGICO DE UX PARA LOS NEGOCIOS. LA ECUACIÓN DEL VALOR: PERSONAS, IA Y DINERO.',
    description: 'Descubre Cómo Conectar Estratégicamente El Diseño, Los Negocios Y La Tecnología Para Potenciar Una Sociedad Más Justa En Acceso A La Información, Productos Y Servicios.',
    speaker: {
      name: 'Natalia Rey',
      role: 'Especialista en Experiencia del Usuario',
      location: 'Uruguay',
    },
  },
  {
    time: '14:55',
    period: 'P.M.',
    theme: 'violet',
    tags: ['Ponencia', 'Talleres', 'Panel de debate'],
    title: 'DE TU MENTE AL PRODUCTIVO',
    description: 'Transforma Tu Idea En Una Pantalla De Alta Fidelidad Con Google Stitch En Este Taller Práctico.',
    speaker: {
      name: 'Johan Villalba',
      role: 'Especialista en Experiencia del Usuario e Inteligencia Artificial',
      location: 'Colombia',
    },
  },
  {
    time: '15:50',
    period: 'P.M.',
    theme: 'violet',
    tags: ['Ponencia', 'Talleres', 'Panel de debate'],
    title: 'UX Y ESTRATEGIA DE NEGOCIO',
    description: 'Cómo Alinear La Experiencia De Usuario Con Los Objetivos Estratégicos De La Organización.',
    speaker: {
      name: 'Haryank Famania',
      role: 'Especialista en Inteligencia Artificial',
      location: 'México',
    },
  },
  {
    time: '16:45',
    period: 'P.M.',
    theme: 'lavender',
    title: 'CIERRE OFICIAL',
    simple: true,
  },
];

const LocationIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export default function Agenda() {
  return (
    <section className="agenda">
      <h1 className="agenda__title">AGENDA</h1>

      <div className="agenda__list">
        {agendaItems.map((item, index) => (
          <div className={`agenda-row agenda-row--${item.theme}`} key={index}>
            <div className="agenda-time">
              <span className="agenda-time__hour">{item.time}</span>
              <span className="agenda-time__period">{item.period}</span>
            </div>

            <div className={`agenda-card ${item.simple ? 'agenda-card--simple' : ''}`}>
              {item.tags && (
                <div className="agenda-card__tags">
                  {item.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      {i > 0 && <span className="agenda-card__dot">•</span>}
                      <span>{tag}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}

              <h3 className="agenda-card__title">{item.title}</h3>

              {item.description && (
                <p className="agenda-card__description">{item.description}</p>
              )}

              {item.speaker && (
                <div className="agenda-card__speaker">
                  <div className="agenda-card__avatar">
                    {item.speaker.photo ? (
                      <img src={item.speaker.photo} alt={item.speaker.name} />
                    ) : (
                      <span>{item.speaker.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="agenda-card__speaker-info">
                    <p className="agenda-card__speaker-name">{item.speaker.name}</p>
                    <p className="agenda-card__speaker-role">{item.speaker.role}</p>
                    <p className="agenda-card__speaker-location">
                      <LocationIcon /> {item.speaker.location}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="agenda__cta">
        <button type="button" className="btn-ticket">
          Comprar Ticket
        </button>
      </div>
    </section>
  );
}
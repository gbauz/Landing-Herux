import { useEffect, useState } from 'react';

interface TicketPlan {
  name: string;
  price: string;
  taxNote: string;
  highlighted?: boolean;
  badge?: string;
  description?: string;
  features: string[];
}

const ticketPlans: TicketPlan[] = [
  {
    name: 'TICKET REGULAR',
    price: '$25',
    taxNote: 'Impuestos incluidos',
    badge: 'EL MÁS VENDIDO',
    description: 'Acceso completo al evento con ponencias, talleres y networking',
    features: [
      'Acceso a zonas de networking',
      'Kit de bienvenida con materiales del evento',
      'Acceso a la gala networking posterior',
    ],
  },
  {
    name: 'TICKET VIP',
    price: '$35',
    taxNote: 'Impuestos incluidos',
    highlighted: true,
    description: 'Una experiencia exclusiva con beneficios premium y acceso preferencial',
    features: [
      'Todo lo incluido en ticket regular',
      'Asiento preferencial en el salón',
      'Acceso exclusivo 30 minutos antes del evento',
      'Networking privado y meet and greet con ponentes',
      'Credencial VIP diferenciada',
      'Hidratación AM y PM',
      'Más merch de marcas aliadas',
      'Acceso a la zona VIP durante el evento',
      'Descuento especial en la gala networking',
    ],
  },
];

// Fecha límite de venta — ajusta a la fecha real del evento
const SALE_END_DATE = new Date('2026-08-07T23:59:59');

function getTimeRemaining() {
  const total = SALE_END_DATE.getTime() - new Date().getTime();
  const clamped = Math.max(total, 0);

  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

export default function Tickets() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="tickets">
      <h1 className="tickets__title">
        FORMA PARTE DEL PRIMER
        <br />
        UX DAY 2026 DEL ECUADOR.
      </h1>

      <p className="tickets__countdown-label">LAS VENTAS TERMINAN EN</p>

      <div className="countdown">
        <div className="countdown__unit">
          <span className="countdown__number">{pad(timeLeft.days)}</span>
          <span className="countdown__label">DÍAS</span>
        </div>
        <span className="countdown__sep">:</span>
        <div className="countdown__unit">
          <span className="countdown__number">{pad(timeLeft.hours)}</span>
          <span className="countdown__label">HORAS</span>
        </div>
        <span className="countdown__sep">:</span>
        <div className="countdown__unit">
          <span className="countdown__number">{pad(timeLeft.minutes)}</span>
          <span className="countdown__label">MINUTOS</span>
        </div>
        <span className="countdown__sep">:</span>
        <div className="countdown__unit">
          <span className="countdown__number">{pad(timeLeft.seconds)}</span>
          <span className="countdown__label">SEGUNDOS</span>
        </div>
      </div>

      <p className="tickets__limited">CUPOS LIMITADOS. ASEGURA TU LUGAR.</p>

      <div className="tickets__grid">
        {ticketPlans.map((plan) => (
          <div
            key={plan.name}
            className={`ticket-card ${plan.highlighted ? 'ticket-card--vip' : ''}`}
          >
            {plan.badge && <span className="ticket-card__badge">{plan.badge}</span>}

            <h3 className="ticket-card__name">{plan.name}</h3>
            <p className="ticket-card__price">{plan.price}</p>
            <p className="ticket-card__tax">{plan.taxNote}</p>

            {plan.description && (
              <p className="ticket-card__description">{plan.description}</p>
            )}

            <ul className="ticket-card__features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button type="button" className="btn-ticket ticket-card__btn">
              Comprar Ticket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
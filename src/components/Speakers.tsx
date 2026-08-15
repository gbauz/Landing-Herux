import fondoSpeakers from '../assets/fondo-speakers.png';
import speakersWatermark from '../assets/speakers.png';
import Nataliarey from '../assets/Nataliarey.png';
import Monserratmoreno from '../assets/Monserratmoreno.png';
import Johanvillalba from '../assets/Johanvillalba.png';
import Carloshernandez from '../assets/carloshernandez.png'
interface Speaker {
  name: string;
  role: string;
  photo: string;
}

const speakers: Speaker[] = [
  {
    name: "Natalia Rey",
    role: "Especialista en experiencia del usuario",
    photo: Nataliarey,
  },
  {
    name: "Montserrat Moreno",
    role: "Especialista en diseño de servicios",
    photo: Monserratmoreno,
  },
  {
    name: "Johan Villalba",
    role: "Especialista en experiencia del usuario e inteligencia artificial",
    photo: Johanvillalba,
  },
  {
    name: "Carlos Hernández",
    role: "Especialista en experiencia del cliente",
    photo: Carloshernandez,
  },
];

export default function Speakers() {
  return (
    <section
      className="speakers"
      style={{ backgroundImage: `url(${fondoSpeakers})` }}
    >
      <img
        src={speakersWatermark}
        alt=""
        aria-hidden="true"
        className="speakers__watermark"
      />

      <div className="speakers__content">
        <p className="speakers__eyebrow">PRESÉNTATE ANTE</p>
        <h2 className="speakers__title">LAS MENTES MÁS BRILLANTES.</h2>

        <div className="speakers__grid">
          {speakers.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-card__image-wrap">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="speaker-card__image"
                />
              
              </div>
              <div className="speaker-card__info">
                <h3 className="speaker-card__name">{speaker.name}</h3>
                <p className="speaker-card__role">{speaker.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

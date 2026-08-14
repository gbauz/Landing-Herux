import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PREGUNTAS_DEFAULT = [
  {
    pregunta: "¿Dónde me puedo inscribir?",
    respuesta:
      "Puedes inscribirte directamente desde la sección de tickets en esta página, seleccionando el tipo de entrada que prefieras.",
  },
  {
    pregunta: "¿El evento es presencial, virtual o híbrido?",
    respuesta:
      "El evento es híbrido: puedes asistir presencialmente al venue o seguirlo en vivo por streaming.",
  },
  {
    pregunta: "¿Dónde será el evento?",
    respuesta: "La sede se confirmará junto con tu entrada, vía correo electrónico.",
  },
  {
    pregunta: "¿Cuál es el precio de las entradas?",
    respuesta:
      "Los precios varían según el tipo de entrada (Regular o VIP). Revisa la sección de tickets para más detalles.",
  },
  {
    pregunta: "¿Hay soporte para empresas?",
    respuesta:
      "Sí, contamos con paquetes corporativos. Escríbenos para conocer las opciones disponibles.",
  },
  {
    pregunta: "¿Se entrega un certificado?",
    respuesta: "Sí, todos los asistentes reciben un certificado digital de participación.",
  },
  {
    pregunta: "¿Cuál es la política de cancelación o reembolso?",
    respuesta:
      "Puedes solicitar un reembolso hasta 7 días antes del evento. Pasado ese plazo no se realizan devoluciones.",
  },
];

/**
 * Sección de preguntas frecuentes en formato acordeón.
 *
 * Props:
 * - titulo: encabezado de la sección
 * - preguntas: array de objetos { pregunta, respuesta }
 */
export default function PreguntasFrecuentes({
  titulo = "Preguntas frecuentes",
  preguntas = PREGUNTAS_DEFAULT,
}) {
  const [abiertaIndex, setAbiertaIndex] = useState(null);

  const toggle = (index) => {
    setAbiertaIndex((actual) => (actual === index ? null : index));
  };

  return (
    <section className="faq">
      <h2 className="faq__titulo">{titulo}</h2>

      <div className="faq__lista">
        {preguntas.map((item, index) => {
          const estaAbierta = abiertaIndex === index;
          return (
            <div key={index} className="faq-item">
              <button
                type="button"
                className="faq-item__header"
                onClick={() => toggle(index)}
                aria-expanded={estaAbierta}
              >
                <span className="faq-item__pregunta">{item.pregunta}</span>
                <ChevronDown
                  className={`faq-item__icono ${
                    estaAbierta ? "faq-item__icono--abierto" : ""
                  }`}
                  size={20}
                />
              </button>

              <div
                className={`faq-item__respuesta ${
                  estaAbierta ? "faq-item__respuesta--abierta" : ""
                }`}
              >
                <p className="faq-item__respuesta-texto">{item.respuesta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-09-17T00:00:00');

function getTimeRemaining() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  return { dias, horas, minutos, segundos };
}

function Cronometro() {
  const [tiempo, setTiempo] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTiempo(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="cronometro">
      <div className="cronometro-item">
        <span className="cronometro-numero">{pad(tiempo.dias)}</span>
        <span className="cronometro-label">DÍAS</span>
      </div>

      <span className="cronometro-separador">:</span>

      <div className="cronometro-item">
        <span className="cronometro-numero">{pad(tiempo.horas)}</span>
        <span className="cronometro-label">HORAS</span>
      </div>

      <span className="cronometro-separador">:</span>

      <div className="cronometro-item">
        <span className="cronometro-numero">{pad(tiempo.minutos)}</span>
        <span className="cronometro-label">MINUTOS</span>
      </div>

      <span className="cronometro-separador">:</span>

      <div className="cronometro-item">
        <span className="cronometro-numero">{pad(tiempo.segundos)}</span>
        <span className="cronometro-label">SEGUNDOS</span>
      </div>
    </div>
  );
}

export default Cronometro;
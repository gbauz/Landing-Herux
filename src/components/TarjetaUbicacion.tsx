import React from "react";

export default function TarjetaUbicacion({
  nombre = "Salón Turquesa II",
  lineas = ["Mall del Sol", "Av. Plaza Dañín, Manzana 15", "Guayaquil, Ecuador"],
  mapsUrl = "https://www.google.com/maps/place/?q=place_id:ChIJ9Trxu-CxRI4RnSKCZFE3gkA",
}) {
  return (
    <div className="tarjeta-ubicacion">
      <div className="tarjeta-ubicacion__info">
        <h2 className="tarjeta-ubicacion__nombre">{nombre}</h2>
        <div>
          {lineas.map((linea, i) => (
            <p key={i} className="tarjeta-ubicacion__linea">
              {linea}
            </p>
          ))}
        </div>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="tarjeta-ubicacion__btn"
      >
        Abrir en Google Maps
      </a>
    </div>
  );
}

import react from "react";
export default function MapaUbicacion({
  title = "Salón Turquesa, Mall del Sol",
  width = "100%",
  height = 450,
  className = "",
}) {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.97755595506!2d-79.91082475162064!3d-2.155826255211145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d003bf13af5%3A0x40823751647e229d!2sSal%C3%B3n%20Turquesa%2C%20Mall%20del%20Sol!5e0!3m2!1ses!2sec!4v1786245394422!5m2!1ses!2sec";

  return (
    <div
      className={`mapa-ubicacion-container ${className}`}
      style={{ width, borderRadius: 8, overflow: "hidden" }}
    >
      <iframe
        src={mapSrc}
        title={title}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

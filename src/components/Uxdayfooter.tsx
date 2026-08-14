import React from "react";

interface UxDayFooterProps {
  title?: React.ReactNode;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSecondaryClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function UxDayFooter({
  title = (
    <>
      Forma parte del primer
      <br />
      UX Day del Ecuador
    </>
  ),
  description = "Únete a la comunidad de diseñadores, investigadores y profesionales UX más importante de Ecuador. Conecta con expertos de LATAM, aprende estrategias aplicables y expande tu red profesional.",
  primaryLabel = "Comprar ticket",
  secondaryLabel = "Descargar brochure",
  onPrimaryClick,
  onSecondaryClick,
}: UxDayFooterProps) {
  return (
    <section className="ux-day-footer">
      <div className="ux-day-footer__inner">
        <h1 className="ux-day-footer__title">{title}</h1>

        <p className="ux-day-footer__description">
          {description}
        </p>

        <div className="ux-day-footer__actions">
          <button
            type="button"
            className="ux-day-footer__btn ux-day-footer__btn--primary"
            onClick={onPrimaryClick}
          >
            {primaryLabel}
          </button>

          <button
            type="button"
            className="ux-day-footer__btn ux-day-footer__btn--secondary"
            onClick={onSecondaryClick}
          >
            {secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
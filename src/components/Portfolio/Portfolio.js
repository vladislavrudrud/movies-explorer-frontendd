import React from "react";
import "./Portfolio.css";
import icon from "../../images/strela.svg";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <nav className="portfolio__links">
          <a
            className="portfolio__link"
            href="https://github.com/vladislavrudrud"
          >
            <h3 className="portfolio__subtitle">Статичный сайт</h3>
            <img className="portfolio__image" src={icon} alt="Иконка" />
          </a>
          <a
            className="portfolio__link"
            href="https://github.com/vladislavrudrud"
          >
            <h3 className="portfolio__subtitle">Адаптивный сайт</h3>
            <img className="portfolio__image" src={icon} alt="Иконка" />
          </a>
          <a
            className="portfolio__link"
            href="https://github.com/vladislavrudrud"
          >
            <h3 className="portfolio__subtitle">Одностраничное приложение</h3>
            <img className="portfolio__image" src={icon} alt="Иконка" />
          </a>
        </nav>
      </section>
    </>
  );
}

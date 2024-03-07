import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__container">
          <p className="footer__text">© 2023</p>
          <nav className="footer__links">
            <a
              className="footer__link"
              href="https://github.com/vladislavrudrud"
            >
              Яндекс.Практикум
            </a>
            <a
              className="footer__link"
              href="https://github.com/vladislavrudrud"
            >
              Github
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}

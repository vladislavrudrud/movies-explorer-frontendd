import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__description">Страница не найдена</p>
      <Link to="/" className="notfound__button">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;

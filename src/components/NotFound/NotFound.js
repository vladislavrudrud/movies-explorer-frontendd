import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = ({ onReturn }) => {
  return (
    <>
      <main>
        <section className="notfound page">
          <h1 className="notfound__title">404</h1>
          <p className="notfound__description">Страница не найдена</p>
          <Link to="/" className="notfound__button" onClick={onReturn}>
            Назад
          </Link>
        </section>
      </main>
    </>
  );
}

export default NotFound;

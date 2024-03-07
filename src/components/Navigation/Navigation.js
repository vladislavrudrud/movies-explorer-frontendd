import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import men from "../../images/icon__COLOR_icon-main (1).svg";

export default function Navigation({ isDark, isOpen, onClose }) {
  return (
    <>
      <div className="navigation__links">
        <Link
          to="/movies"
          className="navigation__link"
        >
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__link">
          Сохраненные фильмы
        </Link>
      </div>
      <Link
        to="/profile"
        className="navigation__links navigation__profile"
      >
        <p className="navigation__text">Аккаунт</p>
        <img className="navigation__image" alt="меню" src={men} />
      </Link>
      {isOpen && (
        <>
          <div className="navigation__container_box"></div>
          <div className="navigation__menu">
            <div className="navigation__list">
              <button className="navigation__close" onClick={onClose}></button>
              <nav className="navi__link">
                <NavLink exact to="/" className="navi__item">
                  Главная
                </NavLink>
                <NavLink to="/movies" className="navi__item">
                  Фильмы
                </NavLink>
                <NavLink to="/saved-movies" className="navi__item">
                  Сохранённые фильмы
                </NavLink>
                <Link
                  to="/profile"
                  className="navigation__button_last"
                >
                  <p className="navigation__text">Аккаунт</p>
                  <img className="navigation__image" alt="меню" src={men} />
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}

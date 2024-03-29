import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import menu from "../../images/polosy.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ isLogged, isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header ${isDark ? "header_blue" : ""}`}
      id="header"
    >
      <div className={`header__container`}>
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <div className="header__button_container">
          {isLogged ? (
            <>
              <Navigation isOpen={isMenuOpen} onClose={toggleMenu} />
              <button
                className="header__button header__btn_burger"
                onClick={toggleMenu}
              >
                <img className="header__menu_logo" alt="Меню" src={menu} />
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="header__button header__button_link">
                Регистрация
              </Link>
              <Link to="/signin" className="header__button header__btn_signin">
                Войти
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

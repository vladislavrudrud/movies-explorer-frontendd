import React from "react";
import { Link } from "react-router-dom";
import Validation from "../../utils/Validation";
import "./Register.css";
import logo from "../../images/logo.svg";

export default function Register() {
  const { isError, isValue, isValid, handleChangeInput } = Validation();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }

    const values = {
      name: isValue.name,
      email: isValue.email,
      password: isValue.password,
    };
    console.log(values);
  };

  return (
    <>
      <section className="register">
        <div className="register__container">
          <Link to="/">
            <img className="register__logo" src={logo} alt="Логотип" />
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label className="form__label">
              Имя
              <input
                className={`form__input ${
                  isError.name ? "input__errors" : ""
                }`}
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                value={isValue.name || ""}
                onChange={handleChangeInput}
                required
                placeholder="Ваше имя"
              />
              <span className="register__error">{isError.name}</span>
            </label>

            <label className="form__label">
              E-mail
              <input
                className={`form__input ${
                  isError.email ? "input__errors" : ""
                }`}
                id="input-userEmail"
                name="email"
                type="email"
                autoComplete="off"
                value={isValue.email || ""}
                onChange={handleChangeInput}
                required
                placeholder="Ваш email"
              />
              <span className="register__error">{isError.email}</span>
            </label>

            <label className="form__label">
              Пароль
              <input
                className={`form__input ${
                  isError.password ? "input__errors" : ""
                }`}
                id="input-password"
                name="password"
                type="password"
                value={isValue.password || ""}
                onChange={handleChangeInput}
                required
                placeholder="Ваш пароль"
                minLength={8}
              />
              <span className="register__error">{isError.password}</span>
            </label>
            <p className="form__error_text">Что-то пошло не так...</p>
            <button className="register__button" type="submit">
              Зарегистрироваться
            </button>
            <p className="register__subtitle">
              Уже зарегистрированы?{" "}
              <Link to="/signin" className="register__link">
                Войти
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

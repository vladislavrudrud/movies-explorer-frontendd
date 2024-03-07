import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Validation from "../../utils/Validation";

export default function Login() {
  const { isError, isValue, isValid, handleChangeInput } = Validation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      email: isValue.email,
      password: isValue.password,
    };
    console.log(values);
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" alt="Логотип" src={logo} />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>

        <form className="form" onSubmit={handleSubmit}>
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
            <span className="login__error">{isError.email}</span>
          </label>

          <label className="form__label">
            Пароль
            <input
              className={`form__input ${
                isError.password ? "input__errors" : ""
              }`}
              id="password"
              name="password"
              type="password"
              value={isValue.password || ""}
              onChange={handleChangeInput}
              required
              placeholder="Ваш пароль"
            />
              <span className="register__error">{isError.password}</span>
          </label>
          <button
            className={`login__button ${
              !isValid ? "form__button_disabled" : ""
            }`}
            type="submit"
            disabled={!isValid}
          >
            Войти
          </button>
          <p className="login__subtitle">
            Ещё не зарегистрированы?{" "}
            <Link to="/signup" className="login__link">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

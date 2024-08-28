import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Validation from "../../utils/Validation";
import "./Register.css";
import logo from "../../images/logo.svg";

export default function Register({ onRegister }) {
  const { isError, isValue, isValid, handleChangeInput, setIsError } =
    Validation();
  const [isErrorSending, setIsErrorSending] = useState();
  const handleSubmitRegister = (evt) => {
    evt.preventDefault();
    if (isValid) {
      onRegister(isValue, setIsErrorSending);
    }
  };

  useEffect(() => {
    isValue.email &&
      !isValue.email.includes(".") &&
      setIsError((prevState) => ({
        ...prevState,
        email: "Не корректный email",
      }));
  }, [isValue.email, setIsError]);

  const isButtonDisabled =
    !isValue.name ||
    !isValue.email ||
    !isValue.password ||
    Boolean(isError?.name) ||
    Boolean(isError?.email) ||
    Boolean(isError?.password);
  return (
    <>
      <main>
        <section className="register">
          <div className="register__container">
            <Link to="/">
              <img className="register__logo" src={logo} alt="Логотип" />
            </Link>
            <h1 className="register__title">Добро пожаловать!</h1>
            <form className="form" onSubmit={handleSubmitRegister}>
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
                {isError.name && (
                  <span className="register__error">{isError.name}</span>
                )}
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
                {isError.email && (
                  <span className="register__error">{isError.email}</span>
                )}
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
                {isError.password && (
                  <span className="register__error">{isError.password}</span>
                )}
              </label>
              {isErrorSending && (
                <p className="form__error-text">Что-то пошло не так</p>
              )}
              <button
                className="register__button"
                type="submit"
                disabled={isButtonDisabled}
              >
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
      </main>
    </>
  );
}

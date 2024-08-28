import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Validation from "../../utils/Validation";

export default function Login({ onLogin }) {
  const { isError, isValue, setIsError, handleChangeInput } = Validation();
  const [isErrorSending, setIsErrorSending] = useState();

  const handleSubmitLogin = (evt) => {
    evt.preventDefault();
    onLogin(isValue, setIsErrorSending);
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
    !isValue.email ||
    !isValue.password ||
    Boolean(isError?.email) ||
    Boolean(isError?.password);

  return (
    <>
      <main>
        <section className="login">
          <div className="login__container">
            <Link to="/">
              <img className="login__logo" alt="Логотип" src={logo} />
            </Link>
            <h1 className="login__title">Рады видеть!</h1>

            <form className="form" onSubmit={handleSubmitLogin}>
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
                {isError.password && (
                  <span className="register__error">{isError.password}</span>
                )}
              </label>
              {isErrorSending && (
                <p className="form__error-text">Что-то пошло не так</p>
              )}
              <button
                className="login__button"
                type="submit"
                disabled={isButtonDisabled}
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
      </main>
    </>
  );
}

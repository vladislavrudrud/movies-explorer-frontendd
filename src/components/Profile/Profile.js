import "./Profile.css";
import { useEffect, useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Validation from "../../utils/Validation";

export default function Profile({ onLogout, handleProfile }) {
  const { isValue, isError, handleChangeInput, resetForm, setIsError } =
    Validation();
  const currentUser = useContext(CurrentUserContext);
  const [isErrorSending, setIsErrorSending] = useState();
  const [formData, setFormData] = useState({
    changed: false,
    updated: false,
  });
  const handleSubmitProfile = (evt) => {
    handleProfile(isValue, setIsErrorSending);
    setFormData({
      changed: false,
      updated: true,
    });
    evt.preventDefault();
  };
  useEffect(() => {
    isValue.email &&
      !isValue.email.includes(".") &&
      setIsError((prevState) => ({
        ...prevState,
        email: "Не корректный email",
      }));
  }, [isValue.email, setIsError]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  const handleInputChange = (event) => {
    handleChangeInput(event);
    setFormData({
      changed: true,
      updated: false,
    });
  };

  const isButtonDisabled =
    !isValue.name ||
    !isValue.email ||
    Boolean(isError?.name) ||
    Boolean(isError?.email) ||
    (isValue.name === currentUser.name && isValue.email === currentUser.email);

  return (
    <>
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>

          <form className="profile__form" onSubmit={handleSubmitProfile}>
            <label
              className={`profile__field profile__field_border ${
                isError.name ? "input__errors" : ""
              }`}
            >
              Имя
              <input
                className={`profile__input ${
                  isError.name ? "input__errors" : ""
                }`}
                id="input-profile"
                name="name"
                type="text"
                autoComplete="off"
                value={isValue.name || ""}
                onChange={handleInputChange}
              />
              {isError.name && (
                <span className="profile__error">{isError.name}</span>
              )}
            </label>
            <label
              className={`profile__field ${
                isError.email ? "input__errors" : ""
              }`}
            >
              E-mail
              <input
                className={`profile__input ${
                  isError.email ? "input__errors" : ""
                }`}
                id="input-userEmail"
                name="email"
                type="email"
                autoComplete="off"
                value={isValue.email || ""}
                onChange={handleInputChange}
              />
              {isError.email && (
                <span className="profile__error">{isError.email}</span>
              )}
            </label>
            {isErrorSending && (
              <p className="form__error-text">
                При обновлении профиля произошла ошибка.
              </p>
            )}
            <div className="profile__container_buttons">
              <button
                className="profile__edit"
                type="submit"
                disabled={isButtonDisabled}
              >
                {formData.updated ? "Данные успешно изменены" : "Редактировать"}
              </button>
              <button
                className="profile__logout"
                type="button"
                onClick={onLogout}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

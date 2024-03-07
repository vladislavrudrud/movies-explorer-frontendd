import "./Profile.css";
import Validation from "../../utils/Validation";

export default function Profile() {
  const { isValue, isError, isValid, handleChangeInput } = Validation();
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <>
      <div className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>

        <form className="profile__form" onSubmit={handleSubmit}>
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
              value={isValue.name || "Виталий"}
              onChange={handleChangeInput}
            />
            {isError.name && (
              <span className="profile__error">{isError.name}</span>
            )}
          </label>
          <label
            className={`profile__field ${isError.email ? "input__errors" : ""}`}
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
              value={isValue.email || "pochta@yandex.ru"}
              onChange={handleChangeInput}
            />
            {isError.email && (
              <span className="profile__error">{isError.email}</span>
            )}
          </label>
          <div className="profile__container_buttons">
            <button
              className={`profile__edit ${
                !isValid ? "form__button_disabled" : ""
              }`}
              type="submit"
              disabled={!isValid}
            >
              Редактировать
            </button>
            <button className="profile__logout" type="button">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

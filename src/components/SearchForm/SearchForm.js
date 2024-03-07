import React, { useState } from "react";
// import Toggle from "../Toggle/Toggle";
import "./SearchForm.css";

export default function SearchForm() {
  const [checked, setIsChecked] = useState(false);
  const handleChangeForm = (evt) => {
    setIsChecked(evt.target.checked);
  };
  return (
    <>
      <section className="search">
        <form className="search__form" id="search-form">
          <input
            className="search__input"
            id="search"
            type="text"
            placeholder="Фильм"
          ></input>
          <button className="search__button" type="submit">
            Поиск
          </button>
        </form>
        <label className="toggle">
          <input
            className="toggle__input"
            type="checkbox"
            onChange={handleChangeForm}
            checked={checked}
          />
          <div className="toggle__switch"></div>
          <span className="toggle__span">Короткометражки</span>
        </label>
      </section>
    </>
  );
}

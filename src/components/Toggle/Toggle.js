import React from "react";
import "./Toggle.css";

export default function Toggle({ filter, isShortMovies }) {
  return (
    <label className="toggle">
      <div className="toggle_container">
        <input
          className="toggle__input"
          type="checkbox"
          onChange={filter}
          checked={isShortMovies}
        />
        <div className="toggle__switch"></div>
        <span className="toggle__span">Короткометражки</span>
      </div>
    </label>
  );
}

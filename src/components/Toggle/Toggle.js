import React, { useState } from "react";
import "./Toggle.css";

export default function Toggle() {
  const [checked, setIsChecked] = useState(false);
  const handleChangeForm = (evt) => {
    setIsChecked(evt.target.checked);
  };

  return (
    <label className="toggle">
      <div className="toggle_container">
        <input
          className="toggle__input"
          type="checkbox"
          onChange={handleChangeForm}
          checked={checked}
        />
        <div className="toggle__switch"></div>
        <span className="toggle__span">Короткометражки</span>
      </div>
    </label>
  );
}

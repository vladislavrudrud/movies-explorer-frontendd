import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({
  id,
  image,
  title,
  duration,
  isSelected,
  onSelect,
  onDelete,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="movie__card">
      <div className="movie__card_container">
        <div className="movie__description">
          <h5 className="movie__title">{title}</h5>
          <p className="movie__duration">{duration}</p>
        </div>
        <img className="movie__image" src={image} alt="Обложка фильма" />
        {pathname === "/movies" ? (
          <button
            type="button"
            className={`movie__button${
              isSelected ? " movie__button_active" : ""
            }`}
            onClick={() => onSelect(id)}
          >
            Сохранить
          </button>
        ) : (
          <button
            type="button"
            className="movies__button_delete"
            onClick={() => onDelete(id)}
          />
        )}
      </div>
    </div>
  );
};

export default MoviesCard;

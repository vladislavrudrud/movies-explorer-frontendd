import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({
  card,
  savedFilms,
  savedMovies,
  cardDelete,
  saved,
  handleSave,
}) => {
  function onCardClick() {
    if (saved) {
      cardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleSave(card);
    }
  }

  function onDelete() {
    cardDelete(card);
  }

  function formatDuration(duration) {
    if (duration < 60) {
        return `${duration}м`;
    }

    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
}

  return (
    <li className="movie__card">
      <div className="movie__card_container">
        <div className="movie__description">
          <h5 className="movie__title">{card.nameRU}</h5>
          <p className="movie__duration">{formatDuration(card.duration)}</p>
        </div>
        <a
          href={card.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
        <img className="movie__image"
        alt={card.nameRU}
        src={
          savedFilms
            ? card.image
            : `https://api.nomoreparties.co/${card.image.url}`
        }
        />
        </a>
        {savedFilms ? (
            <button
              type="button"
              className="movies__button_delete"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              type="button"
              className={`movie__button ${
                saved ? 'movie__button_active' : ''
              }`}
              onClick={onCardClick}
            >Сохранить</button>
          )}
      </div>
    </li>
  );
};

export default MoviesCard;

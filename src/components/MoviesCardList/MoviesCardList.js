import React, { useState, useEffect, useCallback } from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({
  movies,
  cardDelete,
  savedFilms,
  isLoading,
  isNotFound,
  handleSave,
  savedMovies,
}) {
  const [isRenderedMovies, setIsRenderedMovies] = useState(0);
  function addingCard() {
    setIsRenderedMovies((prevRenderedMovies) => {
      const display = window.innerWidth;
      if (display > 1278) {
        return prevRenderedMovies + 3;
      } else if (display > 767) {
        return prevRenderedMovies + 2;
      } else {
        return prevRenderedMovies + 1;
      }
    });
  }

  const quantityCard = useCallback(() => {
    const display = window.innerWidth;
    let count = 0;

    if (display > 1278) {
      count = 12;
    } else if (display > 767) {
      count = 8;
    } else {
      count = 5;
    }

    setIsRenderedMovies(count);
  }, [setIsRenderedMovies]);

  useEffect(() => {
    quantityCard();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        quantityCard();
      }, 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [quantityCard]);

  function findSavedMovieByCardId(savedMovies, card) {
    const { id } = card;
    return savedMovies.find((savedMovie) => savedMovie.movieId === id);
  }

  return (
    <>
      <section className="movies__cards">
        <ul className="movies__cards_list">
          {isLoading && <Preloader />}
          {isNotFound && !isLoading && (
            <span className="movies__errors">Ничего не найдено</span>
          )}
          {!isLoading &&
            Array.isArray(movies) &&
            movies
              .slice(0, isRenderedMovies)
              .map((movie) => (
                <MoviesCard
                  key={savedFilms ? movie._id : movie.id}
                  saved={findSavedMovieByCardId(savedMovies, movie)}
                  cards={movies}
                  card={movie}
                  savedFilms={savedFilms}
                  savedMovies={savedMovies}
                  handleSave={handleSave}
                  cardDelete={cardDelete}
                />
              ))}
        </ul>
        {movies.length > isRenderedMovies ? (
          <button className="movies__button" type="button" onClick={addingCard}>
            Ещё
          </button>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

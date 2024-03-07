import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ movies, deleteMovies }) {
  const [isMovies, setIsMovies] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  function handleStatus(id) {
    setIsMovies((movies) => {
      const newSet = new Set(movies);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }
  function handleDelete(id) {
    deleteMovies && deleteMovies(id);
  }
  const preloader = [...new Array(3)].map((element, index) => (
    <Preloader key={index} />
  ));
  return (
    <>
      <section className="movies__cards">
        <div className="movies__cards_list">
          {isLoading && preloader}
          {!isLoading &&
            Array.isArray(movies) &&
            movies.map((movie) => (
              <MoviesCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                duration={movie.duration}
                onSelect={() => handleStatus(movie.id)}
                onDelete={(id) => handleDelete(movie.id)}
                isSelected={isMovies.has(movie.id)}
              />
            ))}
        </div>
        <button className="movies__button" type="button">
          Ещё
        </button>
      </section>
    </>
  );
}

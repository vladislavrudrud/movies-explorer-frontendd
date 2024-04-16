import React, { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function SavedMovies({ savedMovies, cardDelete }) {
  const [isFilteredMovies, setIsFilteredMovies] = useState(savedMovies);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearchFilms, setIsSearchFilms] = useState("");

  function getShortDurationMovies(movies) {
    return movies.reduce((acc, movie) => {
      if (movie.duration < 40) {
        acc.push(movie);
      }
      return acc;
    }, []);
  }
  function getShortFilterMovies(movies, query) {
    const moviesByQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const userQuery = query.toLowerCase().trim();
      return (
        movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
      );
    });
    return moviesByQuery;
  }
  function handleMovieSearch(query) {
    setIsSearchFilms(query);
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
  }

  useEffect(() => {
    const filterMovies = (movies, isShort) => {
      const filteredMovies = getShortFilterMovies(movies, isSearchFilms);
      return isShort ? getShortDurationMovies(filteredMovies) : filteredMovies;
    };

    setIsFilteredMovies(filterMovies(savedMovies, isShortMovies));
  }, [savedMovies, isShortMovies, isSearchFilms]);

  useEffect(() => {
    setIsNotFound(isFilteredMovies.length === 0);
  }, [isFilteredMovies]);

  return (
    <>
      <SearchForm
        handleMovieSearch={handleMovieSearch}
        filter={handleShortMovies}
        isShortMovies={isShortMovies}
      />
      <MoviesCardList
        movies={isFilteredMovies}
        savedFilms={true}
        cardDelete={cardDelete}
        isNotFound={isNotFound}
        savedMovies={savedMovies}
      />
    </>
  );
}

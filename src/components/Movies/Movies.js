import React, { useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { moviesApi } from "../../utils/MoviesApi";

export default function Movies({ handleSave, savedMovies, cardDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isInitialMovies, setIsInitialMovies] = useState([]);
  const [isFilteredMovies, setIsFilteredMovies] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);

  const getShortDurationMovies = (movies) => {
    return movies.reduce((acc, movie) => {
      if (movie.duration < 40) {
        acc.push(movie);
      }
      return acc;
    }, []);
  };
  const getShortFilterMovies = (movies, query) => {
    const userQuery = query.toLowerCase().trim();
    return movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      return movieRu.includes(userQuery) || movieEn.includes(userQuery);
    });
  };

  function handleFilterMovies(movies, query, short) {
    const moviesList = getShortFilterMovies(movies, query, short);
    setIsInitialMovies(moviesList);
    setIsFilteredMovies(
      short ? getShortDurationMovies(moviesList) : moviesList
    );
    localStorage.setItem("movies", JSON.stringify(moviesList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  function handleShortMovies() {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      if (getShortDurationMovies(isInitialMovies).length === 0) {
        // setIsLoading(true);
        setIsFilteredMovies(getShortDurationMovies(isInitialMovies));
      } else {
        setIsFilteredMovies(getShortDurationMovies(isInitialMovies));
      }
    } else {
      setIsFilteredMovies(isInitialMovies);
    }
    localStorage.setItem("shortMovies", !isShortMovies);
  }

  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  function loadFromLocalStorage(key) {
    return localStorage.getItem(key);
  }
  function handleMovieSearch(query) {
    saveToLocalStorage("movieSearch", query);
    saveToLocalStorage("shortMovies", isShortMovies);

    setIsLoading(true);

    const storedMovies = JSON.parse(loadFromLocalStorage("allMovies"));
    if (storedMovies) {
      setTimeout(() => {
        handleFilterMovies(storedMovies, query, isShortMovies);
        setIsRequestError(false);
        setIsLoading(false);
      }, 2000);
    } else {
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setTimeout(() => {
            handleFilterMovies(movies, query, isShortMovies);
            setIsRequestError(false);
            setIsLoading(false);
          }, 2000);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  // useEffect(() => {
  //     if (localStorage.getItem('shortMovies') === 'true') {
  //         setIsShortMovies(true);
  //     } else {
  //         setIsShortMovies(false);
  //     }
  // }, []);
  useEffect(() => {
    const storedShortMovies = localStorage.getItem("shortMovies");
    setIsShortMovies(storedShortMovies === "true");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setIsInitialMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setIsFilteredMovies(getShortDurationMovies(movies));
      } else {
        setIsFilteredMovies(movies);
      }
    } else {
    }
  }, []);

  // useEffect(() => {
  //     if (localStorage.getItem('movieSearch')) {
  //         if (filteredMovies.length === 0) {
  //             setIsNotFound(true);
  //         } else {
  //             setIsNotFound(false);
  //         }
  //     } else {
  //         setIsNotFound(false);
  //     }
  // }, [filteredMovies]);
  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      setIsNotFound(isFilteredMovies.length === 0);
    } else {
      setIsNotFound(false);
    }
  }, [isFilteredMovies]);

  return (
    <>
      <SearchForm
        handleMovieSearch={handleMovieSearch}
        filter={handleShortMovies}
        isShortMovies={isShortMovies}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        movies={isFilteredMovies}
        savedFilms={false}
        isLoading={isLoading}
        isRequestError={isRequestError}
        isNotFound={isNotFound}
        handleSave={handleSave}
        cardDelete={cardDelete}
      />
    </>
  );
}

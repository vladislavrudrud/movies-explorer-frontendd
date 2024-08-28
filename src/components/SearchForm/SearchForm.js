import React, { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import "./SearchForm.css";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  handleMovieSearch,
  filter,
  isShortMovies,
}) {
  const location = useLocation();
  const [isQueryError, setIsQueryError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim().length > 0) {
      setIsQueryError(false);
    }
  }, [query]);

  function handleChangeInputValue(evt) {
    setQuery(evt.target.value);
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      handleMovieSearch(query);
    }
  }
  useEffect(() => {
    if (location.pathname === "/movies") {
      const localQuery = localStorage.getItem("movieSearch");
      if (localQuery) {
        setQuery(localQuery);
      }
    }
  }, [location]);

  return (
    <>
      <section className="search">
        <form
          className="search__form"
          id="search"
          onSubmit={handleSearchSubmit}
        >
          <input
            className="search__input"
            id="search"
            type="text"
            placeholder="Фильм"
            onChange={handleChangeInputValue}
            value={query || ""}
          />
          <button className="search__button" type="submit">
            Поиск
          </button>
        </form>
        {isQueryError && (
          <span className="search__error">Введите название фильма</span>
        )}
        <Toggle filter={filter} isShortMovies={isShortMovies} />
      </section>
    </>
  );
}

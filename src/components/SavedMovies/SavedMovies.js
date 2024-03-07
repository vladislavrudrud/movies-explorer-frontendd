import React, { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const movieData = [
  {
    id: 1,
    image: require("../../images/1.png"),
    title: "В погоне за Бенкси",
    duration: "0ч 42м",
  },
  {
    id: 2,
    image: require("../../images/2.png"),
    title: "В погоне за Бенкси",
    duration: "0ч 42м",
  },
  {
    id: 3,
    image: require("../../images/3.png"),
    title: "В погоне за Бенкси",
    duration: "0ч 42м",
  },
];

export default function SavedMovies() {
  const [movies, setMovies] = useState(movieData);

  function handleDelete(id) {
    setMovies((prevState) => {
      return prevState.filter((movie) => movie.id !== id);
    });
  }

  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} deleteMovies={(id) => handleDelete(id)} />
    </>
  );
}

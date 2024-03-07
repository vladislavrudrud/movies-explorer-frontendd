import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const movieData = [
    { id: 1, image: require('../../images/1.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 2, image: require('../../images/2.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 3, image: require('../../images/3.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 4, image: require('../../images/4.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 5, image: require('../../images/5.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 6, image: require('../../images/6.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 7, image: require('../../images/7.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 8, image: require('../../images/8.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 9, image: require('../../images/9.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 10, image: require('../../images/10.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 11, image: require('../../images/11.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
    { id: 12, image: require('../../images/12.png'), title: "В погоне за Бенкси", duration: "0ч 42м" },
];

export default function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movieData} />
    </>
  );
}

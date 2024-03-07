import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Layout from "../Layout/Layout";
import Promo from "../Promo/Promo";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        element={
          <Layout
            isMain={true}
            isLogged={false}
            banner={<Promo />}
            showFooter={true}
          />
        }
      >
        <Route path="/" element={<Main />} />
      </Route>
      <Route element={<Layout isLogged={true} showFooter={true} />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile showFooter={false} />} />
      </Route>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

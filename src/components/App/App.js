import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Layout from "../Layout/Layout";
import "./App.css";

function App() {

  const navigate = useNavigate();

  const clickBack = () => {
    navigate(-1);
  }
  return (
    <Routes>
      <Route
        element={
          <Layout
            isMain={true}
            isLogged={true}
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
      <Route path="*" element={<NotFound onReturn={clickBack}/>} />
    </Routes>
  );
}

export default App;

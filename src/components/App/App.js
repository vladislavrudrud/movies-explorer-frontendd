import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { mainApi } from "../../utils/MainApi";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Layout from "../Layout/Layout";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (isLogged) {
      console.log("тут");
      setIsLoading(true);
      Promise.all([mainApi.getProfile(), mainApi.getInitialCards()])
        .then(([user, cards]) => {
          setCurrentUser(user);
          setSavedMovies(cards.reverse());
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLogged]);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .checkToken()
      .then((res) => {
        setCurrentUser(res);
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [navigate]);

  function handleRegister(data, returnError) {
    if (!data.email || !data.password || !data.name) {
      return;
    }
    mainApi
      .register(data)
      .then(() => {
        handleLogin(data);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        returnError(err);
      });
  }

  function handleLogin(data, returnError) {
    if (!data.email || !data.password) {
      return;
    }
    mainApi
      .login(data)
      .then((data) => {
        if (data.token) {
          setIsLogged(true);
          localStorage.setItem("token", data.token);
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
        returnError(err);
      });
  }

  function handleUpdateProfile(user, returnError) {
    mainApi
      .setProfile(user)
      .then(() => {
        setCurrentUser({ ...currentUser, name: user.name, email: user.email });
      })
      .catch((err) => {
        console.log(err);
        returnError(err);
      });
  }

  function handleLogout() {
    mainApi.removeToken();
    setIsLogged(false);
    navigate("/");
    setCurrentUser({});
  }

  const handleCardDelete = async (card) => {
    try {
      await mainApi.deleteCard(card._id);
      const updatedMovies = savedMovies.filter((item) => item._id !== card._id);
      setSavedMovies(updatedMovies);
    } catch (err) {
      console.log(err);
    }
  }
  
  const handleCardLike = async (card) => {
    try {
      const newMovie = await mainApi.addCard(card);
      setSavedMovies([newMovie, ...savedMovies]);
    } catch (err) {
      console.log(err);
    }
  }

  const clickBack = () => {
    navigate(-1);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          element={
            <Layout isMain={true} isLogged={isLogged} showFooter={true} />
          }
        >
          <Route path="/" element={<Main />} />
        </Route>
        <Route
          element={<ProtectedRoute isLogged={isLoading ? true : isLogged} />}
        >
          <Route element={<Layout isLogged={isLogged} showFooter={true} />}>
            <Route
              path="/movies"
              element={
                <Movies
                  savedMovies={savedMovies}
                  cardDelete={handleCardDelete}
                  handleSave={handleCardLike}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  savedMovies={savedMovies}
                  cardDelete={handleCardDelete}
                  handleSave={handleCardLike}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  showFooter={false}
                  handleProfile={handleUpdateProfile}
                  onLogout={handleLogout}
                />
              }
            />
          </Route>
        </Route>
        <Route
          element={<ProtectedRoute isLogged={isLoading ? true : !isLogged} />}
        >
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
        </Route>
        <Route path="*" element={<NotFound onReturn={clickBack} />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.css";
import Footer from "../Footer/Footer";

export default function Layout({ banner, isMain, isLogged, showFooter }) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <div className="page">
      <Header isDark={isMain} isLogged={isLogged} />
      {banner && banner}
      <div className="page">
          <main>
            {}
            <Outlet />
          </main>
      </div>
      {!isProfilePage && showFooter && <Footer />}
    </div>
  );
}

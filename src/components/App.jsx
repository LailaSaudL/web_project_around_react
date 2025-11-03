import React from "react";
import logo from "./images/logo.svg";   // logo
import avatar from "./images/avatar.jpg"; // avatar
import "./App.css"; // estilos globales

function App() {
  return (
    <div className="page__content">
      <header className="header page__section">
        <img
          src={logo}
          alt="Around the U.S logo"
          className="logo header__logo"
        />
      </header>

      <section className="profile page__section">
        <img
          src={avatar}
          alt="User avatar"
          className="profile__avatar"
        />
      </section>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./images/logo.svg";   // logo
import avatar from "./images/avatar.jpg"; // avatar
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page__content">
         <Header/>
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
       <Main/>
      <Footer/>
    </div>
  );
}

export default App;

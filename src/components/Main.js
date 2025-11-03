import React from "react";
import avatar from "../../images/avatar.jpg"; // ruta relativa

function Main() {
  return (
    <main className="profile page__section">
      <img
        src={avatar}
        alt="User avatar"
        className="profile__avatar"
      />
      <h1 className="profile__name">User Name</h1>
      <p className="profile__description">About user...</p>
    </main>
  );
}

export default Main;

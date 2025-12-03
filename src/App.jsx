import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api";
import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  // Estados principales
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  // Cargar datos iniciales al montar el componente
  useEffect(() => {
    // Obtener información del usuario
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => console.error("Error al obtener usuario:", error));

    // Obtener tarjetas
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => console.error("Error al obtener tarjetas:", error));
  }, []);

  // Handlers para popups
  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  // Handler para actualizar perfil
  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        handleClosePopup();
      })
      .catch((error) => console.error("Error al actualizar perfil:", error));
  }

  // Handler para actualizar avatar
  function handleUpdateAvatar(data) {
    api.setUserAvatar(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        handleClosePopup();
      })
      .catch((error) => console.error("Error al actualizar avatar:", error));
  }

  // Handler para dar/quitar like
  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error("Error al cambiar like:", error));
  }

  // Handler para eliminar tarjeta
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error("Error al eliminar tarjeta:", error));
  }

  // Handler para agregar nueva tarjeta
  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error("Error al agregar tarjeta:", error));
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page__content">
        <Header />
        <Main
          cards={cards}
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

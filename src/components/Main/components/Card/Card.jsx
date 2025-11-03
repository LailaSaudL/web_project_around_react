export default function Card({ card, handleOpenPopup }) {
  const { name, link, isLiked } = card;

  const imageComponent = {
    title: null,
    children: (
      <img className="popup__image" src={link} alt={name} />
    ),
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={`card__like-button ${isLiked ? "card__like-button_active" : ""}`}
        />
      </div>
    </li>
  );
}

export default function EditProfile() {
  return (
    <form
      className="popup__form"
      name="edit-profile-form"
      id="edit-profile-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="name"
          maxLength="40"
          minLength="2"
          name="name"
          placeholder="Nombre"
          required
          type="text"
        />
        <span className="popup__error" id="name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_about"
          id="about"
          maxLength="200"
          minLength="2"
          name="about"
          placeholder="Acerca de mí"
          required
          type="text"
        />
        <span className="popup__error" id="about-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

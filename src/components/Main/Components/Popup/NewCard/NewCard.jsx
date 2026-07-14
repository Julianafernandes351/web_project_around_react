import { useContext } from 'react';
import { CurrentUserContext } from "../../../../../context/CurrentUserContext";


export default function NewCard() {

  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const cardName = e.target.elements['card-name'].value;
    const cardLink = e.target.elements['link'].value;
    handleAddPlaceSubmit({ name: cardName, link: cardLink });
  }

  
  
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      onSubmit={handleSubmit}

      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}

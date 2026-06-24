export default function EditProfile() {
  return (
<form className="popup__form" id="edit-profile-form">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Nome"
              type="text"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="name-input-error popup__input-error"
              ></span
            >
            <input
              className="popup__input popup__input_type_description"
              name="description"
              placeholder="Sobre mim"
              type="text"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="description-input-error popup__input-error"
              ></span
            >
            <button className="button popup__button" type="submit">Salvar</button>
          </form>
          )}
         
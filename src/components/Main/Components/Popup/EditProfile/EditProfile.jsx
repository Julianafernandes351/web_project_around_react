import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext";

export default function EditProfile() {

const userContext = useContext(CurrentUserContext); // Obtém o objeto de usuário atual
const { currentUser, handleUpdateUser } = userContext;
const [name, setName] = useState(currentUser.name);
const [description, setDescription] = useState(currentUser.about);

const handleNameChange = (event) => {
  setName(event.target.value);
};

const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    handleUpdateUser({ name, about: description }); // Atualiza as informações do usuário
  };

  return (
<form className="popup__form" id="edit-profile-form" noValidate onSubmit={handleSubmit}>
            <input
              className="popup__input popup__input_type_name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nome"
              type="text"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="name-input-error popup__input-error"
              ></span
            >
            <input
              className="popup__input popup__input_type_description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Sobre mim"
              type="text"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="description-input-error popup__input-error"></span>
            <button className="button popup__button" type="submit" >Salvar</button>
          </form>
          )};
        
         
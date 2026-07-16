import { useState, useContext, useEffect } from "react";
import Card from "./Components/Card/Card";
import Popup from "./Components/Popup/Popup";
import NewCard from "./Components/Popup/NewCard/NewCard";
import EditAvatar from "./Components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./Components/Popup/EditProfile/EditProfile";
import AvatarImage from "../../images/avatar.jpg";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import api from "../../utils/api.js";



export default function Main({ onOpenPopup, onClosePopup, popup, cards, handleCardLike, handleCardDelete }) {


  const newCardPopup = { title: "New card", children: <NewCard /> };
  const imagePopup = { title: "", children: <img src="" alt="" /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);



function handleSubmitEditProfile(data) {
  api.saveUserInfo(data.name, data.about).then((newData) => {
    setCurrentUser(newData);
  }).catch((error) => console.error(error)); 
}


  return (
    <main className="content">
        <section className="profile page__section">
          <img className="profile__image" src={currentUser.avatar} alt="Avatar" onClick={() => onOpenPopup(editAvatarPopup)} />
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => onOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
            onClick={() => onOpenPopup(newCardPopup)}
        ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
    {cards.map((card) => (
      <Card key={card._id} card={card} openPopup={onOpenPopup} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
    ))}
  </ul>
        </section>
          {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      </main>
  )}

 
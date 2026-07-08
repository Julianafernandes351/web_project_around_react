import { useState, useContext, useEffect } from "react";
import Card from "./Components/Card/Card";
import Popup from "./Components/Popup/Popup";
import NewCard from "./Components/Popup/NewCard/NewCard";
import EditAvatar from "./Components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./Components/Popup/EditProfile/EditProfile";
import AvatarImage from "../../images/avatar.jpg";
import {CurrentUserContext} from "../../context/CurrentUserContext.jsx";
import api from "../../utils/api.js";

const initialCards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];


export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const imagePopup = { title: "", children: <img src="" alt="" /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  
useEffect(() => {
  setCards(initialCards);
}, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

   async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;
    
    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
   const newCard = await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
    console.log(newCard);
}

async function handleCardDelete(card) {
  // Enviar uma solicitação para a API para excluir o cartão
  await api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
  }).catch((error) => console.error(error));
}

  return (
    <main className="content">
        <section className="profile page__section">
          <img className="profile__image" src={AvatarImage} alt="Avatar" onClick={() => handleOpenPopup(editAvatarPopup)} />
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Adicionar cartão"
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
    {cards.map((card) => (
      <Card key={card._id} card={card} openPopup={handleOpenPopup} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
    ))}
  </ul>
        </section>
          {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      </main>
  )}

 
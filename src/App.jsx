import { useState, useEffect } from 'react'
import logo from "./images/logo.svg";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import {CurrentUserContext} from './contexts/CurrentUserContext'
import api from './utils/api.js'


function App() {

const [currentUser, setCurrentUser] = useState({});
const [popup, setPopup] = useState(null);
const [cards, setCards] = useState([]);

useEffect(() => {
  api.getInitialCards().then((initialCards) => {
  setCards(initialCards);})
}, []);

   function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;
    
    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
   const newCard = api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
   
}

 function handleCardDelete(card) {
  // Enviar uma solicitação para a API para excluir o cartão
   api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
  }).catch((error) => console.error(error));
}


  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

 const handleUpdateUser = (data) => {
    (async () => {
      console.log(data);
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (data) => {
  api.setUserAvatar(data)
    .then((newData) => {
      setCurrentUser(newData); // atualiza o avatar localmente
      handleClosePopup();      // fecha o pop-up
    })
    .catch((error) => console.error(error));
};

const handleAddPlaceSubmit = (data) => {
  api.addCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]); // adiciona no início
      handleClosePopup();
    })
    .catch((error) => console.error(error));
};

  
  return (
     <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
      <div className='page__content'>
        <Header />
        <Main  
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        popup={popup}
        cards={cards}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App
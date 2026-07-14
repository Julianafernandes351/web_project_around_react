import { useRef, useContext} from 'react';
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {


const avatarRef = useRef();
const userContext = useContext(CurrentUserContext); // Obtém o objeto de usuário atual
const { handleUpdateAvatar, handleUpdateUser } = userContext;

function handleSubmit(e) {
  e.preventDefault();

  handleUpdateAvatar({
    avatar: avatarRef.current.value, // 👈 aqui você pega o valor do input
  });
}
    return (
      <form className="popup__form" id="avatar-update-form" onSubmit={handleSubmit}>
            <input
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Link de Imagem"
              required
              type="url"
              ref={avatarRef}
            />
            <span className="link-input-error popup__input-error"
              >Insira um URL.</span
            >
            <button className="button popup__button" type="submit">Salvar</button>
          </form>
    )}
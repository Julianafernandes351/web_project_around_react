export default function EditAvatar() {
    return (
      <form className="popup__form" id="avatar-update-form">
            <input
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Link de Imagem"
              required
              type="url"
            />
            <span className="link-input-error popup__input-error"
              >Insira um URL.</span
            >
            <button className="button popup__button" type="submit">Salvar</button>
          </form>
    )}
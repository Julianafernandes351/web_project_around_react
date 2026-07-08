import ImagePopup from "../Popup/ImagePopup/ImagePopup";
export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const imagePopup = { title: "", children: <ImagePopup name={name} link={link} /> };
   const cardLikeButtonClassName = `card__like-button ${
  isLiked ? 'card__like-button_is-active' : ''
}`;

  return (
    <li className="card">
      <img className="card__image" src={link} alt="" onClick={() => props.openPopup(imagePopup)} />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
        onClick={() => props.onCardDelete(props.card)}
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className={cardLikeButtonClassName}
          onClick={() => props.onCardLike(props.card)}
        />
      </div>
    </li>
  );

}
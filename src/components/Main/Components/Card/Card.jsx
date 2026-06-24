import ImagePopup from "../Popup/ImagePopup/ImagePopup";
export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const imagePopup = { title: "", children: <ImagePopup name={name} link={link} /> };
  return (
    <li className="card">
      <img className="card__image" src={link} alt="" onClick={() => props.openPopup(imagePopup)} />
      <button
        aria-label="Delete card"
        className="card__delete-button"
        type="button"
    
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Like card"
          type="button"
          className="card__like-button"
        />
      </div>
    </li>
  );
}
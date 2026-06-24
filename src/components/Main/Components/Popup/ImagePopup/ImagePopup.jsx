export default function Popup(props) {
  //children é o conteúdo de popup
  const { onClose, title, children, link, } = props;

  return (
    <div className="popup__content popup__content_content_image">
          <img alt="" className="popup__image" src={link} />
          <p className="popup__caption">{title}</p>
        </div>
  );
}
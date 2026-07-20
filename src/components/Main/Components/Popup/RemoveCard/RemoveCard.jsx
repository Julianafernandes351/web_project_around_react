
export default function RemoveCard ({handleCardDelete}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCardDelete();
    // Aqui você pode chamar a função para remover o cartão
  }
  return ( 
<form className="popup__form" id="delete-card-form"  onSubmit={handleSubmit}>
            <button className="button popup__button" type="submit">Sim</button>
          </form>
    )}
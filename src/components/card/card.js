import s from './card.module.scss';

const Card = ({ onCardClick, name, id, image, species, status, price }) => {

  const onClick = () => {
    onCardClick && onCardClick(id);
  }

  return (
    <>
      <div className={s.block}>
        <img src={image} alt=""></img>
        <div className={s.description}>
          <p className={s.itemName}>{name}</p>
          <p>{species}</p>
          <p>{status}</p>
        </div>
        <div className={s.buy}>
          <h1>${price}</h1>
          <button onClick={onClick}>Buy</button>
        </div>
      </div>
    </>
  );
}

export default Card;
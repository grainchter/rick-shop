import s from './card.module.css';

const Card = ({onCardClick, name, id, image, species, status }) => {


  const onClick = () => {
    onCardClick && onCardClick(id);
}

  return (
    <>
      
            <div className={s.block}>
              <img src={image}></img>
              <div className={s.description}>
                <div className={s.name}>
                  <p>{name}</p>
                  <p>{id}</p>
                </div>
                <hr />
                <p>{species}</p>
                <p>{status}</p>
              </div>

              <div className={s.buy}>
                <h1>${Math.floor((Math.random() * 10000) + 1)}</h1>
                <button onClick = {onClick}>Buy</button>
              </div>
            </div>
    </>
  );
}

export default Card;
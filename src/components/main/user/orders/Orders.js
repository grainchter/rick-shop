import s from './Orders.module.scss';

const Orders = ({ orderArr }) => {

  return (
    <>
      <div className={s.wrap}>
        {
          Object.entries(orderArr).map(([key, value]) =>
            <div className={s.card} key={key}>
              <div className={s.cardHead}>
                <p className={s.num}>Заказ № {key}</p>
                <p>Итоговая стоимость: ${value.totalPrice}</p>
              </div>

              {Object.entries(value.items).map(([key, { name, price, process, image, }]) =>
                <div className={s.info} key={key}>
                  <img src={image} alt=''></img>
                  <p>{name}</p>
                  <p>${price}</p>
                  <p className={s.process}>{process}</p>
                </div>
              )}
            </div>
          )}
      </div>
    </>
  );
}

export default Orders;
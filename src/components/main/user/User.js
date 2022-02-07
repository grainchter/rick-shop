import s from './User.module.scss';

import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { getUserToken } from '../../../store/user';

import { database } from '../../../firebase/firebase';

import Orders from './orders/Orders';
import Information from './information/Information';
import Preloader from '../preloader/preloader';

const User = () => {

  const [orderArr, setOrderArr] = useState({});
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [house, setHouse] = useState();
  const [phone, setPhone] = useState();
  const [isClicked, setClicked] = useState();
  const [userName, setUserName] = useState("username");
  const [isLoading, setLoading] = useState(false);

  const userId = useSelector(getUserToken);

  useEffect(() => {
    getDataName();
    getDataInfo();
    getDataOrders();
  }, [])

  const getDataName = () => {
    if (Object.keys(userId).length !== 0) {
      database.ref('/users/' + userId + '/name/').once('value', (snapshot) => {
        const db = snapshot.val();
        setUserName(db.name);
        setLoading(true);
      });
    }
  }

  const getDataInfo = () => {
    if (Object.keys(userId).length !== 0) {
      database.ref('/users/' + userId + '/information/').once('value', (snapshot) => {
        const db = snapshot.val();
        if (db != null) {
          setCountry(db.country);
          setCity(db.city);
          setStreet(db.street);
          setHouse(db.house);
          setPhone(db.phone);
          setLoading(true);
        }
      });
    }
  }

  const getDataOrders = () => {
    if (Object.keys(userId).length !== 0) {
      database.ref('/users/' + userId + '/orders/').once('value', (snapshot) => {
        const db = snapshot.val();
        setOrderArr(db);
      });
    }
    setLoading(true);
  }

  return (
    <>
      {
        (isLoading === true) &&
        <div className={s.container}>
          <div className={s.userInfo}>
            <h1>{userName}</h1>
          </div>
          <div className={s.userNavBar}>
            <button onClick={() => { setClicked("orders") }}>Заказы</button>
            <button onClick={() => { setClicked("information") }}>Information</button>
          </div>
          <div>
            {isClicked === "orders" &&
              <Orders
                orderArr={orderArr}
              />
            }

            {isClicked === "information" &&
              <Information
                userCountry={country}
                userCity={city}
                userStreet={street}
                userHouse={house}
                userPhone={phone}
              />
            }
          </div>
        </div>
      }

      {(isLoading === false) &&
        <div>
          <Preloader />
        </div>
      }
    </>
  );
}

export default User;
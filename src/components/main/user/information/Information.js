import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { useState } from 'react';
import s from './Information.module.scss';

import { database } from '../../../../firebase/firebase';

import { useSelector } from "react-redux";
import { getUserToken } from '../../../../store/user';

const Information = ({ userCountry, userCity, userStreet, userHouse, userPhone }) => {

  const userId = useSelector(getUserToken);

  const [edit, setEdit] = useState(true);

  const [country, setCountry] = useState(userCountry);
  const [city, setCity] = useState(userCity);
  const [street, setStreet] = useState(userStreet);
  const [house, setHouse] = useState(userHouse);
  const [phone, setPhone] = useState(userPhone);

  const onCountryChange = (e) => {

    e.target.value ? setCountry(e.target.value) : setCountry("");

  }

  const onCityChange = (e) => {

    e.target.value ? setCity(e.target.value) : setCity("");

  }

  const onStreetChange = (e) => {

    e.target.value ? setStreet(e.target.value) : setStreet("");

  }

  const onHouseChange = (e) => {

    e.target.value ? setHouse(e.target.value) : setHouse("");

  }

  const onPhoneChange = (value) => {

    value ? setPhone(value) : setCountry("");

  }

  const editUser = () => {
    database.ref('/users/' + userId + '/information/').set(
      {
        country: country,
        city: city,
        street: street,
        house: house,
        phone: phone,
      });
  }

  const cancelEdit = () => {
    setCountry(userCountry);
    setCity(userCity);
    setStreet(userStreet);
    setHouse(userHouse);
    setPhone(userPhone);
  }

  return (
    <>
      <div className={s.userInfoHeader}>
        <h1>Информация</h1>
        {edit === true &&
          <button onClick={() => {
            setEdit(!edit);
          }}>Редактировать</button>
        }
        {edit === false &&
          <div>
            <button onClick={() => {
              setEdit(!edit);
              editUser();
            }}>Сохранить</button>
            <button onClick={() => {
              cancelEdit();
              setEdit(!edit);
            }}>Отмена</button>
          </div>
        }
      </div>
      <div className={s.container}>
        <table>
          <tbody>
            <tr>
              <td>Страна</td>
              <td>
                <input type="text" value={country} disabled={edit} onChange={onCountryChange} />
              </td>
              <td>Город</td>
              <td>
                <input type="text" value={city} disabled={edit} onChange={onCityChange} />
              </td>
            </tr>
            <tr>
              <td>Улица</td>
              <td>
                <input type="text" value={street} disabled={edit} onChange={onStreetChange} />
              </td>
              <td>Дом</td>
              <td>
                <input type="text" value={house} disabled={edit} onChange={onHouseChange} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">Электронная почта</td>
              <td colSpan="2">
                {localStorage.getItem("email")}
              </td>
            </tr>
            <tr>
              <td colSpan="2">Номер телефона</td>
              <td colSpan="2">
                <PhoneInput
                  contry="ru"
                  value={phone}
                  disabled={edit}
                  onChange={(value) => {
                    onPhoneChange(value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Information;
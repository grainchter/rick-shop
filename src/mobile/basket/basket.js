
import s from './basket.module.scss';

import { useEffect, useState } from 'react';

import { database } from '../../firebase/firebase';

import { useSelector } from "react-redux";
import { getUserToken } from '../../store/user';
import Preloader from '../../components/main/preloader/preloader';


const Bascet = () => {


    let userId = useSelector(getUserToken);

    const [totalPrice, setPrice] = useState(0);

    const [loaded, setLoaded] = useState(false);

    const [data, setData] = useState({});

    const [array, setArr] = useState([]);

    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        if (loaded) return;

        setTimeout(() => {
            if (userId) {
                setLoaded(true);
                getData();
            }
        }, 1000);

    })

    const getData = () => {
        if (Object.keys(userId).length > 0) {
            database.ref('/users/' + userId + '/basket/').once('value', (snapshot) => {
                const db = snapshot.val();
                if (db != null) {
                    setData(Object.entries(db));
                    setLoading(true);
                } else {
                    setLoading(true);
                }
            });
        } else {
            if ((JSON.parse(localStorage.getItem("data2")) != null)) {
                setData(JSON.parse(localStorage.getItem("data2")));
                setLoading(true);
            } else {
                setLoading(true);
            }
        }
    }

    const check = (id) => {
        let checked = false;
        if (document.getElementById(id).checked === true) {
            document.getElementById(id).checked = checked;
            setArr(array.filter(item => item !== id));
            data.forEach(element => {
                if (element[1].id === id) {
                    setPrice(totalPrice - element[1].price);
                }
            });


        } else if (document.getElementById(id).checked === false) {
            document.getElementById(id).checked = !checked;
            setArr([id].concat(array));
            data.forEach(element => {
                if (element[1].id === id) {
                    setPrice(totalPrice + element[1].price);
                }
            });
            // console.log(data);
        }
    }


    const del = () => {

        if (Object.keys(userId).length === 0) {
            for (let i = 0; i <= array.length - 1; i++) {
                let items = JSON.parse(localStorage.getItem("data2"));
                items = items.filter((item) => item[1].id !== array[i]);
                localStorage.setItem("data2", JSON.stringify(items));
            }

        } else {
            for (let i = 0; i <= array.length - 1; i++) {
                database.ref('/users/' + userId + '/basket/' + array[i]).remove();
            }
        }
        window.location.reload();

    }

    const buy = () => {
        let totalPrice = 0;
        let randomNum = (Math.floor(Math.random() * (50000 - 10000)) + 10000) + Math.round(new Date() / 1000);
        if (Object.keys(userId).length === 0) {
            console.log("Зарегайся сначала");
        } else {
            for (let i = 0; i <= array.length; i++) {
                for (let j = 0; j <= data.length - 1; j++) {
                    if (array[i] === data[j][1].id) {
                        totalPrice += data[j][1].price;
                        data[j][1].process = "accepted for work";
                        database.ref('/users/' + userId + '/orders/' + randomNum + '/items/' + data[j][1].id).set(data[j][1]);
                    }
                }


                database.ref('/users/' + userId + '/basket/' + array[i]).remove();
                database.ref('characters/' + array[i]).remove();
            }
            database.ref().child('/users/' + userId + '/orders/' + randomNum).update({
                totalPrice: totalPrice
            });
        }

        window.location.reload();

    }

    return (
        <>
            {
                (isLoading === true) &&
                <div className={s.container}>

                    <div className={s.buy}>
                        <h1>Купить сейчас</h1>
                        <button onClick={() => {

                            buy();

                        }}>Buy</button>
                        <button onClick={() => {

                            del();

                        }}>Clear</button>
                    </div>

                    <div className={s.totalPrice}>
                        <p>Итого цена ${totalPrice}</p>
                    </div>

                    {
                        Object.values(data).map(([key, { name, id, image, species, status, price }]) =>
                            <div className={s.wrapper} key={key} onClick={() => {

                                check(id);

                            }
                            }>

                                <div className={s.checkbox}>
                                    <input type="checkbox" id={id} onClick={() => {

                                        check(id);

                                    }
                                    } />
                                </div>

                                <div className={s.text}>
                                    <p>{name}</p>
                                    <p>{status}</p>
                                    <p>{species}</p>
                                    <h1>${price}</h1>
                                </div>
                                <div className={s.img}>
                                    <img src={image} alt=''></img>
                                </div>
                            </div>
                        )
                    }
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

export default Bascet;
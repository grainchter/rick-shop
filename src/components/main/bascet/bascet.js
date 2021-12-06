
import s from './bascet.module.css';

import { useEffect, useState } from 'react';

import { database } from '../../../firebase/firebase';


const Bascet = () => {


    const [data, setData] = useState({});

    const [array, setArr] = useState([]);


    useEffect(() => {

        if (localStorage.getItem("idToken") != null) {

            database.ref('/users/' + localStorage.getItem("idToken") + '/basket/').once('value', (snapshot) => {
                const db = snapshot.val();
                if (db != null) {
                    setData(Object.entries(db));
                }
            });

        } else {

            setData(JSON.parse(localStorage.getItem("data2")));

        }
    }, []);








    const check = (id) => {
        let checked = false;
        if (document.getElementById(id).checked === true) {
            document.getElementById(id).checked = checked;
            setArr(array.filter(item => item !== id));

        } else if (document.getElementById(id).checked === false) {
            document.getElementById(id).checked = !checked;
            setArr([id].concat(array));
        }

    }

console.log(array);

    const del = () => {

        if (localStorage.getItem("idToken") != null) {

            for (let i = 0; i <= array.length - 1; i++) {
                database.ref('/users/' + localStorage.getItem("idToken") + '/basket/' + array[i]).remove();
            }

            window.location.reload();


        } else {

            for (let i = 0; i <= array.length - 1; i++) {
                let items = JSON.parse(localStorage.getItem("data2"));
                items = items.filter((item) => item[1].id !== array[i]);
                localStorage.setItem("data2", JSON.stringify(items));
            }

            window.location.reload();

        }



    }


    return (

        <div className={s.container}>

            {
                Object.values(data).map(([key, { name, id, image, species, status }]) =>
                    <div className={s.wrapper} onClick={() => {

                        check(id);

                    }
                    }>

                        <div className={s.checkbox}>
                            <input type="checkbox" id={id} />
                        </div>

                        <div className={s.text}>
                            <p>{name}</p>
                            <p>{status}</p>
                            <p>{species}</p>
                            <h1>{id}</h1>
                        </div>
                        <div className={s.img}>
                            <img src={image}></img>
                        </div>
                    </div>
                )
            }

            <div className={s.buy}>
                <h1>Купить сейчас</h1>
                <button>Buy</button>
                <button onClick={() => {

                    del();

                }}>Clear</button>
            </div>


        </div>

    );
}

export default Bascet;
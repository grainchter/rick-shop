import s from './catalog.module.scss';

import { database } from '../../firebase/firebase';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getCardsResolve } from '../../store/selected';

import Card from '../card/card';
import Preloader from './preloader/preloader';

const Catalog = () => {

  const dispatch = useDispatch();

  let onPage = 16;

  const [char, setChar] = useState([]);
  const [clicked, setClicked] = useState(JSON.parse(localStorage.getItem("data2")));
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);
  const [isLoading, setLoading] = useState(false);

  dispatch(getCardsResolve(clicked));

  useEffect(() => {
    getData(1);
  }, []);

  const getData = (num) => {
    database.ref('characters').orderByChild("id").startAt(num).limitToFirst(onPage).once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let childKey = childSnapshot.key;
        setArr(arr => [...arr, childKey]);
      });
      const data = snapshot.val();
      setChar(data);
      setLoading(true);
    });
  }

  const getPrev = (num) => {
    database.ref('characters').orderByChild("id").endAt(num).limitToLast(onPage).once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let childKey = childSnapshot.key;
        setArr(arr => [...arr, childKey]);
      });
      const data = snapshot.val();
      setChar(data);
      setLoading(true);
    });
  }

  const nexPage = () => {
    setLoading(false)
    let num = parseInt(arr[arr.length - 1]);
    getData(num);
    setArr([]);
    setPage(page + 1);
  }

  const prevPage = () => {
    setLoading(false);
    let num = parseInt(arr[0]);
    getPrev(num);
    setArr([]);
    setPage(page + 1);
  }

  const buy = (id) => {

    var exist = false;

    let obj = Object.entries(char);
    const keyEl = obj.find(element =>
      element[1].id === id);

    const clicks = JSON.parse(localStorage.getItem("data2")) ?? []

    clicks.forEach(element => {
      if (keyEl[0] === element[0]) {
        exist = true;
      }
    })

    if (localStorage.getItem("idToken") != null) {
      addCharacter(keyEl);
    } else {
      clicks.push(keyEl);
      addCharacter(clicks);
    }
  };

  const addCharacter = (clicks) => {

    if (localStorage.getItem("idToken") != null) {
      database.ref('/users/' + localStorage.getItem("idToken") + '/basket/' + clicks[1].id).set(clicks[1]);
    } else {
      localStorage.setItem("data2", JSON.stringify(clicks));
      setClicked(JSON.parse(localStorage.getItem("data2")));
    }
  }

  return (
    <>
      {
        (isLoading === true) &&
        <div className={s.wrap}>
          <div className={s.app}>

            {
              Object.entries(char).map(([key, { name, id, image, species, status, price }]) =>
                <Card
                  key={id}
                  name={name}
                  image={image}
                  id={id}
                  species={species}
                  status={status}
                  price={price}
                  onCardClick={() => {

                    buy(id);

                  }
                  }
                />
              )
            }

            <div className={s.buttons}>
              <button onClick={prevPage} disabled={page === 1}>prev</button>
              <button onClick={nexPage}>next</button>
            </div>
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

export default Catalog;
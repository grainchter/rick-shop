import React, { useState } from "react";

import s from './HomePage.module.css';

import rick from './../../components/header/img/rick.png';
import pickleRick from './../../components/header/img/pickleRick.png';
import summer from './../../components/header/img/summer.png';
import jerry from './../../components/header/img/jerry.png';
import beth from './../../components/header/img/beth.png';
import HeaderMobile from "../header/Header";

const HomePageMobile = () => {

    let img = [
        {
            image: rick,
            name: "Rick"
        },
        {
            image: pickleRick,
            name: "pickleRick"
        },
        {
            image: summer,
            name: "summer"
        },
        {
            image: jerry,
            name: "jerry"
        },
        {
            image: beth,
            name: "beth"
        },
    ];

    let [index, setIndex] = useState(0);

    const [show, setShow] = useState(img[index].image);

    const nextImg = () => {
        if (index < img.length - 1) {
            setIndex(index + 1);
            setShow(img[index + 1].image);
        } else if (index = img.length - 1) {
            setIndex(0);
            setShow(img[0].image);
        }
    }

    setTimeout(() => { nextImg() }, 5000);

    return (
        <>
        <HeaderMobile />
            <div className={s.wrap} style={{ backgroundImage: "url(" + show + ")" }}>
                <div className={s.character}>
                    <h1>{img[index].name}</h1>
                </div>
            </div>

        </>
    );
}

export default HomePageMobile;
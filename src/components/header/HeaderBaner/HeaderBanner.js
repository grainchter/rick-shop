import React, { useState } from "react";

import s from './HeaderBanner.module.css';


import rick from './../img/rick.png';
import pickleRick from './../img/pickleRick.png';
import summer from './../img/summer.png';
import jerry from './../img/jerry.png';
import beth from './../img/beth.png';



const HeaderBanner = () => {

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
        <div className={s.wrap} style={{ backgroundImage: "url(" + show + ")" }}>
            <div className={s.character}>
                <h1>{img[index].name}</h1>
                <p>Jgbcfybt</p>
            </div>
            <button className={s.buttons}>Show more</button>
        </div>
    );
}

export default HeaderBanner;
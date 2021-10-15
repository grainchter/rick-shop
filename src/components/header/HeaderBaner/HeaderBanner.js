import React, { useState } from "react";
import FirebaseClass from "../../../firebase/firebase";

import s from './HeaderBanner.module.css';


import rick from './../img/rick.png';
import pickleRick from './../img/pickleRick.png';
import summer from './../img/summer.png';
import jerry from './../img/jerry.png';
import beth from './../img/beth.png';



const HeaderBanner = () => {

    let img = [rick, pickleRick, summer, jerry, beth];
    // let img = {
    //     0: bg,
    //     1: bg2,
    //     2: bg3,
    //     3: bg4,
    // }

    let [index, setIndex] = useState(0);

    const [show, setShow] = useState(img[index]);
  
    const nextImg = () => {
        if (index < img.length - 1) {
            setIndex(index + 1);
            setShow(img[index]);
        } else if (index = img.length - 1) {
            setShow(img[index]);
            setIndex(0);
        }
    }

    setTimeout(() => { nextImg() }, 1000);


    return (
        <div className={s.wrap} style={{ backgroundImage: "url(" + show + ")" }}>
            <div className={s.character}>
                <h1>{img[index]}</h1>
                <p>Jgbcfybt</p>
            </div>
            <button className={s.buttons} onClick={() => { console.log(img[index]); }}>Show more</button>
        </div>
    );
}

export default HeaderBanner;
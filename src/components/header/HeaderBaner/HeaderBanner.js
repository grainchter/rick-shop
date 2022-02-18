import s from './HeaderBanner.module.scss';
import cn from "classnames";

import React, { useEffect, useState } from "react";

import banner1 from './img/banner1.png';
import banner2 from './img/banner2.jpg';

const HeaderBanner = () => {

    const img = [
        <img key={banner1} src={banner1} alt="" />,
        <img key={banner2} src={banner2} alt="" />,
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1;
                return res;
            })
        }, 3000)
        return () => clearInterval();
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

    return (
        <div className={s.slider} key={prevImgIndex}>
            <div className={cn(s.img, s.img_prev)}
            // key={prevImgIndex}>
            >
                {img[prevImgIndex]}
            </div>
            <div className={s.img}
            // key={activeIndex}>
            >
                {img[activeIndex]}
            </div>
            <div className={cn(s.img, s.img_next)}
            // key={nextImgIndex}>
            >
                {img[nextImgIndex]}
            </div>
        </div>
    );
}

export default HeaderBanner;
import s from './Header.module.scss';

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import LoadTrue from "./loadTRUE";
import LoadFalse from "./loadFALSE";

import { getUserData } from "../../store/user";

import { ReactComponent as BagSVG } from './img/bag.svg';
import { ReactComponent as LogoSVG } from './img/logo.svg'

const Header = () => {

    const loadStatus = useSelector(getUserData);

    return (
        <div className={s.container}>
            <div className={s.logo}>
                <Link to="/">
                    <LogoSVG />
                </Link>
            </div>
            <div className={s.wrap}>
                <nav className={s.user}>
                    <ul>
                        <li>
                            <Link to="/characters">CHARACTERS</Link>
                        </li>
                        <li>
                            {loadStatus === false &&
                                <LoadFalse />
                            }

                            {loadStatus === true &&
                                <LoadTrue />
                            }
                        </li>
                        <li>
                            <Link to="/basket" className={s.bagWrap}>
                                <BagSVG />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
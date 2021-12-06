import React, { useState } from "react";
import {
    Link
} from "react-router-dom";

import { ReactComponent as LoginSVG } from './img/login.svg';
import { ReactComponent as BagSVG } from './img/bag.svg';

import s from './Header.module.css';

const Header = () => {


    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPassChange = (e) => {
        setPass(e.target.value);
    }


    const login = async () => {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        }

        const responseAuth = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5cN1cY35dyB4oeIzQCW_ZqkjwRkjtPPw', requestOptions).then(res => res.json())
        if (responseAuth.hasOwnProperty('error')) {
            console.log("Ошибка");
        } else {
            localStorage.setItem('idToken', responseAuth.localId);
            console.log("Успех");           
        }
    }


    return (
        <div className={s.wrap}>
            <div className={s.container}>
                <div className={s.menu}>
                    <nav>
                        <ul>
                            <li><Link to="/characters">Characters</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={s.logo}>
                    <Link to="/">
                        LOGO
                    </Link>
                </div>
                <div className={s.user}>
                    <nav>
                        <ul>
                            <li>
                                <div className={s.dropdown}>
                                    <a className={s.loginWrap}>
                                        <LoginSVG /></a>
                                    <div className={s.dropdownContent}>
                                        <p>Welcome to RickShop!</p>
                                        <div className={s.form_container}>
                                            <div className={s.inputs}>
                                                <div className={s.email}>
                                                    <label htmlFor="email">Email</label>
                                                    <input name="email" id="email" type="text" onChange={onEmailChange}></input>
                                                </div>
                                                <div className={s.pass}>
                                                    <label htmlFor="pass">Password</label>
                                                    <input name="pass" id="pass" type="text" onChange={onPassChange}></input>
                                                </div>
                                            </div>
                                            <div className={s.but}>
                                                <button onClick={login}>Login</button>
                                                <Link to="/reg">Register?</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        </div>
    );
}

export default Header;
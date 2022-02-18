import s from './Header.module.scss';
import cn from 'classnames';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from "react";
import { ReactComponent as LoginSVG } from './img/login.svg';
import { Link } from "react-router-dom";

import { database } from '../../firebase/firebase';

const LoadFalse = () => {

    const [emailValid, setEmailValid] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    const onEmailChange = (e) => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(e.target.value) === false) {
            setEmailValid(false);
        } else if (reg.test(e.target.value) === true) {
            setEmailValid(true);
            setEmail(e.target.value);
        }
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
            console.log("error");
            toast.error('incorrect email or password', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            localStorage.setItem('idToken', responseAuth.localId);
            localStorage.setItem('email', responseAuth.email);
            console.log(JSON.parse(localStorage.getItem("data2")));
            if (JSON.parse(localStorage.getItem("data2")) != null) {
                JSON.parse(localStorage.getItem("data2")).forEach(element => {
                    database.ref('/users/' + localStorage.getItem("idToken") + '/basket/' + element[1].id).set(element[1]);
                });
                localStorage.removeItem('data2');
            }
            window.location.reload();
        }
    }

    return (
        <>
            <ToastContainer
                theme='colored'
            />
            <div className={s.dropdown}>
                <button className={s.loginWrap}>
                    <LoginSVG />
                </button>
                <div className={s.dropdownContent}>
                    <div className={s.form_header}>
                        <p>Welcome to RickShop!</p>
                    </div>
                    <div className={s.form_container}>
                        <div className={s.inputs}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input name="email" id="email" type="text" onChange={onEmailChange} autocomplete="off" className={cn(s.email, {
                                    [s.validActive]: emailValid === true,
                                    [s.validUnactive]: emailValid === false,
                                })}></input>
                            </div>
                            <div className={s.pass}>
                                <label htmlFor="pass">Password</label>
                                <input name="pass" id="pass" type="password" onChange={onPassChange} autocomplete="off"></input>
                            </div>
                        </div>
                        <div className={s.but}>
                            <button onClick={login}>Login</button>
                            <Link to="/reg">Register?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadFalse;
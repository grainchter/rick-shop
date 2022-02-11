import s from './reg.module.scss';
import cn from 'classnames';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from "react";

const RegisterPage = () => {

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    const onNameChange = (e) => {
        setName({ name: e.target.value });
    }

    const onEmailChange = (e) => {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(e.target.value) == false) {
            setEmailValid(false);
        } else if (reg.test(e.target.value) == true) {
            setEmailValid(true);
            setEmail(e.target.value);
        }
    }

    const onPassChange = (e) => {

        const reg = /([0-9a-zA-Z!@#$%^&*]){6,}/;

        if (reg.test(e.target.value) == false) {
            setPasswordValid(false);
        } else if (reg.test(e.target.value) == true) {
            setPasswordValid(true);
            setPass(e.target.value);
        }
    }

    const register = async () => {

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        }

        const responseReg = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5cN1cY35dyB4oeIzQCW_ZqkjwRkjtPPw', requestOptions).then(res => res.json())
        if (responseReg.hasOwnProperty('error')) {
            toast.error('user with this email already exist', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success('successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            await fetch(`https://rick-shop-f42cb-default-rtdb.firebaseio.com/users/${responseReg.localId}/name.json?auth=${responseReg.idToken}`,
                {
                    method: 'PATCH',
                    body: JSON.stringify(name)
                }
            )
        }
    }

    return (
        <>
            <ToastContainer
                theme='colored'
            />
            <div className={s.wrap}>
                <div className={s.form}>
                    <div className={s.form_container}>
                        <div className={s.input_container}>
                            <div>
                                <label htmlFor="userName">userName</label>
                                <input name="userName" type="text" onChange={onNameChange} autocomplete="off"></input>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input name="email" onChange={onEmailChange} type="text" autocomplete="off" className={cn(s.email, {
                                    [s.validActive]: emailValid === true,
                                    [s.validUnactive]: emailValid === false,
                                })}></input>
                            </div>
                            <div>
                                <label htmlFor="pass">Password</label>
                                <input name="pass" onChange={onPassChange} type="password" autocomplete="off" className={cn(s.email, {
                                    [s.validActive]: passwordValid === true,
                                    [s.validUnactive]: passwordValid === false,
                                })}></input>
                            </div>
                        </div>
                    </div>
                    <div className={s.but}>
                        <button onClick={register} disabled={emailValid === false || passwordValid === false || name.name.length === 0}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
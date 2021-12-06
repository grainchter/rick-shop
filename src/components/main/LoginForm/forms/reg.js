import s from './reg.module.css';
import React, { useState } from "react";

const RegisterPage = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    const onNameChange = (e) => {
        setName({ name: e.target.value });
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPassChange = (e) => {
        setPass(e.target.value);
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
            console.log("Ошибка");
        } else {
            console.log("Успех");
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
            <div className={s.form}>
                <div className={s.form_container}>
                    <div className={s.input_container}>
                        <div>
                            <label htmlFor="userName">userName</label>
                            <input name="userName" type="text" onChange={onNameChange}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input name="email" onChange={onEmailChange} type="text"></input>
                        </div>
                        <div>
                            <label htmlFor="pass">Password</label>
                            <input name="pass" onChange={onPassChange} type="text"></input>
                        </div>
                    </div>
                </div>
                <div className={s.but}>
                    <button onClick={register}>Login</button>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
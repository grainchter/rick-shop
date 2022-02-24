import s from './LoginMobile.module.scss';

const LoginMobile = () => {

    return (
        <>
            <div className={s.wrap}>
                <div className={s.form}>
                    <div className={s.form_container}>
                        <div className={s.input_container}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input name="email" type="text" autoComplete="off"></input>
                            </div>
                            <div>
                                <label htmlFor="pass">Password</label>
                                <input name="pass" type="password" autoComplete="off"></input>
                            </div>
                        </div>
                    </div>
                    <div className={s.but}>
                        <button >Войти</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginMobile;
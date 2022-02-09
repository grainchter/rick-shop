import s from './Header.module.scss';

import { ReactComponent as UserSVG } from './img/user.svg';
import { Link } from "react-router-dom";

const LoadTrue = () => {

    const logout = () => {
        localStorage.removeItem("idToken");
        localStorage.removeItem("email");
        window.location.reload();
    }

    return (
        <>
            <div className={s.dropdown}>
                <button className={s.loginWrap}>
                    <UserSVG />
                </button>
                <div className={s.dropdownContent}>
                    <div className={s.form_header}>
                        <p>Welcome to RickShop!</p>
                    </div>
                    <div className={s.form_container}>
                        <Link to="/userpage">Личный кабинет</Link>
                        <div className={s.but}>
                            <button onClick={logout}>Выход</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadTrue;
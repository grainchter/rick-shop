import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { ReactComponent as LoginSVG } from './img/login.svg';
import { ReactComponent as LogoutSVG } from './img/logout.svg';
import { useSelector } from 'react-redux';
import { getUserData } from '../../store/user';

const HeaderMobile = () => {

    const loadStatus = useSelector(getUserData);

    return (
        <>
            <div className={s.logo}>
                <div>
                    <p>LOGO</p>
                </div>
            </div>

        </>
    );
}

export default HeaderMobile;
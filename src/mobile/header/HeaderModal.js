import {
    Link
} from "react-router-dom";
import s from './HeaderModal.module.css';

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'CHARACTERS',
        to: '/characters',
    }
];

const HeaderModal = () => {

    return (
        <>
            <div className={s.container}>
                <div className={s.menu}>
                    <ul>
                        {
                            MENU.map(({ title, to }, index) => (
                                <li key={index}>
                                    <Link to={to}>
                                        {title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </>
    );
}

export default HeaderModal;
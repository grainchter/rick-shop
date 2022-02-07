import s from './Navigation.module.scss';

import { Link } from 'react-router-dom';

const Navigation = () => {

    const MENU = [
        {
            title: 'Home',
            to: '/',
        },
        {
            title: 'Catalog',
            to: '/characters',
        },
        {
            title: 'Basket',
            to: '/basket',
        },
        {
            title: 'User Page',
            to: '/userpage',
        }
    ];

    return (
        <>
            <div className={s.wrap}>
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

        </>
    );
}

export default Navigation;
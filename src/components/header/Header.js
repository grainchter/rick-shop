import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import { ReactComponent as LoginSVG } from './img/login.svg';
import { ReactComponent as BagSVG } from './img/bag.svg';

import s from './Header.module.css';

const Header = () => {
    return (
        <Router>
            <div className={s.wrap}>
                <div className={s.container}>
                    <div className={s.menu}>
                        <nav>
                            <ul>
                                <li><Link>Characters</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={s.logo}>
                        LOGO
                    </div>
                    <div className={s.user}>
                        <nav>
                            <ul>
                                <li>
                                    <Link className={s.loginWrap}>
                                        <LoginSVG /></Link></li>
                                <li><Link className={s.bagWrap}>
                                    <BagSVG />
                                </Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Header;
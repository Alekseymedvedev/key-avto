import React from 'react';
import cls from "./navBar.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";

const NavBar = () => {
    const router = useRouter()
    return (
        <nav className={cls.nav}>
            <div className="container">
                <div className={cls.flex}>
                    <Link className={cls.link} href='/'>
                        Главная
                    </Link>
                    <Link className={cls.link} href='/contacts'>
                        Контакты
                    </Link>
                    <Link className={cls.link} href='/services'>
                        Услуги
                    </Link>
                    <Link className={cls.link} href='/about'>
                        О нас
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
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
                    <Link href='/'>
                        <a className={ router.pathname === "/" ? cls.link + " active" : cls.link }>Главная</a>
                    </Link>
                    <Link href='/contacts'>
                        <a className={router.pathname === "/contacts" ? cls.link + " active" : cls.link }>Контакты</a>
                    </Link>
                    <Link href='/services'>
                        <a className={router.pathname === "/services" ? cls.link + " active" : cls.link }>Услуги</a>
                    </Link>
                    <Link href='/about'>
                        <a className={router.pathname === "/about" ? cls.link + " active" : cls.link }>О нас</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
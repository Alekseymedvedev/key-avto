import React, {FC, useState} from 'react';
import cls from "./navBar.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";
import {routesPage} from "../../routes/routes";

interface T{
    menuActive:boolean | string
}
const NavBar:FC<T> = ({menuActive}) => {

    const router = useRouter()
    return (
        <nav className={cls.nav}>
            {

            }
            <div className="container">

                <div className={menuActive ? cls.menu +' '+ cls.active : cls.menu}>
                    {
                        routesPage.map(item =>
                            <Link
                                className={router.route === item.path ? cls.link + ' ' + cls.active : cls.link}
                                href={item.path}
                                key={item.path}
                            >
                                {item.name}
                            </Link>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

"use client"
import React, {FC} from 'react';
import cls from "./navBar.module.scss";
import Link from "next/link";
import {routesPage} from "@/routes/routes";
import { usePathname } from "next/navigation";

interface T{
    menuActive:boolean | string
}
const NavBar:FC<T> = ({menuActive}) => {
    const pathName = usePathname();
    return (
        <nav className={cls.nav}>
            {

            }
            <div className="container">

                <div className={menuActive ? cls.menu +' '+ cls.active : cls.menu}>
                    {
                        routesPage.map(item =>
                            <Link
                                 className={pathName ===item.path  ? cls.link + ' ' + cls.active : cls.link}
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
"use client"
import React, {FC, useState} from 'react';
import cls from "./navBar.module.scss";
import Link from "next/link";
import {routesPage} from "@/routes/routes";
import {usePathname} from "next/navigation";
import Image from "next/image";

interface T {
    menuActive: boolean | string
}

const NavBar: FC<T> = () => {
    const pathName = usePathname();
    const [menuActive, setMenuActive] = useState(false)
    return (
        <nav className={cls.nav}>
            <div className="container">
                <div className={cls.menuBtn}>
                    {
                        menuActive ?
                            <button onClick={() => setMenuActive(false)}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="35.4683" height="9.21254" rx="3"
                                          transform="matrix(0.705326 0.708883 -0.705326 0.708883 6.5 0.328125)" fill="#212121"/>
                                    <rect width="35.4683" height="9.21254" rx="3"
                                          transform="matrix(-0.705326 0.708883 -0.705326 -0.708883 31.5156 6.53125)"
                                          fill="#212121"/>
                                </svg>
                            </button>

                            :
                            <button onClick={() => setMenuActive(true)}>
                                <Image src={'/menuIcon.png'} alt={'menuIcon'} width={40} height={40}/>
                            </button>
                    }

                </div>
                <div className={menuActive ? cls.menu + ' ' + cls.active : cls.menu}>

                    {
                        routesPage.map(item =>
                            <Link
                                className={pathName === item.path ? cls.link + ' ' + cls.active : cls.link}
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
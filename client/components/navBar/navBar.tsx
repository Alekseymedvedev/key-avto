import React from 'react';
import cls from "./navBar.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";
import {routesPage} from "../../routes/routes";

const NavBar = () => {
    const router = useRouter()
    return (
        <nav className={cls.nav}>
            <div className="container">
                <div className={cls.flex}>
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
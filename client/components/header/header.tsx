import cls from './header.module.scss'
import Link from "next/link";
import logo from '../../images/Logo.svg'
import WorkTime from "../workTime/workTime";
import Social from "../social/social";
import Phone from "../phone/phone";
import {useRouter} from "next/router";
import Address from "../address/address";
import NavBar from "../navBar/navBar";
import React, {useState} from "react";


const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const router = useRouter()
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.inner}>
                    <button
                        onClick={() => {
                            setMenuActive(!menuActive)
                        }}
                        className={cls.menuBtn}
                    >
                        {
                            !menuActive ?
                                <svg id="icon-menu" viewBox="0 0 32 32">
                                    <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
                                </svg>
                                :
                                <svg id="icon-cross" viewBox="0 0 32 32">
                                    <path
                                        d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"></path>
                                </svg>
                        }
                    </button>
                    {
                        router.route === '/'
                            ?
                            <span className={cls.logo}>
                            КЛЮЧ-АВТО
                        </span>
                            :
                            <Link className={cls.logo} href='/'>
                                КЛЮЧ-АВТО
                            </Link>
                    }
                    <Address/>
                    <div className={cls.box}>
                        <Phone type="header"/>
                        <div className={cls.workTime}>
                            <WorkTime/>
                        </div>
                    </div>
                    <Social/>

                </div>
            </div>
            <NavBar menuActive={menuActive ? menuActive : ''}/>

        </header>
    );
};

export default Header;
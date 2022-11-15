import React, {FC} from 'react';
import cls from './header.module.scss'
import Link from "next/link";
import logo from '../../images/Logo.svg'
import wp from '../../images/icons/whatsapp.svg'
import tg from '../../images/icons/telegram.svg'
import sk from '../../images/icons/skype.svg'
import phone from '../../images/icons/call.svg'
import Image from 'next/image'
import WorkTime from "../workTime/workTime";
import Social from "../social/social";

interface T {
    Image(): FC
}

const Header = () => {
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.inner}>
                    <Link href='/'>
                        LOGO
                        {/*<a><Image className={cls.logo} src={logo} alt=""/></a>*/}
                    </Link>
                    <WorkTime/>
                    <div className={cls.phone}>
                        <a className={cls.phoneLink} href="tel:89202537813">
                            <Image src={phone} alt=""/>
                            413-78-13
                        </a>
                        <a className={cls.phoneLink} href="tel:89202537813">
                            <Image src={phone} alt=""/>
                            +7-920-253-78-13
                        </a>
                    </div>

                    {/*<Social/>*/}

                </div>
            </div>
        </header>
    );
};

export default Header;
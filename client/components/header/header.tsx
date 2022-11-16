import cls from './header.module.scss'
import Link from "next/link";
import logo from '../../images/Logo.svg'
import WorkTime from "../workTime/workTime";
import Social from "../social/social";
import Phone from "../phone/phone";
import {useRouter} from "next/router";


const Header = () => {
    const router = useRouter()
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.inner}>
                    {
                        router.route ==='/'
                            ?
                            <span className={cls.logo}>
                            КЛЮЧ-АВТО
                        </span>
                            :
                            <Link className={cls.logo} href='/'>
                                КЛЮЧ-АВТО
                            </Link>
                    }
                    <WorkTime/>

                    <div className={cls.phone}>
                        <Phone phone="+7(831)413-78-13"/>
                        <Phone phone="+7-920-253-78-13"/>
                    </div>

                    <Social/>

                </div>
            </div>
        </header>
    );
};

export default Header;
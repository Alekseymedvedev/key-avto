import cls from './header.module.scss'
// import {useState} from "react";
import Logo from "@/shared/logo/logo";
import Address from "@/shared/address/address";
import Phone from "@/shared/phone/phone";
import WorkTime from "@/shared/workTime/workTime";
import Social from "@/shared/social/social";
import NavBar from "@/entities/navBar/navBar";


const Header = () => {
    // const [menuActive, setMenuActive] = useState(false)
    return (
        <header className={cls.header}>
            <div className="container">
                <div className={cls.inner}>
                    <Logo/>
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

            <NavBar menuActive={true}/>

        </header>
    );
};

export default Header;
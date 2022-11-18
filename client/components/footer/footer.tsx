import React from 'react';
import cls from './footer.module.scss'
import img1 from "../../images/banner1.png";
import Phone from "../phone/phone";
import Form from "../form/form";
import Modal from "../modal/modal";
import Link from "next/link";
import Image from "next/image";
import {routesPage} from "../../routes/routes";
import {useRouter} from "next/router";
import Logo from "../logo/logo";

const state = [
    {id: '1', img: img1, name: "vyhlopnaya-sistema", title: 'Выхлопная система', price: 'от 4 800'},
    {id: '2', img: img1, name: "dvigatel", title: 'Двигатель', price: 'от 4 800'},
    {id: '6', img: img1, name: "zamena-zhidkostej", title: 'Замена жидкостей', price: 'от 4 800'},
    {id: '7', img: img1, name: "transmissiya", title: 'Трансмиссия', price: 'от 4 800'},
    {id: '8', img: img1, name: "kondicionery-i-otoplenie", title: 'Кондиционеры и отопление', price: 'от 4 800'},
    {id: '9', img: img1, name: "tormoznaya-sistema", title: 'Тормозная система', price: 'от 4 800'},
    {id: '10', img: img1, name: "rulevoe-upravlenie", title: 'Рулевое управление', price: 'от 4 800'},
    {id: '11', img: img1, name: "tekhnicheskoe-obsluzhivanie", title: 'Техническое обслуживание', price: 'от 4 800'},
    {id: '12', img: img1, name: "podveska", title: 'Подвеска', price: 'от 4 800'},
]
const Footer = () => {
    const router = useRouter()
    return (
        <footer className={cls.footer}>
            <div className="container">
                <div className={cls.inner}>
                    <div className={cls.box}>
                        <Logo/>

                        <Phone type="footer"/>
                        <Modal textBtn="Записаться на ТО">
                            <Form/>
                        </Modal>
                    </div>

                    <ul className={cls.menuList}>
                        {
                            routesPage.map(item =>
                                <li key={item.path}>
                                    <Link
                                        className={router.route === item.path ? cls.link + ' ' + cls.active : cls.link}
                                        href={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    <ul className={cls.list}>
                        {
                            state.map(item =>
                                <li key={item.id}>
                                    <Link className={cls.link} href={`/services/` + item.name}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

"use client"
import React from 'react';
import cls from './footer.module.scss'
import Modal from "@/entities/modal/modal";
import Logo from "@/shared/logo/logo";
import Phone from "@/shared/phone/phone";
import Form from "@/entities/form/form";
import {routesPage} from "@/routes/routes";
import Link from "next/link";
import {usePathname} from "next/navigation";


const state = [
    {id: '1',  name: "vyhlopnaya-sistema", title: 'Выхлопная система', price: 'от 4 800'},
    {id: '2',  name: "dvigatel", title: 'Двигатель', price: 'от 4 800'},
    {id: '6',  name: "zamena-zhidkostej", title: 'Замена жидкостей', price: 'от 4 800'},
    {id: '7',  name: "transmissiya", title: 'Трансмиссия', price: 'от 4 800'},
    {id: '8',  name: "kondicionery-i-otoplenie", title: 'Кондиционеры и отопление', price: 'от 4 800'},
    {id: '9',  name: "tormoznaya-sistema", title: 'Тормозная система', price: 'от 4 800'},
    {id: '10',  name: "rulevoe-upravlenie", title: 'Рулевое управление', price: 'от 4 800'},
    {id: '11',  name: "tekhnicheskoe-obsluzhivanie", title: 'Техническое обслуживание', price: 'от 4 800'},
    {id: '12',  name: "podveska", title: 'Подвеска', price: 'от 4 800'},
]
const Footer = () => {
    const pathName = usePathname();
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
                                         className={pathName === item.path ? cls.link + ' ' + cls.active : cls.link}
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
                                    <Link className={cls.link} href={`/categories/` + item.name}>
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
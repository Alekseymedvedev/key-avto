import React from 'react';
import img1 from "../../images/banner1.png";
import Image from "next/image";
import cls from "./categoriesList.module.scss";
import Link from "next/link";


const state = [
    {id: '1', img: img1, name: 'Выхлопная система', price: 'от 4 800'},
    {id: '2', img: img1, name: 'Двигатель', price: 'от 4 800'},
    // {id: '3', img: img1, name: 'Электрооборудование', price: 'от 4 800'},
    // {id: '4', img: img1, name: 'Шиномонтаж', price: 'от 4 800'},
    // {id: '5', img: img1, name: 'Диагностика', price: 'от 4 800'},
    {id: '6', img: img1, name: 'Замена жидкостей', price: 'от 4 800'},
    {id: '7', img: img1, name: 'Трансмиссия', price: 'от 4 800'},
    {id: '8', img: img1, name: 'Кондиционеры и отопление', price: 'от 4 800'},
    {id: '9', img: img1, name: 'Тормозная система', price: 'от 4 800'},
    {id: '10', img: img1, name: 'Рулевое управление', price: 'от 4 800'},
    {id: '11', img: img1, name: 'Техническое обслуживание', price: 'от 4 800'},
    {id: '12', img: img1, name: 'Подвеска', price: 'от 4 800'},
]

const CategoriesList = () => {
    return (
        <section className="_vrm">
            <div className="container">
                <h2>Наши услуги</h2>
                <ul className={cls.list}>
                    {
                        state.map(item =>
                            <Link key={item.id} href={`/services/` + item.name}>
                                <li>
                                    <a className={cls.item}>
                                        <div className={cls.box}>
                                            <div className={cls.title}>{item.name}</div>
                                            <div className={cls.price}>{item.price}</div>
                                        </div>
                                        <div className={cls.img}>
                                            <Image width={135} height={100} src={item.img}/>
                                        </div>
                                    </a>
                                </li>
                            </Link>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export default CategoriesList;
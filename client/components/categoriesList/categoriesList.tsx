import React from 'react';
import img1 from "../../images/banner1.png";
import Image from "next/image";
import cls from "./categoriesList.module.scss";
import Link from "next/link";



const state = [
    {id: '1', img: img1,  name:"vyhlopnaya-sistema", title: 'Выхлопная система', price: 'от 4 800'},
    {id: '2', img: img1, name:"dvigatel", title: 'Двигатель', price: 'от 4 800'},
    {id: '6', img: img1, name:"zamena-zhidkostej", title: 'Замена жидкостей', price: 'от 4 800'},
    {id: '7', img: img1, name:"transmissiya", title: 'Трансмиссия', price: 'от 4 800'},
    {id: '8', img: img1, name:"kondicionery-i-otoplenie", title: 'Кондиционеры и отопление', price: 'от 4 800'},
    {id: '9', img: img1, name:"tormoznaya-sistema", title: 'Тормозная система', price: 'от 4 800'},
    {id: '10', img: img1, name:"rulevoe-upravlenie", title: 'Рулевое управление', price: 'от 4 800'},
    {id: '11', img: img1, name:"tekhnicheskoe-obsluzhivanie", title: 'Техническое обслуживание', price: 'от 4 800'},
    {id: '12', img: img1, name:"podveska", title: 'Подвеска', price: 'от 4 800'},
]

const CategoriesList = () => {
    return (
        <section className="_vrm">
            <div className="container">
                <h2>Наши услуги </h2>
                <ul className={cls.list}>
                    {
                        state.map(item =>
                            <li key={item.id}>

                                <Link className={cls.item} href={`/services/` + item.name}>
                                    <div className={cls.box}>
                                        <div className={cls.title}>{item.title}</div>
                                        {/*<div className={cls.price}>{item.name}</div>*/}
                                    </div>
                                    <div className={cls.img}>
                                        <Image width={135} height={100} src={item.img} alt={item.name} placeholder="blur"/>
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export default CategoriesList;
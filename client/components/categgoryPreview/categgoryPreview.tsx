import React, {FC} from 'react';
import Category from "../category/category";
import cls from './categgoryPreview.module.scss'
import img1 from '../../images/banner1.png'
import Image from "next/image";
import Social from "../social/social";
import Button from "../UI/button/button";

const state = [
    {id: 1, img: img1, name: "Замена  гофры", price: 100, time: 20},
    {id: 2, img: img1, name: "Замена  гофры", price: 100, time: 20},
    {id: 3, img: img1, name: "Замена  гофры", price: 100, time: 20},
    {id: 4, img: img1, name: "Замена  гофры", price: 100, time: 20},
    {id: 5, img: img1, name: "Замена  гофры", price: 100, time: 20},
]
interface T {
    name:any
}
const CateggoryPreview:FC<T> = ({name}) => {
    return (

        <section className="_vrm">
            <div className={cls.header}>
                <Image src={img1}/>
                <div className={cls.text}>
                    <div>
                        <p>
                            <strong>"KEY-AVTO"</strong> осуществляет услуги по ремонту категории "{name}" - в г. Нижний новгород.
                            Ниже представлен прайс на некотрые услуги нашего автосервиса.
                            Для того чтобы узнать стоимость ремонта конкретного автомобиля в автосервисе <strong>"KEY-AVTO"</strong> вы можете
                            оставить заявку или
                        </p>
                        <Social/>
                        <Button>Оставить заявку</Button>
                    </div>
                </div>
            </div>
            <h2>Наши цены</h2>
            <table className={cls.table}>
                <thead>
                <tr>
                    <th>Название работы</th>
                    <th>Требует времени</th>
                    <th>Цена руб.</th>
                    <th>Время</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.map(item =>
                        <Category key={item.id} props={item}/>
                    )
                }
                </tbody>
            </table>
        </section>
    );
};

export default CateggoryPreview;
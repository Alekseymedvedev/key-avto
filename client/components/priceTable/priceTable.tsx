import React from 'react';
import cls from './priceTable.module.scss'
import Modal from "../modal/modal";
import Form from "../form/form";
import img from "../../images/banner1.png"
import Image from "next/image";

const state = [
    {id: 1, img: img, name: 'Масло в двигателе - замена', price: '500', time: 30},
    {id: 2, img: img, name: 'Масло в двигателе - замена', price: '500', time: 30},
    {id: 3, img: img, name: 'Масло в двигателе - замена', price: '500', time: 30},
    {id: 4, img: img, name: 'Масло в двигателе - замена', price: '500', time: 30},
]


const PriceTable = () => {
    return (
        <section className="_vrm">
            <div className="container">
                <h2>ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ</h2>
                <div className={cls.tableContainer}>
                    <table className={cls.table}>
                        <thead>
                        <tr>
                            <th>Название работы</th>
                            <th>Цена руб.</th>
                            <th>Требует времени</th>
                            <th>Запись</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            state.map(item=>
                                <tr key={item.id}>
                                    <td className={cls.name}>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={item.img}
                                            alt={item.name}
                                            placeholder="blur"
                                        />
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.time}</td>
                                    <td>
                                        <Modal textBtn="Записаться на ТО">
                                            <Form/>
                                        </Modal>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PriceTable;
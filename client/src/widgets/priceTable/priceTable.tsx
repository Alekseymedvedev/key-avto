import React, {FC} from 'react';
import cls from './priceTable.module.scss'
import {worksCategoriesType} from "@/types/types";
import Modal from "@/entities/modal/modal";
import Form from "@/entities/form/form";
import Image from "next/image";


interface IType{
    heading: string
    worksCategories:worksCategoriesType[]
}
export default async function PriceTable ({heading,worksCategories}:IType)  {
    return (
        <section className="_vrm">
            <div className="container">
                <h2>{heading}</h2>
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
                            worksCategories.length>0 && worksCategories?.map(item=>
                                <tr key={item.id}>
                                    <td className={cls.name}>{item.name}</td>
                                    <td>от {item.price}₽</td>
                                    <td>от {item.time} мин.</td>
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


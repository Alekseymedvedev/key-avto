import React, {FC} from 'react';
import cls from './priceTable.module.scss'
import Modal from "../modal/modal";
import Form from "../form/form";
import Image from "next/image";
import {worksCategoriesType} from "../../types/categoryType";
import {BASE_URL} from "../../API/API";


interface T{
    heading: string
    worksCategories?: worksCategoriesType[]
}

const PriceTable:FC<T> = ({heading,worksCategories}) => {
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
                            worksCategories ?
                                worksCategories.map(item=>
                                <tr key={item.id}>
                                    <td className={cls.name}>
                                        <Image
                                            width={120}
                                            height={80}
                                            src={BASE_URL+item.image}
                                            alt={item.name}
                                            placeholder="blur"
                                            blurDataURL={BASE_URL+item.image}
                                        />
                                        {item.name}
                                    </td>
                                    <td>от {item.price}</td>
                                    <td>от {item.time}</td>
                                    <td>
                                        <Modal textBtn="Записаться на ТО">
                                            <Form/>
                                        </Modal>
                                    </td>
                                </tr>
                            ):
                                ''
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PriceTable;
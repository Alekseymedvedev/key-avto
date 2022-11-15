import React from 'react';
import Button from "../UI/button/button";
import cls from './priceTable.module.scss'

const PriceTable = () => {
    return (
        <section className="_vrm">
            <div className="container">
                <h2>ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ</h2>
                <table className={cls.table}>
                    <thead>
                    <tr className="to__table-head" data-v-845870f2="">
                        <th className="org" data-v-845870f2="">Название работы</th>
                        <th className="lg" data-v-845870f2="">Требует времени</th>
                        <th className="dg" data-v-845870f2="">Цена руб.</th>
                        <th className="last-cl lg" data-v-845870f2=""></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-v-845870f2="">Масло в двигателе - замена</td>
                        <td data-v-845870f2="">40 минут</td>
                        <td data-v-845870f2="">ОТ 800 руб.</td>
                        <td className="last-cl">
                            <Button>Записаться на ТО</Button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PriceTable;
import React, {FC} from 'react';
import img1 from "../../images/banner1.png";
import Image from "next/image";
import cls from "./categoriesList.module.scss";
import Link from "next/link";
import {categoryType} from "../../types/categoryType";



interface T{
    categories:categoryType[]
}
const CategoriesList:FC<T> = ({categories}) => {
    return (
        <section className="_vrm">
            <div className="container">
                <h2>Наши услуги </h2>
                <ul className={cls.list}>
                    {
                        categories.map(item =>
                            <li key={item.id}>

                                <Link className={cls.item} href={`/categories/` + item.name}>
                                    <div className={cls.box}>
                                        <div className={cls.title}>{item.title}</div>
                                        {/*<div className={cls.price}>{item.name}</div>*/}
                                    </div>
                                    <div className={cls.img}>
                                        <Image width={135} height={100} src={img1} alt={''} placeholder="blur"/>
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
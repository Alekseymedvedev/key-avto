import React, {FC} from 'react';
import Image from "next/image";
import cls from "./categoriesList.module.scss";
import Link from "next/link";



interface T{
    categories?:any
}
const CategoriesList:FC<T> = ({categories}) => {

    return (
        <section className="_vrm">
            <div className="container">
                <h2 className={'_vrm'}>Наши услуги </h2>
                <ul className={cls.list}>
                    {
                        categories?.length && categories.map((item:any) =>
                            <li key={item.id}>
                                <Link className={cls.item} href={`/categories/` + item.name} aria-label={`ссылка на категорию ${item.title}`}>
                                    <div className={cls.box}>
                                        <div className={cls.title}>{item.title}</div>
                                    </div>
                                    <div className={cls.img}>
                                        <Image width={135} height={100} src={`/${item.image}` } alt={''} />
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
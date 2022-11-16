import React from 'react';
import img1 from  "../../images/brand/toyota.png";
import img2 from  "../../images/brand/opel.png";
import img3 from  "../../images/brand/chevrolet.png";
import img4 from  "../../images/brand/ford.png";
import img5 from  "../../images/brand/kia.png";
import img6 from  "../../images/brand/hyundai.png";
import img7 from  "../../images/brand/mazda.png";
import img8 from  "../../images/brand/mitsubishi.png";
import img9 from  "../../images/brand/nissan.png";
import cls from './brandList.module.scss'
import Image from "next/image";
import Link from "next/link";

const state = [
    {id: '1', img: img1, name:'toyota'},
    {id: '2', img: img2, name:'opel'},
    {id: '3', img: img3, name:'chevrolet'},
    {id: '4', img: img4, name:'ford'},
    {id: '5', img: img5, name:'kia'},
    {id: '6', img: img6, name:'hyundai'},
    {id: '7', img: img7, name:'mazda'},
    {id: '8', img: img8, name:'mitsubishi'},
    {id: '9', img: img9, name:'nissan'},
]
const BrandList = () => {
    return (
        <section className={cls.brandList + " _vrm"}>
            <div className="container">
                <h2>Мы обслуживаем</h2>
                <ul className={cls.list}>
                    {
                        state.map(item=>
                            <li key={item.id} className={cls.item}>
                                <Link  href={`/brand/`+item.id}>
                                    <Image src={item.img} alt={item.name}/>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export default BrandList;
import React, {FC} from 'react';
import Image from "next/image";
import cls from './category.module.scss'


interface T {

    props: {
        id: any
        img: any
        name:string
        price: number | string
        time: number | string
    }

}

const Category: FC<T> = ({props}) => {
    return (
        <tr>
            <td className="">
                <Image width={140} height={80} src={props.img}/>
            </td>
            <td className={cls.name}>{props.name}</td>
            <td className="">{props.time}</td>
            <td className="">{props.price}</td>
        </tr>
    );
};

export default Category;
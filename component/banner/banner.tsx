import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper";
import img1 from '../../images/banner1.png'
import Image from 'next/image'
import cls from './banner.module.scss'
import Form from "../form/form";
import "swiper/css/pagination";

const state = [
    {
        id: '1',
        img: img1,
        title: 'ТО + запчасти  по СТАРОЙ ЦЕНЕ',
        text: ' Запчасти по старой цене только при прохождении то '
    },
    {id: '2', img: img1, title: 'На шиномонтаж по СТАРОЙ ЦЕНЕ', text: 'Только до 23.10'},
    {id: '3', img: img1, title: 'title', text: 'text'},
    {id: '4', img: img1, title: 'title', text: 'text'},
    {id: '5', img: img1, title: 'title', text: 'text'},
    {id: '6', img: img1, title: 'title', text: 'text'},
]
interface State {
    textmask: string;
    numberformat: string;
}
const Banner = () => {
    // const [values, setValues] = React.useState<State>({
    //     textmask: '(100) 000-0000',
    //     numberformat: '1320',
    // });
    //
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //     });
    // };

    return (
        <section className="_vrm">
            <div className="container">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        state.map(item =>
                            <SwiperSlide key={item.id}>
                                <div className={cls.inner}>
                                    <div className={cls.box}>
                                        <h1 className={cls.title}>{item.title}</h1>
                                        <div className={cls.text}>{item.text}</div>
                                        <Form/>
                                    </div>
                                    <Image src={item.img}/>
                                </div>
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </div>
            {/*<Modal visible={modal} setVisible={setModal}>*/}
            {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis delectus dolore eius eveniet excepturi facilis in ipsam, ipsum laudantium maiores nam nobis nostrum quia quidem quos repudiandae tempore velit.*/}
            {/*</Modal>*/}
        </section>
    );
};

export default Banner;
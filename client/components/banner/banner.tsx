import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper";
import img1 from '../../images/banner1.png'
import Image from 'next/image'
import cls from './banner.module.scss'
import Form from "../form/form";
import Modal from "../modal/modal";
import React from "react";

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


    return (
        <section className={cls.banner +" _vrm"}>
            <div className="container">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        state.map(item =>
                            <SwiperSlide key={item.id}>
                                <div className={cls.inner}>
                                    <div className={cls.box}>
                                        <h1 className={cls.title}>{item.title}</h1>
                                        <div className={cls.text}>{item.text}</div>
                                        <Modal textBtn="Узнать больше">
                                            <Form/>
                                        </Modal>
                                    </div>
                                    <div className={cls.boxImg}>
                                    <Image
                                        src={item.img}
                                        alt="banner"
                                        fill
                                        placeholder="blur"
                                        // sizes="(max-width: 768px) 300px,
                                        //   (max-width: 1200px) 600px"
                                    />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Banner;
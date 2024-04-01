"use client"

import img1 from '@/../public/banner1.png'
import Image from 'next/image'
import cls from './banner.module.scss'
import React from "react";
import Modal from "@/entities/modal/modal";
import Form from "@/entities/form/form";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const state = [
    {
        id: '1',
        img: img1,
        title: 'Замена масла Опель Астра',
        price:'5800р',
        text: 'В стоимсоть входит масло GM, фильтр масляный, работа по замене масла'
    },

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
                                        <h1 className={cls.title}>
                                            {item.title}
                                            <span> {item.price}</span>
                                        </h1>
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
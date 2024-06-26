"use client"

import Image from 'next/image'
import cls from './banner.module.scss'
import React, {FC} from "react";
import Modal from "@/entities/modal/modal";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import {bannerType} from "@/types/types";


interface IType {
    data: bannerType[];
}

const Banner: FC<IType> = ({data}) => {


    return (
        <section className={cls.banner + " _vrm"}>
            <div className="container">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        data.map(item =>
                            <SwiperSlide key={item.id}>
                                <div className={cls.inner}>
                                    <div className={cls.box}>
                                        <h1 className={cls.title}>
                                            {item.title}
                                            <span> {item.price}₽</span>
                                        </h1>
                                        <div className={cls.text}>{item.description}</div>
                                        {/*<Modal textBtn="Узнать больше">*/}
                                        {/*    <Form/>*/}
                                        {/*</Modal>*/}
                                    </div>
                                    <div className={cls.boxImg}>
                                        <Image
                                            src={`/${item.image}`}
                                            alt="banner"
                                            width={570}
                                            height={420}
                                            priority
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
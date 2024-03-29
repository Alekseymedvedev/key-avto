"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination} from "swiper";
import cls from './brandList.module.scss'
import Image from "next/image";
import Link from "next/link";
import {FC} from "react";
import {brandType} from "@/types/types";



interface T{
    brand?:brandType[]
}
const BrandList:FC<T> = ({brand}) => {
    return (
        <section className={cls.brandList + " _vrm"}>
            <div className="container">
                <h2>Мы обслуживаем</h2>
                <Swiper
                    className={cls.sliderContainer}
                    slidesPerView={3}
                    breakpoints={{
                        560: {
                            slidesPerView: 4,
                        },
                        780: {
                            slidesPerView: 5,
                        },
                        980: {
                            slidesPerView: 7,
                        },
                        1024: {
                            slidesPerView: 9,
                        },
                    }}
                    pagination={true}
                    modules={[Pagination]}
                >
                    {
                        brand?.length &&  brand.map(item =>
                            <SwiperSlide key={item?.id} className={cls.item}>
                                <Link href={'car-brand/' + item?.name} className={cls.link}>
                                    <Image
                                        width={70}
                                        height={70}
                                        src={`/${item?.image}`}
                                        alt={item?.name}
                                    />
                                </Link>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default BrandList;
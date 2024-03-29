import React from "react";
import Image from "next/image";
import {Metadata} from "next";

interface IProps {
    params: { id: string }
}

async function getData(id: string) {
    const response = await fetch(`${process.env.BASE_URL}car-brand/${id}`)
    return response.json()
}

export async function generateMetadata({params: {id}}: IProps): Promise<Metadata> {
    const brand = await getData(id)
    return {
        title:`Статья о марке ${brand.name}`
    }
}

export default async function CarBrand({params}: any) {
    const brand = await getData(params.id)

    console.log(brand)
    return (
        <section className="_vrm">
            <div className="container">
                <h1>Ремонт <span>{brand.name}</span></h1>
                <div className="grid _vrm">
                    <div className="carBrandImg">
                        <Image
                            fill
                            src={`/${brand.image}`}
                            alt="banner"
                        />
                    </div>
                    <p>
                        Одной из самых популярных моделей у данного производителя является Астра. Автомобиль
                        выпускается с 1991
                        года, активно продается в ряде стран, включая Россию. Astra полюбился многим за низкую
                        стоимость
                        неплохое качество, но как большинсво бюджетных авто, часто заезжает на ремонт.
                    </p>
                </div>
                <div className="flex-c">
                    <h2>О марке</h2>
                    {/*{*/}
                    {/*    state && state.map(item=>*/}
                    {/*        item.text ?*/}
                    {/*            <p key={item.id}>{item.text}</p>*/}
                    {/*            :''*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
            </div>
        </section>
    );
};

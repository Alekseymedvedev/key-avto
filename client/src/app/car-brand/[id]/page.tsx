import React from "react";
import Image from "next/image";
import {Metadata} from "next";

interface IProps {
    params: { id: string }
}

async function getData(id: string) {
    const response = await fetch(`${process.env.BASE_URL}api/car-brand/${id}`)
    return response.json()
}

export async function generateMetadata({params: {id}}: IProps): Promise<Metadata> {
    const brand = await getData(id)
    return {
        title: `Ремонт ${brand?.name}: Как поддерживать своего надежного спутника на дорогах`,
        description: `Статья о ремонте автомобилей марки ${brand?.name}. Узнайте как поддерживать свой ${brand?.name} в отличной рабочей форме.`,
        keywords: `${brand?.name}, ремонт ${brand?.name}, обслуживание ${brand?.name}, автосервис, техническое обслуживание ${brand?.name}`,
        openGraph: {
            title: `Ремонт ${brand.name}: Как поддерживать своего надежного спутника на дорогах`,
            description: `Статья о ремонте автомобилей марки ${brand?.name}. Узнайте как поддерживать свой ${brand?.name} в отличной рабочей форме.`,
            url: `${process.env.BASE_URL}car-brand/${brand?.name}`,
            images: `${process.env.BASE_URL}${brand?.image}`
        }
    }
}

export default async function CarBrand({params}: any) {
    const brand = await getData(params.id)

    return (
        <section className="_vrm">
            <div className="container">
                <h1>Ремонт <span>{brand.name}</span></h1>
                <div className="grid _vrm">
                    <div className="carBrandImg">
                        <Image
                            fill
                            src={`/images/${brand.image}`}
                            alt="banner"
                        />
                    </div>
                    <p>{brand.description}</p>
                </div>
                <div className="flex-c">
                    <h2>О марке</h2>
                    <div>
                        {
                            brand.article && brand.article.split('\n').map((item: any) =>
                                item && <p key={item}>{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

import {Metadata} from "next";
import PriceTable from "@/widgets/priceTable/priceTable";
import Image from "next/image";
import React from "react";

interface IParams {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const response = await fetch(`${process.env.BASE_URL}api/categories/${id}`)
     return response.json()
}
export async function generateMetadata({params: {id}}: IParams): Promise<Metadata> {
    const category = await getData(id)
    return {
        title: `Автосервис "КЛЮЧ-АВТО": Надежный партнер по ремонту и обслуживанию автомобилей`,
        description: `Сотрудники автосервиса "КЛЮЧ-АВТО" уже более 10 лет работают в сфере ремонта и технического обслуживания автомобилей различных марок и моделей. "КЛЮЧ-АВТО" пользуется заслуженной репутацией надежного, ответственного и профессионального партнера. Наши услуги включают диагностику неисправностей, регламентный и срочный ремонт, комплексное ТО и многое другое. Мы выполняем все работы эффективно, профессионально и в оговоренные сроки.`,
        keywords: `автосервис, КЛЮЧ-АВТО, ремонт автомобилей, обслуживание, техническое обслуживание, диагностика неисправностей, профессиональный автосервис, ${category.title}`,
        openGraph:{
            title: `Автосервис КЛЮЧ-АВТО: Надежный партнер по ремонту и обслуживанию автомобилей`,
            description: `Сотрудники автосервиса КЛЮЧ-АВТО уже более 10 лет работают в сфере ремонта и технического обслуживания автомобилей различных марок и моделей. Узнайте больше о наших услугах и профессиональном подходе к работе.`,
            url:`${process.env.BASE_URL}api/categories/${id}`,
            images:`${process.env.BASE_URL}${category.image}`
        }
    }
}

export default async function Category({params: {id}}: IParams) {
    const category = await getData(id)
    return (
        <>
            <section className="categorySection _vrm">
                <div className="container">
                    <h1>{category?.title}</h1>
                    <div className="grid">
                        <div className="categoyImg">
                            <Image
                                fill
                                src={`/${category?.image}`}
                                alt="banner"
                            />
                        </div>
                        <div className="flex-c">
                            <p>
                                Сотрудники автосервиса "КЛЮЧ-АВТО" уже более 10 лет работают в сфере ремонта и
                                технического
                                обслуживания автомобилей различных марок и моделей.
                                "КЛЮЧ-АВТО" пользуется заслуженной репутацией надежного, надежного и ответственного
                                партнера.
                                в наших услугах - диагностика неисправностей, регламентный и срочный ремонт, комплексное
                                ТО и т.д.
                                Мы выполняем свои обязательства эффективно, профессионально и в срок.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <PriceTable worksCategories={category?.categoriesWork} heading="Наши работы"/>
        </>
    );
}
import React from "react";
import Image from "next/image";
import {Metadata} from "next";

interface IProps {
    params: { id: string }
}

// async function getData(id: string) {
//     const response = await fetch(`${process.env.BASE_URL}car-brand/${id}`)
//     return response.json()
// }
//
// export async function generateMetadata({params: {id}}: IProps): Promise<Metadata> {
//     const brand = await getData(id)
//     return {
//         title: `Ремонт ${brand?.name}: Как поддерживать своего надежного спутника на дорогах`,
//         description: `Статья о ремонте автомобилей марки ${brand?.name}. Узнайте как поддерживать свой ${brand?.name} в отличной рабочей форме.`,
//         keywords: `${brand?.name}, ремонт ${brand?.name}, обслуживание ${brand?.name}, автосервис, техническое обслуживание ${brand?.name}`,
//         openGraph: {
//             title: `Ремонт ${brand.name}: Как поддерживать своего надежного спутника на дорогах`,
//             description: `Статья о ремонте автомобилей марки ${brand?.name}. Узнайте как поддерживать свой ${brand?.name} в отличной рабочей форме.`,
//             url: `${process.env.BASE_URL}car-brand/${brand?.name}`,
//             images: `/${brand?.image}`
//         }
//     }
// }

export default async function CarBrand() {
    // const brand = await getData(params.id)

    return (
        <section className="_vrm">
            <div className="container">
                <h1>О нас</h1>
                <div className="grid">
                    <div className="aboutImg">
                        {/*<Image*/}
                        {/*    fill*/}
                        {/*    src={img}*/}
                        {/*    alt="banner"*/}
                        {/*    placeholder="blur"*/}
                        {/*/>*/}
                    </div>
                    <div className="flex-c">
                        <p>
                            Сотрудники автосервиса "КДЮЧ-АВТО" уже более 10 лет работают в сфере ремонта и
                            технического
                            обслуживания автомобилей различных марок и моделей.
                        </p>
                        <p>
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
    );
};

import PriceTable from "../../components/priceTable/priceTable";
import MainLayout from "../../layout/mainLayout";
import Image from "next/image";
import React, {FC} from "react";
import {useRouter} from "next/router";
import {BASE_URL} from "../../API/API";


// export async function getServerSideProps(context:any) {
//     const id = context.query.id
//     const res = await fetch(BASE_URL+'categories/'+id)
//     const data = await res.json()
//     return {
//         props: {category:data},
//     }
// }


interface T{
    category?:any

}
const Category:FC<T> = ({category}) => {
    return (
        <MainLayout title={category?.title}>
            <section className="categorySection _vrm">
                <div className="container">
                    <h1>{category?.title}</h1>
                    <div className="grid">
                        <div className="categoyImg">
                            <Image
                                fill
                                src={BASE_URL+category?.image}
                                alt="banner"
                                // placeholder="blur"
                            />
                        </div>
                        <div className="flex-c">
                            <p>
                                Сотрудники автосервиса "КЛЮЧ-АВТО" уже более 10 лет работают в сфере ремонта и
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
            <PriceTable worksCategories={category?.worksCategories} heading="Наши работы"/>
        </MainLayout>
    );
};

export default Category;
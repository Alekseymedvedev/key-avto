import PriceTable from "../../components/priceTable/priceTable";
import MainLayout from "../../layout/mainLayout";
import Image from "next/image";
import img from "../../images/banner1.png";
import React from "react";
import {useRouter} from "next/router";


const Category = () => {
    const route= useRouter()
    return (
        <MainLayout title="Category">
            <section className="categorySection _vrm">
                <div className="container">
                    <h1>{route.query.id}</h1>
                    <div className="grid">
                        <div className="categoyImg">
                            <Image
                                fill
                                src={img}
                                alt="banner"
                                placeholder="blur"
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
            <PriceTable heading="Наши работы"/>
        </MainLayout>
    );
};

export default Category;
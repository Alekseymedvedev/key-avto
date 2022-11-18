import PriceTable from "../../components/priceTable/priceTable";
import MainLayot from "../../layot/mainLayot";
import Image from "next/image";
import img from "../../images/banner1.png";
import React from "react";
import {useRouter} from "next/router";


const Category = () => {
    const route= useRouter()
    console.log(route)
    return (
        <MainLayot title="Category">
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
            <PriceTable heading="Наши работы"/>
        </MainLayot>
    );
};

export default Category;
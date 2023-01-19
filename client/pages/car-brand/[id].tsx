import MainLayout from "../../layout/mainLayout";
import React from "react";
import Image from "next/image";
import img from "../../images/banner1.png";



const carBrand = () => {
    return (
        <MainLayout title="О марке автомобиля">
            <section className="_vrm">
                <div className="container">
                    <h1>Ремонт OPEL</h1>
                    <div className="grid _vrm">
                        <div className="carBrandImg">
                            <Image
                                fill
                                src={img}
                                alt="banner"
                                placeholder="blur"
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
                        <h2>Типичные неисправности Опеля</h2>
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
        </MainLayout>
    );
};

export default carBrand;
import React, {FC} from 'react';
import MainLayout from "../layout/mainLayout";
import Address from "../components/address/address";
import Phone from "../components/phone/phone";
import WorkTime from "../components/workTime/workTime";
import MapSection from "../components/mapSection/mapSection";


const Contacts = () => {
    return (

        <MainLayout title="Контакты">
            <section className="container">
                <div className="grid">
                    <div className="flex-c">
                        <h1>Контакты</h1>
                        <Address heading="Наш адрес"/>
                        <Phone heading="Наш телефон"/>
                        <WorkTime heading={true}/>
                    </div>
                    <MapSection/>
                </div>
            </section>
        </MainLayout>
    );
};

export default Contacts;
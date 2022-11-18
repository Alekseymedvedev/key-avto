import React, {FC} from 'react';
import MainLayot from "../layot/mainLayot";
import Address from "../components/address/address";
import Phone from "../components/phone/phone";
import WorkTime from "../components/workTime/workTime";
import MapSection from "../components/mapSection/mapSection";


const Contacts = () => {
    return (

        <MainLayot title="Контакты">
            <section className="container">
                <div className="grid">
                    <div className="flex">
                        <h1>Контакты</h1>
                        <Address heading="Наш адрес"/>
                        <Phone heading="Наш телефон"/>
                        <WorkTime heading={true}/>
                    </div>
                    <MapSection/>
                </div>
            </section>
        </MainLayot>
    );
};

export default Contacts;
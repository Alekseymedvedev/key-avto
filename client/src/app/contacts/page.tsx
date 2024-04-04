import Address from "@/shared/address/address";
import Phone from "@/shared/phone/phone";
import WorkTime from "@/shared/workTime/workTime";
import MapSection from "@/widgets/mapSection/mapSection";


export default async function Contacts() {
    return (
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
    );
}
import React, {FC} from 'react';
import cls from './contactsPage.module.scss'
import WorkTime from "../workTime/workTime";
import img1 from "../../images/banner1.png";
import Image from "next/image";
interface T {
    children?: any
}

const ContactsPage: FC<T> = ({children}) => {
    return (
        <section>
            <div className="container">
                <h1>Контакты</h1>
                <Image width={460} height={258} src={img1}/>
                Автосервис "КЛЮЧ-АВТО"
<WorkTime/>
                ул. Щербакова, 31к3
                alekse-medvedev@mail.ru
            </div>
        </section>
    );
};

export default ContactsPage;
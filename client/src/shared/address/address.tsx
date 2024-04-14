import cls from './address.module.scss'
import {FC} from "react";

interface T{
    heading?: string
}


const Address:FC<T> = ({heading}) => {
    return (
        <div>
            {
                heading && <div className={cls.heading}>{heading}</div>
            }

            <a className={cls.address}
               aria-label={'ссылка на карту'}
               href="https://yandex.ru/maps/47/nizhny-novgorod/house/ulitsa_shcherbakova_31k3/YEoYfgBoQEcHQFtsfX90cn9rYQ==/?ll=43.885156%2C56.352258&z=15.85"
            >
                <svg id="icon-location" viewBox="0 0 32 32" style={{width: 30, height: 30}}>
                    <path
                        d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
                </svg>
                <div className={cls.box}>
                    <span className={cls.city}>г. Нижний Новгород</span>
                    <span className={cls.street}>ул. Щербакова, 31к3</span>
                </div>
            </a>
        </div>
    );
};

export default Address;
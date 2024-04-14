import {FC} from 'react';
import cls from './phone.module.scss'

interface T {
    type?: string
    heading?: string
}

const Phone: FC<T> = ({type, heading}) => {
    return (
        <div className={cls.phone}>
            {
                heading && <div className={cls.heading}>{heading}</div>
            }
            <div className={cls.inner}>
                <a className={cls.icon} href="tel:89202537813"aria-label={'позвонить на номер 89202537813'}>
                    <svg id="icon-phone" viewBox="0 0 32 32">
                        <path
                            d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                    </svg>
                </a>
                <div className={cls.box}>
                    <a className={!type ? cls.phoneLink : cls.phoneLink + ' ' + cls.phoneLinkHeader}
                       href="tel:89202537813" aria-label={'позвонить на номер +7(831)413-78-13'}>
                        +7(831)413-78-13
                    </a>
                    <a className={!type ? cls.phoneLink : cls.phoneLink + ' ' + cls.phoneLinkHeader}
                       href="tel:89202537813" aria-label={'позвонить на номер 89202537813'}>
                        +7-920-253-78-13
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Phone;
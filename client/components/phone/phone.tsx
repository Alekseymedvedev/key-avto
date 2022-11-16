import {FC} from 'react';
import cls from './phone.module.scss'

interface T {
    phone:string
    children?: any
}

const Phone: FC<T> = ({children,phone}) => {
    return (
        <>
            <a className={cls.phoneLink} href="tel:89202537813">
                <svg id="icon-phone" viewBox="0 0 32 32" style={{width: "16px", height: "16px"}}>
                    <path
                        d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
                </svg>
                {phone}
            </a>
        </>
    );
};

export default Phone;
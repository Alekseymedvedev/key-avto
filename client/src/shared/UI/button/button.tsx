import React, {FC} from 'react';
import cls from './button.module.scss'

interface T {
    children: string;
    onClick?: (e: any) => void;
}


const Button: FC<T> = ({children, onClick}) => {
    return (
        <button className={cls.btn} onClick={(e) => {
            onClick ? onClick(e) : null
        }} aria-label={`кнопка открытия модального окна`}>
            {children}
        </button>
    );
};

export default Button;
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
        }}>
            {children}
        </button>
    );
};

export default Button;
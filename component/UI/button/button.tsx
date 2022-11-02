import React, {FC} from 'react';
import cls from './button.module.scss'

interface T{
    children: string
}


const Button:FC<T> = ({children}) => {
    return (
        <button className={cls.btn}>
            {children}
        </button>
    );
};

export default Button;
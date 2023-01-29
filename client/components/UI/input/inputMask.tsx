import {FC, useState} from "react";
import cls from './input.module.scss'
import InputMask from "react-input-mask";

interface T{
    value:any;
    onChange:any
}

const Input:FC<T> = ({value,onChange}) => {

    return (
        <label className={cls.label}>
            <span className={cls.text}>Телефон</span>
            <InputMask
                className={cls.input}
                mask="+7 (999) 999-99-99"
                placeholder="+7 (___)___-__-__"
                type="text"
                value={value}
                onChange={(e:any)=>{onChange(e.target.value)}}
                />
        </label>
    );
};

export default Input;
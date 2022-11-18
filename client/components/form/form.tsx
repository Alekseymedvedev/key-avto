import React from 'react';
import Button from "../UI/button/button";
import cls from './form.module.scss'
import Input from "../UI/input/inputMask";

const Form = () => {
    return (
        <form className={cls.form}>
            <div className={cls.title}>Заполните форму</div>
            <Input/>
            <Button>
                Отправить заявку
            </Button>
        </form>
    );
};

export default Form;
"use client"

import React, {useState} from 'react';
import cls from './form.module.scss'
import Button from "@/shared/UI/button/button";
import Input from "@/shared/UI/input/inputMask";
import axios from "axios";

const Form = () => {

    const [value,setValue]=useState('')
    const aaa= {phone:value}
    const sendEmail =(e:any)=>{
        console.log('test')
        e.preventDefault()
       axios.post('http://localhost:5000/send-mailer',aaa).then(()=>{
           console.log('Отправлено')})
    }
    return (
        <form className={cls.form}>
            <div className={cls.title}>Заполните форму</div>
            <Input value={value} onChange={setValue}/>
                <Button onClick={sendEmail}>
                    Отправить заявку
                </Button>
                {/*<button onClick={(e)=>{sendEmail(e)}}>Отправить заявку</button>*/}

        </form>
    );
};

export default Form;
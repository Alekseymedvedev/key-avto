import React, {useState} from 'react';
import Button from "../UI/button/button";
import cls from './form.module.scss'
import Input from "../UI/input/inputMask";
import axios from "axios";
import {BASE_URL} from "../../API/API";

const Form = () => {
    const [value,setValue]=useState('')
    const aaa= {phone:value}
    const sendEmail =(e:any)=>{
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
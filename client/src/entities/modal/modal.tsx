
"use client"
import React, {FC, useState} from 'react';
import cls from './modal.module.scss'
import Button from "@/shared/UI/button/button";

interface type {
    textBtn:string
    children?: any
}

const Modal: FC<type> = ({children, textBtn}) => {
const [visible,setVisible]=useState(false)

    const rootClasses = [cls.modal]
    if (visible) {
        rootClasses.push(cls.active);
    }

    return (
        <>
            <div className="" onClick={() => {
                setVisible(true)
            }

            }>
                <Button>{textBtn}</Button>
            </div>


            <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
                <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={cls.btn} onClick={() => setVisible(false)}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="35.4683" height="9.21254" rx="3"
                                  transform="matrix(0.705326 0.708883 -0.705326 0.708883 6.5 0.328125)" fill="#212121"/>
                            <rect width="35.4683" height="9.21254" rx="3"
                                  transform="matrix(-0.705326 0.708883 -0.705326 -0.708883 31.5156 6.53125)"
                                  fill="#212121"/>
                        </svg>
                    </button>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
import React from 'react';
import cls from "./social.module.scss";
import Image from "next/image";
import tg from "../../images/icons/telegram.svg";
import wp from "../../images/icons/whatsapp.svg";
import sk from "../../images/icons/skype.svg";

const Social = () => {
    return (
        <div className={cls.social}>
            <div className={cls.title}>Написать в</div>
            <div className={cls.inner}>
                <a href="https://t.me/vuejs_ru" target="_blank">
                    <Image
                        width={40}
                        height={40}
                        src={tg} alt=""
                    />
                </a>
                <a href="">
                    <Image
                        width={40}
                        height={40}
                        src={wp} alt=""
                    />
                </a>
                <a href="">
                    <Image
                        width={40}
                        height={40}
                        src={sk} alt=""
                    />
                </a>
            </div>
        </div>
    );
};

export default Social;
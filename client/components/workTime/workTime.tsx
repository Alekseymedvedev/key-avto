import React, {FC} from 'react';
import cls from './workTime.module.scss'



const WorkTime = () => {
    return (
        <div className={cls.workTime}>
            <span>График работы</span>
            <span>С 10.00 до 20.00 пн.-пт.</span>
        </div>
    );
};

export default WorkTime;
import React, {FC} from 'react';
import cls from './workTime.module.scss'

interface T {
    heading?: boolean | string
}

const WorkTime: FC<T> = ({heading}) => {
    return (
        <div className={cls.workTime}>
            <span className={heading ? cls.heading : ''}>График работы</span>
            <span>С 10.00 до 20.00 пн.-пт.</span>
        </div>
    );
};

export default WorkTime;
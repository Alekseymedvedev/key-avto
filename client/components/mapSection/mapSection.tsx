import React from 'react';
import cls from './mapSection.module.scss'


const MapSection = () => {

    return (
        <section className={cls.mapSection}>
            <div className="container">
                <h2>Мы находимся здесь</h2>

                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abe2b3fd75e8d747fef4b5a5fc1195d719e595ba44b8ca227a8d2a6b6715dcd4c&amp;source=constructor"
                    width="100%" height="400" frameBorder="0"></iframe>
            </div>
        </section>
    );
};

export default MapSection;
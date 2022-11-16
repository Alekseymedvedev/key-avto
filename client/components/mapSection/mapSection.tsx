import React from 'react';
import cls from './mapSection.module.scss'
import {Placemark, Map, YMaps, ZoomControl} from "@pbe/react-yandex-maps";


const MapSection = () => {

    return (
        <section className={cls.mapSection+ " _vrm"}>

            <div className="container">
                <h2>Мы находимся здесь</h2>

                <YMaps >
                    <Map
                        width={100+'%'}
                        height={470}
                        defaultState={{
                            center: [56.353385, 43.878920],
                            zoom: 15,
                        }}
                    >
                        <Placemark geometry={[56.353385, 43.878920]} options={{balloonContent: '<img src="http://img-fotki.'}}/>
                        <ZoomControl options={{  }} />
                    </Map>
                </YMaps>
              
            </div>
        </section>
    );
};

export default MapSection;
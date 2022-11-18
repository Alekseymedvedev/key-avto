import React, {FC} from 'react';
import cls from './mapSection.module.scss'
import {Placemark, Map, YMaps, ZoomControl} from "@pbe/react-yandex-maps";

interface T{
    heading?: string
}

const MapSection:FC<T> = ({heading}) => {

    return (
        <section className={cls.mapSection+ " _vrm"}>

            <div className="container">
                {heading && <h2>{heading}</h2>}


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
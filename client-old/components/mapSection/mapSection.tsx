import React, {FC} from 'react';
import cls from './mapSection.module.scss'
import {Placemark, Map, YMaps, ZoomControl, GeoObject} from "@pbe/react-yandex-maps";

interface T{
    heading?: string
}
const mapState = { center: [56.353385, 43.878920], zoom: 15 };
const MapSection:FC<T> = ({heading}) => {

    return (
        <section className={cls.mapSection+ " _vrm"}>

            <div className="container">
                {heading && <h2>{heading}</h2>}
                <YMaps>
                    <Map
                        width={100+'%'}
                        height={470}
                        state={mapState}
                    >
                        <GeoObject
                            geometry={{
                                type: 'Point',
                                coordinates: [56.353385, 43.878920],
                            }}
                            properties={{
                                iconContent: '"КЛЮЧ-АВТО"',
                                // hintContent: 'Ну давай уже тащи',
                            }}
                            options={{
                                preset: 'islands#nightStretchyIcon',
                                draggable: true,
                            }}
                        />
                        <ZoomControl options={{  }} />
                    </Map>
                </YMaps>

            </div>
        </section>
    );
};

export default MapSection;
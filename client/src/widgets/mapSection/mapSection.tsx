"use client"
// @ts-ignore
import React, {FC, ReactDOM} from 'react';
import cls from './mapSection.module.scss'
// import ymaps3 from "@yandex/ymaps3-clusterer";
import Script from "next/script";
// import {Placemark, Map, YMaps, ZoomControl, GeoObject} from "@pbe/react-yandex-maps";


interface T{
    heading?: string
}
// // @ts-ignore
// const mapState = { center: [56.353385, 43.878920], zoom: 15 };
// // @ts-ignore
// const ymaps3Reactify =  ymaps3.import('@yandex/ymaps3-reactify');
// // @ts-ignore
// const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
// const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = reactify.module(ymaps3);
const MapSection:FC<T> = ({heading}) => {


    // @ts-ignore
    return (
        <section className={cls.mapSection+ " _vrm"}>
            <div className="container">
                <div id="map" style={{width: 600, height: 400,}}></div>
{/*                <Script src="https://api-maps.yandex.ru/v3/?apikey=665ca515-fdef-4c9d-94bd-00236313164e&lang=ru_RU"/>*/}
{/*                <Script id="show-banner">*/}
{/*                    {`*/}
{/*                   const {YMap} = ymaps3;*/}

{/*// Инициализируйте карту*/}
{/*const map = new YMap(*/}

{/*  // Передайте ссылку на HTMLElement контейнера*/}
{/*  document.getElementById('root'),*/}

{/*  // Передайте параметры инициализации карты*/}
{/*  {*/}
{/*    location: {*/}
{/*      zoom: 10,*/}
{/*      center: [25.229762, 55.289311]*/}
{/*    }*/}
{/*  }*/}
{/*);*/}
{/*                    `}*/}
{/*                </Script>*/}
                {/*<YMap location={{center: [25.229762, 55.289311], zoom: 9}} mode="vector">*/}
                {/*    <YMapDefaultSchemeLayer/>*/}
                {/*    <YMapDefaultFeaturesLayer/>*/}

                {/*    <YMapMarker coordinates={[25.229762, 55.289311]} draggable={true}>*/}
                {/*        <section>*/}
                {/*            <h1>You can drag this header</h1>*/}
                {/*        </section>*/}
                {/*    </YMapMarker>*/}
                {/*</YMap>*/}
                {/*{heading && <h2>{heading}</h2>}*/}
                {/*<YMaps>*/}
                {/*    <Map*/}
                {/*        width={100+'%'}*/}
                {/*        height={470}*/}
                {/*        state={mapState}*/}
                {/*    >*/}
                {/*        <GeoObject*/}
                {/*            geometry={{*/}
                {/*                type: 'Point',*/}
                {/*                coordinates: [56.353385, 43.878920],*/}
                {/*            }}*/}
                {/*            properties={{*/}
                {/*                iconContent: '"КЛЮЧ-АВТО"',*/}
                {/*                // hintContent: 'Ну давай уже тащи',*/}
                {/*            }}*/}
                {/*            options={{*/}
                {/*                preset: 'islands#nightStretchyIcon',*/}
                {/*                draggable: true,*/}
                {/*            }}*/}
                {/*        />*/}
                {/*        <ZoomControl options={{  }} />*/}
                {/*    </Map>*/}
                {/*</YMaps>*/}

            </div>
        </section>
    );
};

export default MapSection;
import {Html, Head, Main, NextScript} from 'next/document'
import mainLayout from "../layout/mainLayout";
import Script from "next/script";
import React from "react";

export default function Document() {
    return (
        <Html dir="ltr" lang="ru-RU">
            <Head/>
            <body>
            <Main/>
            <NextScript/>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    
            

              `,
                }}
            />



            <noscript>
                {/*<div>*/}
                {/*    <img src="https://mc.yandex.ru/watch/92033844"  style={{position: 'absolute', left: '-9999px'}}*/}
                {/*         alt=""/>*/}
                {/*</div>*/}
            </noscript>
            </body>
        </Html>
    )
}

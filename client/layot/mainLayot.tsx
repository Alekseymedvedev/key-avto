import React, {FC} from 'react';
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


interface MainLayoutProps {
    children:any;
    title: string;
    description?: string;
    keywords?: string;
}
const MainLayot:FC<MainLayoutProps> = ({children,title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>
            </Head>

            <Header/>
            {children}

            <Footer/>
        </div>
    );
};

export default MainLayot;

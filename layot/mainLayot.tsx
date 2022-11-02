import React, {FC} from 'react';
import Head from "next/head";
import Header from "../component/header/header";
import NavBar from "../component/navBar/navBar";
import Footer from "../component/footer/footer";

interface MainLayoutProps {
    children:any;
    title?: string;
    description?: string;
    keywords?: string;
}
const MainLayot:FC<MainLayoutProps> = ({children}) => {
    // @ts-ignore
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <NavBar/>
            {children}

            <Footer/>
        </div>
    );
};

export default MainLayot;

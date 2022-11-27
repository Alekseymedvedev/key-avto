import '../styles/reset.scss'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import {wrapper} from "../store";
import {FC} from "react";

interface T{
    Component:any
}

const MyApp:FC<T> = ({Component, ...rest}) => {
    const {store, props} = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
};

export default MyApp
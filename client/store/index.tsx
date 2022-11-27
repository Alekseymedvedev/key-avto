import { configureStore } from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";
import {categoriesApi} from "./categoriesApi";

export const makeStore = () =>
    configureStore({
        reducer: {
            [categoriesApi.reducerPath]: categoriesApi.reducer,
        },
        middleware: (gDM) => gDM().concat(categoriesApi.middleware),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
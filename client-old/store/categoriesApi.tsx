import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
// /categories
export const categoriesApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: [],
    endpoints: (builder) => ({
        getCategoriesByName: builder.query<
            { species: { name: string }; sprites: { front_shiny: string } },
            string
            >({
            query: (name) => `categories/${name}`,
        }),
        getCategories: builder.query<{
            map(arg0: (item: any) => JSX.Element): any; results: Array<{ name: string }>
        }, void>({
            query: () => `categories/`,
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useGetCategoriesByNameQuery,
    useGetCategoriesQuery,
    util: { getRunningQueriesThunk },
} = categoriesApi;

// export endpoints for use in SSR
export const { getCategoriesByName, getCategories } = categoriesApi.endpoints;
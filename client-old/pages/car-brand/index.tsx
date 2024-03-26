import BrandList from "../../components/brandList/brandList";
import MainLayout from "../../layout/mainLayout";
import React, {FC} from "react";
import {BASE_URL} from "../../API/API";


// export async function getStaticProps() {
//     const res = await fetch(BASE_URL+'/car-brand')
//     const data = await res.json()
//
//     if(!data){
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: {brand:data},
//     }
// }
interface T{
    brand?:any
}

const Index:FC<T> = ({brand}) => {

    return (
        <MainLayout title={brand}>
            <BrandList brand={brand}/>
        </MainLayout>
    );
};

export default Index;
import BrandList from "../../components/brandList/brandList";
import MainLayout from "../../layout/mainLayout";
import React, {FC} from "react";


export async function getStaticProps() {
    const url = process.env.BASE_URL
    const res = await fetch('http://localhost:5000/car-brand')
    const data = await res.json()

    if(!data){
        return {
            notFound: true
        }
    }
    return {
        props: {brand:data},
    }
}
interface T{
    brand?:any
}


const Index:FC<T> = ({brand}) => {
    return (
        <MainLayout title="Обслуживаемые бренды">
            <BrandList brand={brand}/>
        </MainLayout>
    );
};

export default Index;
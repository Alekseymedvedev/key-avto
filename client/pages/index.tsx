import {FC} from "react";
import MainLayout from "../layout/mainLayout";
import Banner from "../components/banner/banner";
import CategoriesList from "../components/categoriesList/categoriesList";
import BrandList from "../components/brandList/brandList";
import PriceTable from "../components/priceTable/priceTable";
import MapSection from "../components/mapSection/mapSection";
import {notFound} from "next/navigation";

export async function getStaticProps() {

    const res = await fetch('http://localhost:5000/categories')
    const data = await res.json()

    const res2 = await fetch('http://localhost:5000/car-brand')
    const data2 = await res2.json()
    if(!data){
        return {
            notFound: true
        }
    }
    return {
        props: {categories:data, brand:data2},
    }
}
interface T{
    categories?:any
    brand?:any
}

 const Home:FC<T>=({categories,brand})=> {

    return (
        <MainLayout title="Главная страница">
            <Banner/>
            <CategoriesList categories={categories}/>
            <BrandList brand={brand}/>
            <PriceTable  heading="Наши работы"/>
            <MapSection heading="Мы находимся здесь"/>
        </MainLayout>
    )
}
export default Home

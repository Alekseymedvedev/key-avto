import {FC, useEffect, useState} from "react";
import MainLayout from "../layout/mainLayout";
import Banner from "../components/banner/banner";
import CategoriesList from "../components/categoriesList/categoriesList";
import BrandList from "../components/brandList/brandList";
import PriceTable from "../components/priceTable/priceTable";
import MapSection from "../components/mapSection/mapSection";
import {BASE_URL, DB_URL} from "../API/API";

export async function getStaticProps() {

    const res = await fetch(DB_URL+'categories')
        const data = await res?.json()

    const res2 = await fetch(DB_URL+'car-brand')
    const data2 = await res2.json()

    const res3 = await fetch(DB_URL+'categories/tekhnicheskoe-obsluzhivanie')
    const data3 = await res3?.json()
    if (!res || !data2 || !data3) {
        return {
            notFound: true
        }
    }
    return {
        props: {categories: data, category: data3, brand: data2},
    }
}

interface T {
    categories?: any
    brand?: any
    category?: any
}


const Home: FC<T> = ({categories, brand, category}) => {
    const [priceTableState, setPriceTableState] = useState([])
    useEffect(() => {
        setPriceTableState(category?.worksCategories)
    }, [])
    return (
        <MainLayout title="Главная страница">
            <Banner/>
            <CategoriesList categories={categories}/>
            <BrandList brand={brand}/>
            <PriceTable worksCategories={priceTableState} heading="Наши работы"/>
            <MapSection heading="Мы находимся здесь"/>
        </MainLayout>
    )
}
export default Home

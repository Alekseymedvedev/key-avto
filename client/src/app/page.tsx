import Banner from "@/widgets/banner/banner";
import CategoriesList from "@/widgets/categoriesList/categoriesList";
import MapSection from "@/widgets/mapSection/mapSection";
import PriceTable from "@/widgets/priceTable/priceTable";
import {brandType} from "@/types/types";
import BrandList from "@/widgets/brandList/brandList";



async function getData() {
    const response = await fetch(`${process.env.BASE_URL}categories`)
    return response.json()
}
async function getBrand():Promise<brandType[]> {
    const response = await fetch(`${process.env.BASE_URL}car-brand`)
    return response.json()
}

export default async function Home() {
    const categories = await getData()
    const brand = await getBrand()
    return (
        <>
            <Banner/>
            <CategoriesList categories={categories}/>
            <BrandList brand={brand}/>
            <PriceTable heading="Наши работы"/>
            <MapSection heading="Мы находимся здесь"/>
        </>
    );
}

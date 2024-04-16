import Banner from "@/widgets/banner/banner";
import CategoriesList from "@/widgets/categoriesList/categoriesList";
import MapSection from "@/widgets/mapSection/mapSection";
import PriceTable from "@/widgets/priceTable/priceTable";
import {bannerType, brandType, categoryType, worksCategoriesType} from "@/types/types";
import BrandList from "@/widgets/brandList/brandList";
import {Suspense} from "react";
import {BannerLazy} from "@/widgets/banner/bannerLazy";



async function getData() {
    const response = await fetch(`${process.env.BASE_URL}api/categories`)
    return response.json()
}
async function getBrand():Promise<brandType[]> {
    const response = await fetch(`${process.env.BASE_URL}api/car-brand`)
    return response.json()
}
async function getBanner():Promise<bannerType[]> {
    const response = await fetch(`${process.env.BASE_URL}api/banner`)
    return response.json()
}
async function getPrice() {
    const response = await fetch(`${process.env.BASE_URL}api/categories/tekhnicheskoe-obsluzhivanie`)
    return response.json()
}

export default async function Home() {
    const categories = await getData()
    const brand = await getBrand()
    const banner = await getBanner()
    // const price = await getPrice()
    return (
        <>

            <Suspense fallback={'...'}>
                <BannerLazy data={banner}/>
            </Suspense>

            <CategoriesList categories={categories}/>
            <BrandList brand={brand}/>
            {/*<PriceTable heading="Наши работы"  worksCategories={price.categoriesWork}/>*/}
            <MapSection heading="Мы находимся здесь"/>
        </>
    );
}

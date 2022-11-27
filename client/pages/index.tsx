import {FC} from "react";
import MainLayout from "../layout/mainLayout";
import Banner from "../components/banner/banner";
import CategoriesList from "../components/categoriesList/categoriesList";
import BrandList from "../components/brandList/brandList";
import PriceTable from "../components/priceTable/priceTable";
import MapSection from "../components/mapSection/mapSection";

export async function getStaticProps() {
    const url = process.env.BASE_URL
    const res = await fetch(url+'/categories')
    const data = await res.json()

    return {
        props: {categories:data},
    }
}
interface T{
    categories?:any
    works?:any
}

 const Home:FC<T>=({categories})=> {
     console.log(categories)
    return (
        <MainLayout title="Главная страница">
            <Banner/>
            <CategoriesList categories={categories}/>
            <BrandList/>
            <PriceTable heading="Наши работы"/>
            <MapSection heading="Мы находимся здесь"/>
        </MainLayout>
    )
}
export default Home

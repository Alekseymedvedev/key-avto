import {FC} from "react";
import MainLayot from "../layot/mainLayot";
import Banner from "../components/banner/banner";
import CategoriesList from "../components/categoriesList/categoriesList";
import BrandList from "../components/brandList/brandList";
import PriceTable from "../components/priceTable/priceTable";
import MapSection from "../components/mapSection/mapSection";

// export async function getStaticProps() {
//     const url = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com'
//     const res = await fetch(url)
//     const res2 = await fetch(`${url}/vichlop`)
//     const data = await res.json()
//     const data2 = await res2.json()
//
//     return {
//         props: {context:data, works:data2}, // will be passed to the page component as props
//     }
// }
interface T{
    context?:any
    works:any
}

 const Home:FC<T>=({context,works})=> {
     // console.log(context,works)
    return (
        <MainLayot title="Главная страница">
            <Banner/>
            <CategoriesList/>
            <BrandList/>
            <PriceTable heading="Наши работы"/>
            <MapSection heading="Мы находимся здесь"/>
        </MainLayot>
    )
}
export default Home

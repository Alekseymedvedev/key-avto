import Banner from "@/widgets/banner/banner";
import CategoriesList from "@/widgets/categoriesList/categoriesList";

async function getData() {
    const response = await fetch('http://localhost:5000/categories')
    return response.json()
}

export default async function Home() {
    const categories = await getData()
    return (
        <main>
            <Banner/>
            <CategoriesList categories={categories}/>
        </main>
    );
}

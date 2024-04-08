import {Metadata} from "next";
import CategoriesList from "@/widgets/categoriesList/categoriesList";

interface IParams {
    params: {
        id: string
    }
}

async function getData() {
    const response = await fetch(`${process.env.BASE_URL}api/categories`)
     return response.json()
}
export async function generateMetadata(): Promise<Metadata> {
    return {
        // title: `Автосервис "КЛЮЧ-АВТО": Надежный партнер по ремонту и обслуживанию автомобилей`,
        // description: `Сотрудники автосервиса "КЛЮЧ-АВТО" уже более 10 лет работают в сфере ремонта и технического обслуживания автомобилей различных марок и моделей. "КЛЮЧ-АВТО" пользуется заслуженной репутацией надежного, ответственного и профессионального партнера. Наши услуги включают диагностику неисправностей, регламентный и срочный ремонт, комплексное ТО и многое другое. Мы выполняем все работы эффективно, профессионально и в оговоренные сроки.`,
        // keywords: `автосервис, КЛЮЧ-АВТО, ремонт автомобилей, обслуживание, техническое обслуживание, диагностика неисправностей, профессиональный автосервис, ${category.title}`,
        // openGraph:{
        //     title: `Автосервис КЛЮЧ-АВТО: Надежный партнер по ремонту и обслуживанию автомобилей`,
        //     description: `Сотрудники автосервиса КЛЮЧ-АВТО уже более 10 лет работают в сфере ремонта и технического обслуживания автомобилей различных марок и моделей. Узнайте больше о наших услугах и профессиональном подходе к работе.`,
        //     url:`${process.env.BASE_URL}car-brand/`,
        //     images:`/`
        // }
    }
}

export default async function Categories() {
    const categories = await getData()
    return (
        <>
            <CategoriesList categories={categories}/>
        </>
    );
}
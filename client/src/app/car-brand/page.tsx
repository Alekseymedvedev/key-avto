
import BrandList from "@/widgets/brandList/brandList";
import {brandType} from "@/types/types";
import {Metadata} from "next";

async function getBrand():Promise<brandType[]> {
    const response = await fetch(`${process.env.BASE_URL}api/car-brand`)
    return response.json()
}
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Автосервис "КЛЮЧ-АВТО": Надежный партнер по ремонту и обслуживанию автомобилей`,
        description: `Сотрудники автосервиса "КЛЮЧ-АВТО" уже более 10 лет работают в сфере ремонта и технического обслуживания автомобилей различных марок и моделей. "КЛЮЧ-АВТО" пользуется заслуженной репутацией надежного, ответственного и профессионального партнера. Наши услуги включают диагностику неисправностей, регламентный и срочный ремонт, комплексное ТО и многое другое. Мы выполняем все работы эффективно, профессионально и в оговоренные сроки.`,
        keywords: `автосервис, КЛЮЧ-АВТО, ремонт автомобилей, обслуживание, техническое обслуживание, диагностика неисправностей, профессиональный автосервис`,
        openGraph:{
            title: `Автосервис КЛЮЧ-АВТО: Надежный партнер по ремонту и обслуживанию автомобилей`,
            description: `Сотрудники автосервиса КЛЮЧ-АВТО уже более 10 лет работают в сфере ремонта и технического обслуживания автомобилей различных марок и моделей. Узнайте больше о наших услугах и профессиональном подходе к работе.`,
            url:`${process.env.BASE_URL}api/car-brand/`,
            images:`${process.env.BASE_URL}banner.png`
        }
    }
}
export default async function Brand () {
    const brand = await getBrand()
    return (
        <>
            <BrandList brand={brand}/>
        </>
    );
};


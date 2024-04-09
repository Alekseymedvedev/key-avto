import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";
import Breadcrumbs from "@/entities/breadcrumbs/breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Автосервис КЛЮЧ-АВТО – качественное обслуживание и ремонт автомобилей",
  description: "Предлагаем качественное обслуживание и ремонт автомобилей в КЛЮЧ-АВТО автосервисе. Профессиональные мастера, быстрое обслуживание, доступные цены.",
    keywords:'автосервис, ремонт автомобилей, техническое обслуживание, шиномонтаж',
    openGraph:{
        title: "Автосервис КЛЮЧ-АВТО – качественное обслуживание и ремонт автомобилей",
        description: "Предлагаем качественное обслуживание и ремонт автомобилей в КЛЮЧ-АВТО автосервисе. Профессиональные мастера, быстрое обслуживание, доступные цены.",
        url:`https://key-avto152.ru/`,
        images:`/logo.svg`
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
      <Header/>
      <Breadcrumbs/>
      <main className="main">
        {children}
      </main>

      <Footer/>
      </body>
    </html>
  );
}

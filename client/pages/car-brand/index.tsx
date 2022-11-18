import BrandList from "../../components/brandList/brandList";
import MainLayout from "../../layout/mainLayout";
import React from "react";

const Index = () => {
    return (
        <MainLayout title="Обслуживаемые бренды">
            <BrandList/>
        </MainLayout>
    );
};

export default Index;
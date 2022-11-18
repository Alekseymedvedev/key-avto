import MainLayout from "../../layout/mainLayout";
import CategoriesList from "../../components/categoriesList/categoriesList";
import React from "react";
;

const Index = () => {
    return (
        <MainLayout title="Услуги">
            <CategoriesList/>
        </MainLayout>
    );
};

export default Index;
import MainLayout from "../../layout/mainLayout";
import CategoriesList from "../../components/categoriesList/categoriesList";
import React from "react";

const Index = (props?: any) => {
    // const router = useRouter();
    //
    // const name = router.route;
    // const result = useGetCategoriesQuery();

    return (
        <MainLayout title="Услуги">
            <CategoriesList/>
        </MainLayout>
    );
};

export default Index;
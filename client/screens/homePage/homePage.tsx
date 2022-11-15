import Banner from "../../components/banner/banner";
import MainLayot from "../../layot/mainLayot";
import CategoriesList from "../../components/categoriesList/categoriesList";
import BrandList from "../../components/brandList/brandList";
import PriceTable from "../../components/priceTable/priceTable";
import MapSection from "../../components/mapSection/mapSection";

const HomePage = () => {
    return (
        <MainLayot>
            <Banner/>
            <CategoriesList/>
            <BrandList/>
            <PriceTable/>
            <MapSection/>
        </MainLayot>
    );
};

export default HomePage;
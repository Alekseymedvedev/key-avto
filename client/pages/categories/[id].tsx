import React, {FC} from 'react';
import PriceTable from "../../components/priceTable/priceTable";
import MainLayot from "../../layot/mainLayot";

interface T {
    children?: any
}

const Category:FC<T> = ({children}) => {
    return (
        <MainLayot title="Category">
            <PriceTable/>
        </MainLayot>
    );
};

    export default Category;
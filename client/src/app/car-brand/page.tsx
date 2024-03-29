


// export async function getStaticProps() {
//     const res = await fetch(BASE_URL+'/car-brand')
//     const data = await res.json()
//
//     if(!data){
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: {brand:data},
//     }
// }
import BrandList from "@/widgets/brandList/brandList";
import {FC} from "react";

interface T{
    brand?:any
}

const Index:FC<T> = ({brand}) => {

    return (
        <>
            <BrandList brand={brand}/>
        </>
    );
};

export default Index;
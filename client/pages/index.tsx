import HomePage from "../screens/homePage/homePage";
import {FC} from "react";

export async function getStaticProps() {
    const url = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com'
    const res = await fetch(url)
    const res2 = await fetch(`${url}/vichlop`)
    const data = await res.json()
    const data2 = await res2.json()

    return {
        props: {context:data, works:data2}, // will be passed to the page component as props
    }
}
interface T{
    context?:any
    works:any
}

 const Home:FC<T>=()=> {
    return (
        <div>
            <HomePage/>
        </div>
    )
}
export default Home

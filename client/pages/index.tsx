import HomePage from "../screens/homePage/homePage";
import {FC} from "react";

export async function getStaticProps() {
    const url = process.env.BASE_URL || 'https://jsonplaceholder.typicode.com'
    const res = await fetch(url+"/posts")
    const data = await res.json()

    return {
        props: {context:data}, // will be passed to the page component as props
    }
}
interface T{
    context?:any
}
 const Home:FC<T>=({context})=> {
     // console.log(context)
    return (
        <div>
            <HomePage/>
        </div>
    )
}
export default Home

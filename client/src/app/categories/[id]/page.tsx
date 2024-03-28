import {Metadata} from "next";
import {string} from "prop-types";

interface IParams {
    params: {
        id: string
    }
}
async function getData(){
    const response = await  fetch('http://localhost:5000/categories')
    return response.json()
}
export async function generateMetadata({params: {id}}: IParams): Promise<Metadata> {
    const categories = await getData()
    return {
        title: `${categories[0].title}`,

    }
}

export default async function Category() {
    return (
        <main>
            console.log(categories)

        </main>
    );
}
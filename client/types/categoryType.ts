export interface worksCategoriesType {
    id: number
    image: string
    name: string
    price: string
    time: string
}

export interface categoryType {
    id: number;
    image: string;
    name: string;
    title: string;
    worksCategories: worksCategoriesType[]
}
export interface brandType {
    id: number;
    image: string;
    name: string;
}
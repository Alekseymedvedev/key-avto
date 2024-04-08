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
    categoriesWork: worksCategoriesType[]
}

export interface brandType {
    id: number;
    image: string;
    name: string;
}

export interface bannerType {
    id: number,
    title: string,
    price: string,
    description: string,
    image: string
}
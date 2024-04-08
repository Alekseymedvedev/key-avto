import {Column, DataType} from "sequelize-typescript";

export class CreateBannerDto {
    title: string;
    image: string;
    price: string;
    description: string;
}

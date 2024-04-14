import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {CarBrand} from "../car-brand/car-brand.model";

interface CarBrandCreateArticleAttrs {
    text: string;
    carBrandId: number;
}
@Table({tableName: 'car_brand_article'})
export class CarBrandArticle extends Model<CarBrandArticle, CarBrandCreateArticleAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.TEXT, unique: true, allowNull: false})
    text: string;

    @ForeignKey(() => CarBrand)
    @Column({type: DataType.INTEGER})
    carBrandId:number;

    @BelongsTo(() => CarBrand)
    carBrand: CarBrand
}


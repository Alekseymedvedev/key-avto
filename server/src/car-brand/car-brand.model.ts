import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {CarBrandArticle} from "../car-brand-article/car-brand-article.model";

interface CarBrandCreateAttrs {
    name: string;
    image: string;
    article: string;
    description: string;
}

@Table({tableName: 'car-brand'})
export class CarBrand extends Model<CarBrand, CarBrandCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING})
    image: string;

    @Column({type: DataType.STRING})
    article: string;

    @Column({type: DataType.STRING})
    description: string;

    @HasMany(() => CarBrandArticle)
    CarBrandArticles: CarBrandArticle[]
}


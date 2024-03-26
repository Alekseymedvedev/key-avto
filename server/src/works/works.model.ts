
import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Category} from "../categories/categories.model";

interface WorkCategoryCreateAttrs {
    catId:number;
    name: string;
    image: string;
    price: string;
    time: string;
}


@Table({tableName: 'works'})
export class WorkCategory extends Model<WorkCategory, WorkCategoryCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    image: string;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING})
    price: string;

    @Column({type: DataType.STRING})
    time: string;

    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER})
    catId:number;

    @BelongsTo(() => Category)
    category: Category
}
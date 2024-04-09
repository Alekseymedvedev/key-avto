import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Category} from "../categories/categories.model";
import {CategoriesWork} from "../categories/categoriesAndWoks.model";

interface WorkCategoryCreateAttrs {
    catId:number;
    name: string;
    image: string;
    price: string;
    time: string;
}


@Table({tableName: 'works'})
export class WorkCategory extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    name: string;

    @Column({type: DataType.STRING})
    price: string;

    @Column({type: DataType.STRING})
    time: string;

    @BelongsToMany(() => Category, () => CategoriesWork)
    category: Category[];
}
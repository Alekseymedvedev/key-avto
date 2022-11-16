import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {WorkCategory} from "../works/works.model";

interface CategoryCreateAttrs {
    name: string;
    title: string;
    image: string;
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoryCreateAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @Column({type: DataType.STRING})

    image: string;

    @HasMany(() => WorkCategory)
    worksCategories: WorkCategory[]
}


import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {WorkCategory} from "../works/works.model";
import {CategoriesWork} from "./categoriesAndWoks.model";

interface CategoryCreateAttrs {
    name: string;
    title: string;
    image: string;
}

@Table({tableName: 'categories'})
export class Category extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @Column({type: DataType.STRING})
    image: string;

    @BelongsToMany(() => WorkCategory, () => CategoriesWork)
    categoriesWork: Partial<WorkCategory>[];
}



import {Column,DataType,Model,Table,ForeignKey} from 'sequelize-typescript';
import {Category} from "./categories.model";
import {WorkCategory} from "../works/works.model";

@Table({ tableName: 'categories_work' })
export class CategoriesWork extends Model {
    @Column({type: DataType.INTEGER,unique: true,autoIncrement: true, primaryKey: true,})
    id: number;

    @ForeignKey(() => Category)
    @Column({ type: DataType.NUMBER })
    categoryId: number;

    @ForeignKey(() => WorkCategory)
    @Column({ type: DataType.NUMBER })
    workId: number;
}

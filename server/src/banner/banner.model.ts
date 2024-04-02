import {Column, DataType, Model, Table} from "sequelize-typescript";



@Table({tableName: 'banner'})
export class Banner extends Model {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @Column({type: DataType.STRING})
    image: string;

    @Column({type: DataType.STRING})
    price: string;

    @Column({type: DataType.STRING})
    description: string;
}


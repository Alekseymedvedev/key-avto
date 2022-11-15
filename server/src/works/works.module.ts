import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {WorksService} from "./works.service";
import {WorksController} from "./works.controller";
import {Category} from "../categories/categories.model";
import {FileModule} from "../file/file.module";
import { WorkCategory } from './works.model';

@Module({
    controllers: [WorksController],
    providers: [WorksService],
    imports:[
        SequelizeModule.forFeature([Category,WorkCategory]),
        FileModule
    ]
})
export class WorksModule {}

import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Category} from "./categories.model";
import {WorkCategory} from "../works/works.model";
import {FileModule} from "../file/file.module";
import {CategoriesWork} from "./categoriesAndWoks.model";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports:[
      SequelizeModule.forFeature([Category,WorkCategory,CategoriesWork]),
      FileModule
      ]
})

export class CategoriesModule {}

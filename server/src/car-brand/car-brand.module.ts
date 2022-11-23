import { Module } from '@nestjs/common';
import { CarBrandController } from './car-brand.controller';
import { CarBrandService } from './car-brand.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {FileModule} from "../file/file.module";
import {CarBrand} from "./car-brand.model";
import {CarBrandArticle} from "../car-brand-article/car-brand-article.model";

@Module({
  controllers: [CarBrandController],
  providers: [CarBrandService],
  imports:[
    SequelizeModule.forFeature([CarBrand,CarBrandArticle]),
    FileModule
  ]
})
export class CarBrandModule {}

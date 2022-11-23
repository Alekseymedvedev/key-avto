import { Module } from '@nestjs/common';
import { CarBrandArticleController } from './car-brand-article.controller';
import { CarBrandArticleService } from './car-brand-article.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {CarBrandArticle} from "./car-brand-article.model";
import {CarBrand} from "../car-brand/car-brand.model";

@Module({
  controllers: [CarBrandArticleController],
  providers: [CarBrandArticleService],
  imports:[
    SequelizeModule.forFeature([CarBrandArticle,CarBrand])
  ]
})
export class CarBrandArticleModule {}

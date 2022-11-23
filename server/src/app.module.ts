import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import { CategoriesModule } from './categories/categories.module';
import {ConfigModule} from "@nestjs/config";
import {Category} from "./categories/categories.model";
import { WorksModule } from './works/works.module';
import {WorkCategory} from "./works/works.model";
import { FileModule } from './file/file.module';
import { CarBrandModule } from './car-brand/car-brand.module';
import { CarBrandArticleModule } from './car-brand-article/car-brand-article.module';
import {CarBrand} from "./car-brand/car-brand.model";
import {CarBrandArticle} from "./car-brand-article/car-brand-article.model";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath:'.env'
      }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.LOGIN,
      password: '',
      database: process.env.DB,
      models: [Category,WorkCategory,CarBrand,CarBrandArticle],
      autoLoadModels:true
    }),
    CategoriesModule,
    WorksModule,
    FileModule,
    CarBrandModule,
    CarBrandArticleModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
